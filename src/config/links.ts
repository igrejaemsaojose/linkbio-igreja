import type { Localized } from "@/lib/i18n";

export interface LinkItem {
  id: string;
  label: Localized;
  url: Localized;
  icon?: string;
}

const whatsappBase = "https://wa.me/5555999062078";

export const links: LinkItem[] = [
  {
    id: "servicos",
    label: { pt: "Serviços", en: "Services" },
    url: { pt: "https://lp.crdornelles.com", en: "https://lp.crdornelles.com" },
    icon: "Globe",
  },
  {
    id: "whatsapp",
    label: { pt: "WhatsApp", en: "WhatsApp" },
    url: {
      pt: `${whatsappBase}?text=${encodeURIComponent(
        "Olá, gostaria de saber mais sobre os seus serviços."
      )}`,
      en: `${whatsappBase}?text=${encodeURIComponent(
        "Hi, I would like to know more about your services."
      )}`,
    },
    icon: "MessageCircle",
  },
  {
    id: "linkedin",
    label: { pt: "LinkedIn", en: "LinkedIn" },
    url: {
      pt: "https://www.linkedin.com/in/cristian-dornelles-3b1019190/",
      en: "https://www.linkedin.com/in/cristian-dornelles-3b1019190/",
    },
    icon: "Linkedin",
  },
  {
    id: "instagram",
    label: { pt: "Instagram", en: "Instagram" },
    url: {
      pt: "https://www.instagram.com/cr.dornelles",
      en: "https://www.instagram.com/cr.dornelles",
    },
    icon: "Instagram",
  },
  {
    id: "github",
    label: { pt: "GitHub", en: "GitHub" },
    url: {
      pt: "https://github.com/cr-dornelles",
      en: "https://github.com/cr-dornelles",
    },
    icon: "Github",
  },
];
