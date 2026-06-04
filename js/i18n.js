/**
 * ============================================================
 * i18n.js — bio-cristian
 * ============================================================
 * FUNÇÃO DESTE ARQUIVO:
 * "i18n" é a abreviação de "internationalisation" (18 letras
 * entre o 'i' e o 'n'). Este arquivo implementa um sistema
 * de tradução leve que permite exibir a página em Português
 * (PT) ou Inglês (EN) sem recarregar a página.
 *
 * COMO FUNCIONA (visão geral):
 *  1. Ao abrir a página, detecta automaticamente o idioma:
 *     primeiro olha o localStorage (escolha anterior do
 *     visitante), depois tenta o idioma do navegador, e por
 *     último usa 'pt' como padrão.
 *  2. Busca todos os elementos HTML que têm o atributo
 *     data-i18n="alguma.chave" e substitui o texto pelo
 *     texto traduzido do dicionário correspondente.
 *  3. Quando o visitante clica em PT ou EN, salva a escolha
 *     no localStorage (persiste entre visitas) e reaplicar
 *     as traduções.
 *
 * DEPENDÊNCIAS:
 *  - translations/pt.js → deve ser carregado ANTES deste,
 *    cria window.__i18n.pt com o dicionário em português.
 *  - translations/en.js → igual, cria window.__i18n.en.
 *
 * API PÚBLICA (exposta em window.__i18n):
 *  - window.__i18n.init()           → inicializa o sistema
 *  - window.__i18n.setLocale(lang)  → troca o idioma
 *  - window.__i18n.currentLocale    → idioma ativo ('pt'|'en')
 * ============================================================
 */

// IIFE — envolve tudo em um escopo privado para não poluir
// o espaço de nomes global com variáveis internas.
(function () {
  'use strict';

  // ─── CONFIGURAÇÕES ────────────────────────────────────────

  /**
   * STORAGE_KEY
   * A chave usada para salvar e recuperar o idioma escolhido
   * no localStorage (armazenamento persistente do navegador).
   * O prefixo 'bio-cristian:' evita conflito caso outros
   * projetos rodando no mesmo domínio usem o localStorage.
   */
  var STORAGE_KEY = 'bio-cristian:locale';

  /**
   * SUPPORTED
   * Array (lista) com os idiomas que o sistema suporta.
   * Só idiomas desta lista serão aceitos — qualquer outro
   * valor é ignorado e cai no DEFAULT.
   */
  var SUPPORTED = ['pt', 'en'];

  /**
   * DEFAULT
   * Idioma de fallback: usado quando não é possível detectar
   * nenhuma preferência válida do visitante.
   */
  var DEFAULT = 'pt';

  // ─── FUNÇÕES ──────────────────────────────────────────────

  /**
   * detectLocale
   * Descobre qual idioma usar ao abrir a página.
   * Segue uma ordem de prioridade (do mais específico ao mais genérico):
   *
   *  1. localStorage: se o visitante já escolheu um idioma
   *     antes, essa escolha foi salva e é recuperada aqui.
   *     O método SUPPORTED.includes(stored) verifica se o
   *     valor salvo ainda é válido (por segurança).
   *
   *  2. navigator.language: idioma configurado no navegador
   *     do visitante. Pode vir como 'pt-BR', 'en-US', etc.
   *     O .toLowerCase() transforma para minúsculas e
   *     .split('-')[0] pega apenas a parte principal
   *     ('pt' de 'pt-BR', 'en' de 'en-US').
   *
   *  3. DEFAULT ('pt'): fallback final se nada mais funcionar.
   *
   * @returns {string} O locale detectado: 'pt' ou 'en'.
   */
  function detectLocale() {
    // Tenta recuperar do localStorage
    var stored = localStorage.getItem(STORAGE_KEY);
    if (stored && SUPPORTED.includes(stored)) return stored;
    // includes() verifica se o array contém o valor.
    // Se sim, retorna imediatamente (return interrompe a função).

    // Tenta o idioma do navegador
    var nav = (navigator.language || '').toLowerCase().split('-')[0];
    // navigator.language pode ser undefined em alguns casos antigos,
    // por isso o || '' garante uma string vazia como fallback
    // antes de chamar .toLowerCase().
    if (SUPPORTED.includes(nav)) return nav;

    // Fallback final
    return DEFAULT;
  }

  /**
   * applyTranslations
   * Varre todos os elementos do HTML que possuem o atributo
   * data-i18n e troca o texto deles pela tradução do dicionário.
   *
   * @param {string} locale  O idioma a aplicar: 'pt' ou 'en'.
   *
   * Como funciona:
   *  1. Pega o dicionário (objeto com chave → texto) para o
   *     locale informado. Se não existir, usa {} (objeto vazio)
   *     para que o código não quebre.
   *  2. Usa querySelectorAll('[data-i18n]') para selecionar
   *     TODOS os elementos com aquele atributo — retorna uma
   *     NodeList (lista de elementos).
   *  3. Para cada elemento, lê o valor do data-i18n (a "chave")
   *     e verifica se o dicionário tem uma entrada para ela.
   *     Se sim, troca o textContent do elemento pelo texto traduzido.
   *  4. Atualiza o <title> da aba do navegador.
   *  5. Atualiza a meta description (importante para SEO e
   *     compartilhamento nas redes sociais).
   *  6. Atualiza o atributo lang do <html> para indicar ao
   *     navegador e leitores de tela o idioma da página.
   */
  function applyTranslations(locale) {
    // (window.__i18n && window.__i18n[locale]) → acessa o
    // dicionário do idioma. window.__i18n['pt'] é o mesmo
    // que window.__i18n.pt (notação de colchetes com variável).
    var dict = (window.__i18n && window.__i18n[locale]) || {};

    // forEach percorre cada elemento da lista retornada por
    // querySelectorAll. A função anônima recebe cada elemento
    // como parâmetro 'el'.
    document.querySelectorAll('[data-i18n]').forEach(function (el) {
      var key = el.getAttribute('data-i18n');
      // getAttribute lê o valor do atributo HTML.
      // Ex.: para <p data-i18n="profile.bio">, key = 'profile.bio'

      // dict[key] !== undefined → verifica se existe tradução
      // para essa chave. !== é "diferente estrito" (não converte
      // tipos). Se existir, substitui o texto visível do elemento.
      if (dict[key] !== undefined) {
        el.textContent = dict[key];
        // textContent substitui o texto interno sem interpretar
        // HTML, o que é mais seguro que innerHTML.
      }
    });

    // Atualiza o <title> da página (aba do navegador)
    if (dict['meta.title']) {
      document.title = dict['meta.title'];
    }

    // Atualiza a meta description:
    // querySelector busca o PRIMEIRO elemento que corresponde
    // ao seletor CSS — aqui, o meta com name="description".
    var metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc && dict['meta.description']) {
      metaDesc.setAttribute('content', dict['meta.description']);
    }

    // Informa ao navegador e a tecnologias assistivas (leitores
    // de tela) em que idioma a página está, o que melhora a
    // acessibilidade e o SEO.
    document.documentElement.lang = locale;
    // document.documentElement = o elemento <html> da página.
  }

  /**
   * setLocale
   * Troca o idioma ativo: salva no localStorage, atualiza
   * as traduções na tela e dispara um evento para que outros
   * scripts (main.js) possam reagir à mudança.
   *
   * @param {string} locale  O novo idioma: 'pt' ou 'en'.
   */
  function setLocale(locale) {
    // Rejeita silenciosamente idiomas não suportados.
    if (!SUPPORTED.includes(locale)) return;

    // Salva a escolha no localStorage para persistir entre
    // sessões (o visitante volta e já encontra o idioma certo).
    localStorage.setItem(STORAGE_KEY, locale);

    // Atualiza a propriedade pública para que outros scripts
    // possam ler o locale atual a qualquer momento.
    window.__i18n.currentLocale = locale;

    // Aplica as novas traduções em toda a página.
    applyTranslations(locale);

    // Dispara um evento customizado chamado 'localechange'.
    // CustomEvent é uma classe nativa do navegador que permite
    // criar eventos com dados extras (o 'detail').
    // O main.js ouve esse evento para atualizar a URL do WhatsApp.
    document.dispatchEvent(new CustomEvent('localechange', { detail: { locale: locale } }));

    // Atualiza a aparência visual dos botões PT/EN:
    // O botão ativo recebe a classe CSS 'locale-toggle__btn--active'
    // (que muda cor de fundo) e o aria-pressed='true'
    // (que informa a leitores de tela que este botão está ativo).
    document.querySelectorAll('[data-locale-btn]').forEach(function (btn) {
      // Compara o data-locale-btn do botão com o locale escolhido
      var isActive = btn.getAttribute('data-locale-btn') === locale;

      // classList.toggle(classe, condição):
      //   se condição for true  → adiciona a classe
      //   se condição for false → remove a classe
      btn.classList.toggle('locale-toggle__btn--active', isActive);

      // String(isActive) converte o booleano true/false para
      // a string "true"/"false" exigida pelo atributo HTML.
      btn.setAttribute('aria-pressed', String(isActive));
    });
  }

  /**
   * init
   * Inicializa o sistema de i18n. Deve ser chamado após o
   * DOM estar pronto (o main.js faz essa chamada).
   *
   * O que faz:
   *  1. Detecta o locale inicial.
   *  2. Registra funções e o locale no objeto global window.__i18n.
   *  3. Aplica as traduções na página.
   *  4. Vincula eventos de clique nos botões PT/EN do toggle.
   */
  function init() {
    var locale = detectLocale();

    // Garante que window.__i18n existe (pode ter sido criado
    // parcialmente pelos arquivos de tradução).
    window.__i18n = window.__i18n || {};

    // Registra o locale atual e a função setLocale como
    // propriedades públicas para uso por outros scripts.
    window.__i18n.currentLocale = locale;
    window.__i18n.setLocale     = setLocale;

    // Aplica as traduções iniciais na página.
    applyTranslations(locale);

    // Percorre os botões do toggle (PT e EN) para:
    //  a) Marcar visualmente o botão do idioma ativo.
    //  b) Adicionar o event listener de clique.
    document.querySelectorAll('[data-locale-btn]').forEach(function (btn) {
      var isActive = btn.getAttribute('data-locale-btn') === locale;
      btn.classList.toggle('locale-toggle__btn--active', isActive);
      btn.setAttribute('aria-pressed', String(isActive));

      // Ao clicar num botão, chama setLocale com o valor
      // do atributo data-locale-btn ('pt' ou 'en').
      btn.addEventListener('click', function () {
        setLocale(btn.getAttribute('data-locale-btn'));
      });
    });
  }

  // ─── EXPOSIÇÃO DA API PÚBLICA ────────────────────────────
  // Registra a função init no objeto global window.__i18n
  // para que o main.js possa chamá-la no momento certo.
  // O || {} garante que o objeto exista antes de atribuir.
  window.__i18n = window.__i18n || {};
  window.__i18n.init = init;
}());
