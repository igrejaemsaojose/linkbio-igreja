/**
 * ============================================================
 * main.js — bio-cristian
 * ============================================================
 * FUNÇÃO DESTE ARQUIVO:
 * Ponto de entrada do JavaScript da página bio-cristian.
 * É o último script carregado e é responsável por:
 *
 *  1. Inicializar o sistema de tradução PT/EN (i18n).
 *  2. Controlar a URL do botão do WhatsApp — a mensagem
 *     pré-preenchida muda automaticamente conforme o idioma
 *     que o visitante escolher.
 *
 * ORDEM DE CARREGAMENTO NO HTML:
 *  translations/pt.js  →  cria window.__i18n.pt
 *  translations/en.js  →  cria window.__i18n.en
 *  js/i18n.js          →  cria window.__i18n.init e a engine
 *  js/main.js          →  este arquivo (usa tudo acima)
 * ============================================================
 */

// ─── IIFE (Immediately Invoked Function Expression) ──────────
// Toda a lógica fica embrulhada numa função que se auto-executa.
// Por quê? Para criar um escopo isolado: variáveis declaradas
// aqui não "vazam" para o escopo global (window), evitando
// conflitos com outros scripts presentes na página.
(function () {
  'use strict';
  // 'use strict' ativa o modo estrito do JavaScript.
  // Em modo estrito o navegador lança erros para erros comuns:
  //   - usar variável sem declarar → ReferenceError
  //   - deletar propriedade não deletável → TypeError
  // Isso torna o código mais robusto e fácil de depurar.

  // ─── CONSTANTES ──────────────────────────────────────────
  /**
   * WHATSAPP_URLS
   * Objeto com as URLs completas do WhatsApp para cada idioma.
   * As chaves 'pt' e 'en' correspondem aos dois idiomas suportados.
   *
   * A parte "?text=..." é a mensagem pré-preenchida, codificada
   * em formato URL (URL encoding):
   *   espaço → %20
   *   ó      → %C3%B3
   *   ç      → %C3%A7
   * Essa codificação é obrigatória para que a URL seja válida
   * e o WhatsApp interprete o texto corretamente.
   *
   * Exemplo decodificado do 'pt':
   *   "Olá, gostaria de saber mais sobre os seus serviços."
   *
   * Exemplo decodificado do 'en':
   *   "Hi, I would like to know more about your services."
   */
  var WHATSAPP_URLS = {
    pt: 'https://wa.me/5555999062078?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.',
    en: 'https://wa.me/5555999062078?text=Hi%2C%20I%20would%20like%20to%20know%20more%20about%20your%20services.',
  };

  // ─── FUNÇÕES ──────────────────────────────────────────────

  /**
   * updateWhatsAppUrl
   * Troca o destino (href) do botão WhatsApp pelo link correto
   * para o idioma informado.
   *
   * @param {string} locale  O idioma ativo: 'pt' ou 'en'.
   *
   * Passo a passo:
   *  1. Busca no HTML o elemento com id="link-whatsapp".
   *     document.getElementById retorna o elemento ou null
   *     se ele não existir.
   *  2. Verifica com && (E lógico) se:
   *       (a) o botão foi encontrado (btn não é null)
   *       (b) existe uma URL mapeada para o locale recebido
   *     Se uma das condições falhar, o bloco não é executado
   *     e evita erros de "cannot read property of null/undefined".
   *  3. Se tudo OK, chama setAttribute para trocar o href.
   *     É o equivalente a editar manualmente o atributo
   *     href="..." no HTML — mas feito via JavaScript em tempo
   *     de execução.
   */
  function updateWhatsAppUrl(locale) {
    var btn = document.getElementById('link-whatsapp');
    // WHATSAPP_URLS[locale] → acessa a propriedade do objeto
    // usando o valor da variável como chave dinâmica.
    // Se locale = 'en', equivale a: WHATSAPP_URLS['en']
    if (btn && WHATSAPP_URLS[locale]) {
      btn.setAttribute('href', WHATSAPP_URLS[locale]);
    }
  }

  /**
   * init
   * Função de inicialização — chamada uma única vez após o
   * DOM (a estrutura HTML) estar completamente carregado.
   *
   * Responsabilidades:
   *  1. Dispara a inicialização do motor de i18n (i18n.js).
   *  2. Lê o locale atual e ajusta a URL do WhatsApp.
   *  3. Registra um listener para reagir a toda troca de idioma.
   */
  function init() {
    // Inicializa o sistema de tradução.
    // typeof garante que não dará erro se __i18n ou __i18n.init
    // não existirem por alguma falha de carregamento.
    if (window.__i18n && typeof window.__i18n.init === 'function') {
      window.__i18n.init();
      // Após essa chamada, o i18n.js:
      //  - Detectou o idioma (localStorage → navigator → 'pt')
      //  - Aplicou todas as traduções no HTML
      //  - Vinculou os botões PT/EN do toggle
    }

    // Lê o locale que o i18n.js detectou e aplicou.
    // O operador || (OU lógico) garante o fallback para 'pt'
    // caso __i18n ou currentLocale não estejam disponíveis.
    var locale = (window.__i18n && window.__i18n.currentLocale) || 'pt';
    updateWhatsAppUrl(locale);

    // Escuta o evento customizado 'localechange'.
    // Esse evento é disparado pelo i18n.js cada vez que
    // o usuário clica em PT ou EN no toggle de idioma.
    //
    // e.detail.locale → contém o novo idioma escolhido
    // (o i18n.js passa esse valor via CustomEvent).
    //
    // Assim, toda troca de idioma automaticamente atualiza
    // o link do WhatsApp para a mensagem correta.
    document.addEventListener('localechange', function (e) {
      updateWhatsAppUrl(e.detail.locale);
    });
  }

  // ─── PONTO DE ENTRADA ────────────────────────────────────
  // O JavaScript pode ser carregado antes ou depois do HTML
  // ter sido totalmente interpretado pelo navegador.
  // document.readyState indica o estado atual:
  //   'loading'     → o HTML ainda está sendo analisado
  //   'interactive' → HTML pronto, imagens/CSS ainda carregando
  //   'complete'    → tudo carregado
  //
  // Se ainda for 'loading': registra init para rodar quando
  // o DOMContentLoaded disparar (HTML pronto, sem esperar
  // imagens ou CSS externos).
  // Caso contrário: executa init agora mesmo.
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
}());
// O () no final faz a IIFE se auto-executar imediatamente.
