// Configuração dos links principais (CTAs)

export interface LinkItem {
  id: string;
  label: string;
  url: string;
  icon?: string;
}

export const links: LinkItem[] = [
  {
    id: "servicos",
    label: "Serviços",
    url: "https://lp-cristian.vercel.app",
    icon: "Globe",
  },
  {
    id: "whatsapp",
    label: "WhatsApp",
    url: "https://api.whatsapp.com/send?phone=5555999062078&text=Ol%C3%A1!%20Quero%20saber%20mais%20sobre%20como%20implementar%20Agentes%20Inteligentes%20de%20IA%20&%20Automa%C3%A7%C3%A3o%20%20no%20meu%20neg%C3%B3cio.",
    icon: "MessageCircle",
  },
  {
    id: "linkedin",
    label: "LinkedIn",
    url: "https://www.linkedin.com/in/cristian-dornelles-3b1019190/",
    icon: "Linkedin",
  },
  {
    id: "instagram",
    label: "Instagram",
    url: "https://www.instagram.com/cr.dornelles",
    icon: "Instagram",
  },
  {
    id: "github",
    label: "GitHub",
    url: "https://github.com/cr-dornelles",
    icon: "Github",
  },
  {
    id: "biblioteca-materiais",
    label: "Biblioteca",
    url: "https://blog-cristian.vercel.app",
    icon: "BookOpen",
  },
];
