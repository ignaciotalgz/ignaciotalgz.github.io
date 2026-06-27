// sw.js
// Service Worker de ExpoApp v2.
// Estrategia: "cachear todo en la instalacion" para que, una vez instalada la PWA
// (con internet, antes de ir al stand), la app y los 6 videos queden disponibles
// 100% offline durante el evento.

const CACHE_VERSION = 'v2';
const CACHE_NAME = `expoapp-${CACHE_VERSION}`;

// Shell de la app: si falta alguno de estos archivos, la instalacion debe fallar
// (son indispensables para que la app funcione).
const APP_SHELL = [
  './',
  './index.html',
  './pages/video.html',
  './css/style.css',
  './css/video.css',
  './js/app.js',
  './js/video.js',
  './js/install-prompt.js',
  './manifest.json',
  './img/AlGz.png',
  './img/settings.svg',
  './img/circle-x.svg',
  './img/device-floppy.svg',
  './img/circle-letter-a.svg',
  './img/circle-letter-b.svg',
  './img/circle-letter-c.svg',
  './img/circle-letter-d.svg',
  './img/circle-letter-e.svg',
  './img/circle-letter-f.svg',
  './img/volume.svg',
  './img/volume-3.svg',
  './img/x.svg',
  './icons/icon-192.png',
  './icons/icon-512.png',
  './icons/icon-512-maskable.png',
  './icons/apple-touch-icon.png',
];

// Videos: si alguno todavia no existe (por ej. en desarrollo, como en este zip
// donde se quitaron los .mp4 por tamano), NO debe romper la instalacion entera.
// Por eso se cachean aparte, con Promise.allSettled.
const VIDEO_ASSETS = [
  './video/video0.mp4',
  './video/video1.mp4',
  './video/video2.mp4',
  './video/video3.mp4',
  './video/video4.mp4',
  './video/video5.mp4',
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    (async () => {
      const cache = await caches.open(CACHE_NAME);

      // 1) Shell de la app: critico, se cachea con addAll (todo o nada)
      await cache.addAll(APP_SHELL);

      // 2) Videos: best-effort, no rompe el install si falta un archivo
      const results = await Promise.allSettled(
        VIDEO_ASSETS.map((url) =>
          fetch(url).then((res) => {
            if (!res.ok) throw new Error(`HTTP ${res.status} en ${url}`);
            return cache.put(url, res);
          })
        )
      );
      results.forEach((r, i) => {
        if (r.status === 'rejected') {
          console.warn(`[SW] No se pudo cachear ${VIDEO_ASSETS[i]} (¿todavia no existe?):`, r.reason?.message);
        }
      });

      self.skipWaiting();
    })()
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      // Borra caches de versiones anteriores
      const keys = await caches.keys();
      await Promise.all(
        keys
          .filter((key) => key.startsWith('expoapp-') && key !== CACHE_NAME)
          .map((key) => caches.delete(key))
      );
      await self.clients.claim();
    })()
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET') return;

  // Las navegaciones a video.html llevan query string variable (?video=0abc),
  // por eso se ignora el search al buscar en cache (sino nunca habria match offline).
  if (request.mode === 'navigate') {
    event.respondWith(
      (async () => {
        const cache = await caches.open(CACHE_NAME);
        const cached = await cache.match(request, { ignoreSearch: true });
        if (cached) {
          // Intenta refrescar en segundo plano si hay red, pero responde ya con cache
          fetch(request).then((res) => res.ok && cache.put(request, res)).catch(() => {});
          return cached;
        }
        try {
          const fresh = await fetch(request);
          return fresh;
        } catch {
          return cache.match('./index.html');
        }
      })()
    );
    return;
  }

  // Resto de assets (css, js, svg, png, mp4): cache-first, y si no esta
  // cacheado todavia, se busca en red y se guarda en runtime-cache para la
  // proxima vez (cubre videos agregados despues del primer install).
  event.respondWith(
    (async () => {
      const cache = await caches.open(CACHE_NAME);
      const cached = await cache.match(request, { ignoreSearch: true });
      if (cached) return cached;

      try {
        const fresh = await fetch(request);
        if (fresh.ok) cache.put(request, fresh.clone());
        return fresh;
      } catch (err) {
        // Sin red y sin cache: no hay nada mas para ofrecer
        throw err;
      }
    })()
  );
});
