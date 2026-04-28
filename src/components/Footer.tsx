import { footer } from "@/config/footer";
import { useLocale } from "@/lib/i18n";

const Footer = () => {
  const { t } = useLocale();
  return (
    <footer className="pb-8 pt-7 text-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
      <p className="text-[11px] text-muted-foreground">{t(footer.text)}</p>
    </footer>
  );
};

export default Footer;
