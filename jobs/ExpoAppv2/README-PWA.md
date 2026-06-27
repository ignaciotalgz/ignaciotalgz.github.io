# ExpoApp v2 — Conversión a PWA

Este zip contiene tu proyecto original **más** lo necesario para que funcione como
PWA instalable y 100% offline en el stand. No se tocó la lógica de negocio
(`app.js`, `video.js`, el bitmask hexadecimal, etc.), solo se agregó la capa PWA.

## Archivos nuevos
- `manifest.json` — nombre, ícono, `display: fullscreen` para modo kiosco.
- `sw.js` — Service Worker (cachea el shell de la app + los 6 videos al instalar).
- `icons/` — `icon-192.png`, `icon-512.png`, `icon-512-maskable.png`, `apple-touch-icon.png`
  (generados a partir de tu logo `AlGz.png` sobre fondo navy `#1a2351`).

## Archivos modificados
- `index.html` — `<link rel="manifest">`, meta `theme-color`, meta tags de iOS,
  y el script de registro del Service Worker al final del `<body>`.
- `pages/video.html` — lo mismo, con rutas relativas (`../manifest.json`, `../sw.js`)
  porque vive un nivel más abajo.
- `img/settings.svg` — **estaba en 0 bytes** (corrupto, probablemente al comprimir
  el .rar). Se reconstruyó con el ícono "settings" canónico de Tabler Icons (mismo
  set MIT que ya usás para el resto de los íconos) para que coincida en estilo.

## Importante: faltan tus videos
Como subiste el proyecto sin la carpeta `video/` (por tamaño), el Service Worker
está preparado para cachearlos pero **no falla si no los encuentra** (ver sección
"Paso a paso" en el chat). Antes de desplegar de verdad, copiá tus 6 `.mp4`
originales a `video/video0.mp4` ... `video/video5.mp4`.

## Cómo probarlo
No abras `index.html` haciendo doble clic (el Service Worker no funciona sobre
`file://`). Necesitás un servidor local, por ejemplo:

```bash
cd ExpoAppv2
python3 -m http.server 8080
# abrí http://localhost:8080/index.html
```

Con eso ya podés ver en DevTools → Application → Service Workers que se registró,
y en DevTools → Application → Manifest que el manifest se lee bien.
