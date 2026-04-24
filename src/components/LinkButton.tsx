import { Button } from "@/components/ui/button";
import { LinkItem, links } from "@/config/links";
import * as LucideIcons from "lucide-react";
import { ArrowUpRight } from "lucide-react";

interface LinkButtonProps {
  link: LinkItem;
  index: number;
}

const LinkButton = ({ link, index }: LinkButtonProps) => {
  const IconComponent = link.icon
    ? (LucideIcons[link.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>)
    : null;

  return (
    <a
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full animate-fade-in-up"
      style={{ animationDelay: `${0.12 * (index + 1)}s` }}
    >
      <Button
        variant="ghost"
        className="h-auto w-full justify-start rounded-2xl border border-[hsl(240,20%,80%)] bg-white/90 px-4 py-4 text-left shadow-[0_14px_35px_-28px_hsla(240,100%,8%,0.6)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-[hsl(240,100%,15%)] hover:bg-[hsl(240,100%,8%)] hover:text-[hsl(240,29%,97%)]"
      >
        <span className="mr-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[hsl(240,29%,97%)] text-[hsl(240,100%,10%)] transition-colors group-hover:bg-[hsl(240,100%,12%)] group-hover:text-white">
          {IconComponent && <IconComponent className="h-5 w-5" />}
        </span>
        <span className="flex-1 text-base font-semibold tracking-[-0.01em]">
          {link.label}
        </span>
        <ArrowUpRight className="h-4 w-4 text-[hsl(240,100%,10%)] transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-white" />
      </Button>
    </a>
  );
};

const LinkButtons = () => {
  return (
    <section className="w-full">
      <div className="mb-4 animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
          Acessos Rápidos
        </p>
        <h2 className="mt-1 text-xl font-bold tracking-[-0.015em] text-foreground">
          Meus Links
        </h2>
      </div>

      <div className="flex flex-col gap-3">
        {links.map((link, index) => (
          <LinkButton key={link.id} link={link} index={index} />
        ))}
      </div>
    </section>
  );
};

export { LinkButton, LinkButtons };
export default LinkButtons;
