import avatar from "@/assets/avatar.png";
import type { Localized } from "@/lib/i18n";

export const profile: {
  name: string;
  avatar: string;
  tagline: Localized;
  bio: Localized;
  tags: Localized<string[]>;
} = {
  name: "Cristian Dornelles",
  avatar,
  tagline: {
    pt: "Soluções Inteligentes com IA",
    en: "Smart Solutions with AI",
  },
  bio: {
    pt: "Ajudo empresas a transformar operação e vendas com agentes de IA, automação e estratégia digital.",
    en: "I help companies transform operations and sales with AI agents, automation, and digital strategy.",
  },
  tags: {
    pt: ["IA Aplicada", "Growth", "Automação"],
    en: ["Applied AI", "Growth", "Automation"],
  },
};
