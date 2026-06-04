/**
 * ============================================================
 * translations/en.js — bio-cristian
 * ============================================================
 * FUNÇÃO DESTE ARQUIVO:
 * Dicionário de traduções em Inglês (English).
 * Espelho exato do arquivo pt.js, com todos os textos
 * traduzidos para o inglês.
 *
 * REGRA IMPORTANTE:
 * As CHAVES (lado esquerdo de cada par) devem ser idênticas
 * às do pt.js. O i18n.js usa as mesmas chaves para buscar
 * o texto certo em cada idioma. Se uma chave existir em PT
 * mas não em EN (ou vice-versa), o elemento correspondente
 * ficará com o texto do HTML (fallback estático).
 *
 * CARREGAMENTO:
 * Carregado via <script src="translations/en.js"> no index.html,
 * depois do pt.js. O window.__i18n já existe quando en.js roda,
 * então o || {} apenas previne re-criação desnecessária.
 * ============================================================
 */

// Garante que o objeto global exista antes de adicionar a propriedade EN.
// Como pt.js já o criou, este || {} é um fallback de segurança.
window.__i18n = window.__i18n || {};

// Dicionário em inglês — mesmas chaves que pt.js, textos em EN.
window.__i18n.en = {

  /* ── META / SEO ──────────────────────────────────────────
   * Versões em inglês do título e da meta description.
   * Atualizados pelo i18n.js via document.title e
   * metaDesc.setAttribute quando o visitante escolhe EN.
   */
  'meta.title':       'Cristian Dornelles',
  'meta.description': 'Digital marketing, web development and applied AI. I help businesses grow with a digital presence that works and technology that delivers real results.',

  /* ── PERFIL ──────────────────────────────────────────────
   * Traduções dos textos do card de perfil.
   */
  'profile.tagline':  'Marketing, Development & AI',
  'profile.bio':      'I help businesses grow with paid traffic, websites that convert and AI-powered automations.',
  'profile.tag1':     'Growth Marketing',
  'profile.tag2':     'Development',
  'profile.tag3':     'Artificial Intelligence',

  /* ── SEÇÃO DE LINKS ──────────────────────────────────────
   * Eyebrow e título da seção de links em inglês.
   */
  'links.eyebrow':    'Quick Access',
  'links.title':      'My Links',

  /* ── LABELS DOS LINKS ────────────────────────────────────
   * Textos em inglês dos botões. A maioria permanece igual
   * pois são nomes próprios de plataformas (LinkedIn, GitHub),
   * mas "Serviços" → "Services" é traduzido.
   */
  'link.servicos':    'Services',
  'link.whatsapp':    'WhatsApp',
  'link.linkedin':    'LinkedIn',
  'link.instagram':   'Instagram',
  'link.github':      'GitHub',

  /* ── FOOTER ──────────────────────────────────────────────
   * Copyright em inglês.
   */
  'footer.copy':      '© 2026 Cristian Dornelles. All rights reserved.',

  /* ── ACESSIBILIDADE ──────────────────────────────────────
   * Rótulo do toggle de idioma para leitores de tela.
   */
  'toggle.aria':      'Select language',
};
