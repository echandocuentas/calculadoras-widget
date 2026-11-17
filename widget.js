/* Echando Cuentas · ajusta la altura de las calculadoras insertadas. https://echandocuentas.com/widget/ */
(function () {
  if (window.__ecWidget) return; window.__ecWidget = true;
  window.addEventListener('message', function (e) {
    if ((e.origin !== 'https://echandocuentas.com' && e.origin !== location.origin) || !e.data || e.data.type !== 'echandocuentas-widget') return;
    var frames = document.querySelectorAll('iframe[src*="/widget/"]');
    for (var i = 0; i < frames.length; i++) {
      if (frames[i].contentWindow === e.source) { frames[i].style.height = (Number(e.data.height) + 2) + 'px'; }
    }
  });
})();
