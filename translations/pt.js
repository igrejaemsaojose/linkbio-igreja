/**
 * ============================================================
 * translations/pt.js — bio-cristian
 * ============================================================
 * FUNÇÃO DESTE ARQUIVO:
 * Dicionário de traduções em Português Brasileiro.
 * Define todos os textos da interface no idioma PT.
 *
 * COMO FUNCIONA:
 * Este arquivo cria (ou expande) o objeto global window.__i18n
 * e adiciona a propriedade 'pt' com um objeto onde cada
 * entrada é um par chave → texto:
 *   'profile.bio' → 'Ajudo empresas a crescer...'
 *
 * O i18n.js lê esse objeto ao aplicar as traduções.
 * No HTML, elementos com data-i18n="profile.bio" recebem
 * o texto correspondente a essa chave.
 *
 * SINTAXE DO window.__i18n:
 * window.__i18n = window.__i18n || {}
 * Essa linha garante que o objeto exista antes de atribuir.
 * Se pt.js carregar antes de en.js, __i18n já existe;
 * se carregar depois, o || {} cria um novo objeto vazio.
 *
 * POR QUE ARQUIVO JS E NÃO JSON?
 * Arquivos .js podem ser carregados via <script src="...">
 * no HTML sem precisar de uma requisição HTTP assíncrona
 * (fetch/XMLHttpRequest). Isso simplifica o projeto — sem
 * build step, sem async, sem erros de CORS em arquivo local.
 * ============================================================
 */

// Garante que o objeto global exista antes de adicionar o dicionário.
// Se en.js já o criou antes, preserva o que existe.
window.__i18n = window.__i18n || {};

// Atribui o dicionário PT à propriedade 'pt' do objeto global.
// Cada linha é uma chave (string) → valor (string traduzida).
window.__i18n.pt = {

  /* ── META / SEO ──────────────────────────────────────────
   * Textos que aparecem na aba do navegador e em
   * buscadores/redes sociais ao compartilhar o link.
   */
  'meta.title':       'Cristian Dornelles',
  'meta.description': 'Marketing digital, desenvolvimento web e IA aplicada. Ajudo empresas a crescer com presença digital que funciona e tecnologia que gera resultado real.',

  /* ── PERFIL ──────────────────────────────────────────────
   * Textos do card de perfil central da página.
   * profile.tagline: linha de especialidades (não exibida atualmente)
   * profile.bio:     texto descritivo abaixo do nome
   * profile.tag1-3:  as três etiquetas de especialidade
   */
  'profile.tagline':  'Marketing, Desenvolvimento e IA',
  'profile.bio':      'Ajudo empresas a crescer com tráfego pago, sites que convertem e automações com IA.',
  'profile.tag1':     'Growth Marketing',
  'profile.tag2':     'Desenvolvimento',
  'profile.tag3':     'Inteligência Artificial',

  /* ── SEÇÃO DE LINKS ──────────────────────────────────────
   * Textos acima da lista de botões de link.
   * links.eyebrow: subtexto em maiúsculas acima do título
   * links.title:   título "Meus Links"
   */
  'links.eyebrow':    'Acessos Rápidos',
  'links.title':      'Meus Links',

  /* ── LABELS DOS LINKS ────────────────────────────────────
   * Texto exibido dentro de cada botão da lista.
   * Correspondência com os elementos no HTML pelo data-i18n:
   *   data-i18n="link.servicos"  → botão "Serviços"
   *   data-i18n="link.whatsapp"  → botão "WhatsApp"
   *   data-i18n="link.linkedin"  → botão "LinkedIn"
   *   data-i18n="link.instagram" → botão "Instagram"
   *   data-i18n="link.github"    → botão "GitHub"
   */
  'link.servicos':    'Serviços',
  'link.whatsapp':    'WhatsApp',
  'link.linkedin':    'LinkedIn',
  'link.instagram':   'Instagram',
  'link.github':      'GitHub',

  /* ── FOOTER ──────────────────────────────────────────────
   * Texto de copyright no rodapé da página.
   */
  'footer.copy':      '© 2026 Cristian Dornelles. Todos os direitos reservados.',

  /* ── ACESSIBILIDADE ──────────────────────────────────────
   * Texto para o aria-label do toggle de idioma.
   * Lido por leitores de tela para identificar o controle.
   */
  'toggle.aria':      'Selecionar idioma',
};
