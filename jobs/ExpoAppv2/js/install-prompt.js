// js/install-prompt.js
// Banner de instalación propio: Chrome/Edge/Opera ocultan el ícono nativo de
// instalar en un lugar poco visible de la barra de direcciones. Acá lo
// interceptamos con beforeinstallprompt y mostramos nuestro propio aviso.

(() => {
  const banner = document.getElementById('install-banner');
  const installBtn = document.getElementById('install-banner-btn');
  const closeBtn = document.getElementById('install-banner-close');
  const bannerText = banner ? banner.querySelector('.install-banner-text') : null;

  if (!banner || !installBtn || !closeBtn) return;

  const DISMISS_KEY = 'expoapp-install-dismissed';
  let deferredPrompt = null;

  // ¿Ya esta corriendo instalada? (display-mode: standalone/fullscreen, o iOS)
  function isRunningInstalled() {
    return (
      window.matchMedia('(display-mode: standalone)').matches ||
      window.matchMedia('(display-mode: fullscreen)').matches ||
      window.navigator.standalone === true // Safari iOS clasico
    );
  }

  function showBanner() {
    if (isRunningInstalled()) return;
    if (sessionStorage.getItem(DISMISS_KEY) === '1') return;
    banner.classList.remove('hide');
  }

  function hideBanner() {
    banner.classList.add('hide');
  }

  // --- Chrome / Edge / Opera y demas navegadores Chromium ---
  window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    deferredPrompt = event;
    showBanner();
  });

  installBtn.addEventListener('click', async () => {
    if (!deferredPrompt) return;
    installBtn.disabled = true;
    deferredPrompt.prompt();
    await deferredPrompt.userChoice;
    deferredPrompt = null;
    hideBanner();
    installBtn.disabled = false;
  });

  closeBtn.addEventListener('click', () => {
    sessionStorage.setItem(DISMISS_KEY, '1');
    hideBanner();
  });

  window.addEventListener('appinstalled', () => {
    deferredPrompt = null;
    hideBanner();
  });

  // --- iOS Safari: no dispara beforeinstallprompt, no hay API de instalación.
  // Mostramos el mismo banner pero con instrucciones manuales y sin botón "Instalar".
  function isIos() {
    return /iphone|ipad|ipod/i.test(window.navigator.userAgent);
  }

  if (isIos() && !isRunningInstalled() && sessionStorage.getItem(DISMISS_KEY) !== '1') {
    installBtn.classList.add('hide');
    if (bannerText) {
      bannerText.textContent =
        'Estás viendo la versión online. Para instalarla y usarla sin conexión: ' +
        'tocá el ícono Compartir y elegí "Agregar a pantalla de inicio".';
    }
    showBanner();
  }
})();
