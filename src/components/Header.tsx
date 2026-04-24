import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { profile } from "@/config/profile";

const Header = () => {
  const initials = profile.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
  const bio =
    profile.bio.trim() ||
    "Ajudo empresas a transformar operação e vendas com agentes de IA, automação e estratégia digital.";

  return (
    <header className="pt-10 pb-8">
      <div className="relative overflow-hidden rounded-[24px] border border-[hsl(240,20%,80%)] bg-white/90 px-6 py-8 text-center shadow-[0_18px_60px_-30px_hsla(240,100%,8%,0.45)] backdrop-blur-md">
        <div className="pointer-events-none absolute -top-10 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full bg-[hsl(240,100%,15%)]/10 blur-2xl" />

        <div className="relative mx-auto mb-5 w-fit animate-float">
          <Avatar className="h-32 w-32 animate-glow-pulse border-4 border-[hsl(240,100%,8%)] ring-4 ring-[hsl(240,100%,8%)]/30 ring-offset-4 ring-offset-background">
            <AvatarImage
              src={profile.avatar}
              alt={profile.name}
              loading="eager"
              fetchPriority="high"
              decoding="async"
              width={112}
              height={112}
            />
            <AvatarFallback className="bg-secondary text-2xl font-semibold text-foreground">
              {initials}
            </AvatarFallback>
          </Avatar>
        </div>

        <div className="space-y-3 animate-fade-in-up">
          <h1 className="text-[clamp(1.85rem,8vw,2.65rem)] font-extrabold leading-[1.05] tracking-[-0.02em] text-foreground">
            {profile.name}
          </h1>
          <p className="mx-auto max-w-[24ch] text-base font-semibold text-[hsl(240,100%,12%)]">
            {profile.tagline}
          </p>
          <p className="mx-auto max-w-[32ch] text-sm leading-relaxed text-muted-foreground">
            {bio}
          </p>
        </div>

        <div
          className="mt-6 flex justify-center gap-2 text-[11px] animate-fade-in-up"
          style={{ animationDelay: "0.15s" }}
        >
          <span className="rounded-full border border-[hsl(240,20%,80%)] bg-[hsl(240,29%,97%)] px-3 py-1 font-medium text-foreground">
            IA Aplicada
          </span>
          <span className="rounded-full border border-[hsl(240,20%,80%)] bg-[hsl(240,29%,97%)] px-3 py-1 font-medium text-foreground">
            Automação
          </span>
        </div>
      </div>
    </header>
  );
};

export default Header;
