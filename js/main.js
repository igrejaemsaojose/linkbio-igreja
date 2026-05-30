/**
 * main.js — bio-cristian
 * Ponto de entrada principal. Inicializa i18n e gerencia
 * lógica específica da página (ex.: URL dinâmica do WhatsApp).
 */

(function () {
  'use strict';

  var WHATSAPP_URLS = {
    pt: 'https://wa.me/5555999062078?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.',
    en: 'https://wa.me/5555999062078?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.',
  };

  /**
   * Atualiza o href do botão do WhatsApp conforme o locale ativo.
   */
  function updateWhatsAppUrl(locale) {
    var btn = document.getElementById('link-whatsapp');
    if (btn && WHATSAPP_URLS[locale]) {
      btn.setAttribute('href', WHATSAPP_URLS[locale]);
    }
  }

  /**
   * Inicialização após carregamento do DOM.
   */
  function init() {
    // Inicializa i18n
    if (window.__i18n && typeof window.__i18n.init === 'function') {
      window.__i18n.init();
    }

    // Define URL inicial do WhatsApp conforme locale detectado
    var locale = (window.__i18n && window.__i18n.currentLocale) || 'pt';
    updateWhatsAppUrl(locale);

    // Reage a trocas de idioma
    document.addEventListener('localechange', function (e) {
      updateWhatsAppUrl(e.detail.locale);
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
