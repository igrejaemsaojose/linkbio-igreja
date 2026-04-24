import { footer } from "@/config/footer";

const Footer = () => {
  return (
    <footer className="pb-8 pt-7 text-center animate-fade-in-up" style={{ animationDelay: "0.5s" }}>
      <p className="text-[11px] text-muted-foreground">{footer.text}</p>
    </footer>
  );
};

export default Footer;
