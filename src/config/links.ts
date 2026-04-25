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
    url: "https://wa.me/5555999062078?text=Ol%C3%A1%2C%20gostaria%20de%20saber%20mais%20sobre%20os%20seus%20servi%C3%A7os.",
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
];
