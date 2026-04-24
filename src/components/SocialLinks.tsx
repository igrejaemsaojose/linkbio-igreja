import { socialLinks } from "@/config/social";
import { Instagram, Linkedin, Github, Mail, MessageCircle } from "lucide-react";

const iconMap = {
  Instagram,
  Linkedin,
  Github,
  Mail,
  MessageCircle,
};

const SocialLinks = () => {
  return (
    <section className="flex items-center justify-center gap-4 py-6">
      {socialLinks.map((social) => {
        const IconComponent = iconMap[social.icon];
        
        return (
          <a
            key={social.id}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.platform}
            className="p-3 rounded-full text-muted-foreground hover:text-primary hover:bg-primary/10 transition-all duration-200"
          >
            <IconComponent className="h-6 w-6" />
          </a>
        );
      })}
    </section>
  );
};

export default SocialLinks;
