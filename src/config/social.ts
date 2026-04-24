// Configuração das redes sociais
// Edite os links abaixo com suas redes

export interface SocialItem {
  id: string;
  platform: string;
  url: string;
  icon: "Instagram" | "Linkedin" | "Github" | "Mail" | "MessageCircle";
}

export const socialLinks: SocialItem[] = [
  {
    id: "instagram",
    platform: "Instagram",
    url: "https://instagram.com/seu-usuario",
    icon: "Instagram",
  },
  {
    id: "linkedin",
    platform: "LinkedIn",
    url: "https://linkedin.com/in/seu-usuario",
    icon: "Linkedin",
  },
  {
    id: "whatsapp",
    platform: "WhatsApp",
    url: "https://wa.me/5511999999999",
    icon: "MessageCircle",
  },
  {
    id: "github",
    platform: "GitHub",
    url: "https://github.com/seu-usuario",
    icon: "Github",
  },
  {
    id: "email",
    platform: "Email",
    url: "mailto:seu@email.com",
    icon: "Mail",
  },
];
