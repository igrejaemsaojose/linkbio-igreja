/**
 * i18n.js — bio-cristian
 * Sistema de internacionalização leve (PT/EN) sem dependências externas.
 */

(function () {
  'use strict';

  var STORAGE_KEY = 'bio-cristian:locale';
  var SUPPORTED   = ['pt', 'en'];
  var DEFAULT     = 'pt';

  /**
   * Detecta o locale inicial:
   * 1. localStorage
   * 2. navigator.language
   * 3. fallback 'pt'
   */
  function detectLocale() {
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;

    var nav = (navigator.language || '').toLowerCase().split('-')[0];
    if (SUPPORTED.includes(nav)) return nav;

    return DEFAULT;
  }

  /**
   * Aplica as traduções do locale ativo em todos os
   * elementos com atributo data-i18n.
   */
  function applyTranslations(locale) {
    var dict = (window.__i18n && window.__i18n[locale]) || {};

    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
      }
    });

    // Atualiza o <title> e <meta name="description">
    if (dict['meta.title']) {
      document.title = dict['meta.title'];
    }
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict['meta.description']) {
      metaDesc.setAttribute('content', dict['meta.description']);
    }

    document.documentElement.lang = locale;
  }

  /**
   * Persiste o locale escolhido e reaplicar traduções.
   */
  function setLocale(locale) {
    if (!SUPPORTED.includes(locale)) return;
    localStorage.setItem(STORAGE_KEY, locale);
    window.__i18n.currentLocale = locale;
    applyTranslations(locale);

    // Dispara evento customizado para que main.js reaja
    document.dispatchEvent(new CustomEvent('localechange', { detail: { locale: locale } }));

    // Atualiza estado visual dos botões do toggle
    document.querySelectorAll('[data-locale-btn]').forEach(function (btn) {
      var isActive = btn.getAttribute('data-locale-btn') === locale;
      btn.classList.toggle('locale-toggle__btn--active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  /**
   * Inicializa o sistema de i18n.
   * Deve ser chamado após o DOM estar pronto.
   */
  function init() {
    var locale = detectLocale();
    window.__i18n = window.__i18n || {};
    window.__i18n.currentLocale = locale;
    window.__i18n.setLocale      = setLocale;

    applyTranslations(locale);

    // Vincula cliques nos botões do toggle
    document.querySelectorAll('[data-locale-btn]').forEach(function (btn) {
      var isActive = btn.getAttribute('data-locale-btn') === locale;
      btn.classList.toggle('locale-toggle__btn--active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));

      btn.addEventListener('click', function () {
        setLocale(btn.getAttribute('data-locale-btn'));
      });
    });
  }

  // Expõe API global
  window.__i18n = window.__i18n || {};
  window.__i18n.init = init;
}());
