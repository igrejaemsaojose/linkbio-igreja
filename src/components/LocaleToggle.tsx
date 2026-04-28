import { Locale, SUPPORTED_LOCALES, useLocale } from "@/lib/i18n";
import { cn } from "@/lib/utils";

const labels: Record<Locale, string> = {
  pt: "PT",
  en: "EN",
};

const LocaleToggle = () => {
  const { locale, setLocale, ui } = useLocale();

  return (
    <div
      role="group"
      aria-label={ui.toggleAriaLabel}
      className="inline-flex items-center gap-1 rounded-full border border-[hsl(240,20%,80%)] bg-white/90 p-1 shadow-[0_8px_24px_-18px_hsla(240,100%,8%,0.5)] backdrop-blur-sm"
    >
      {SUPPORTED_LOCALES.map((l) => {
        const active = l === locale;
        return (
          <button
            key={l}
            type="button"
            onClick={() => setLocale(l)}
            aria-pressed={active}
            aria-label={ui.switchTo(l)}
            className={cn(
              "h-7 min-w-[2.25rem] rounded-full px-2 text-xs font-semibold tracking-wider transition-all duration-200",
              active
                ? "bg-[hsl(240,100%,8%)] text-[hsl(240,29%,97%)]"
                : "text-foreground/70 hover:text-foreground"
            )}
          >
            {labels[l]}
          </button>
        );
      })}
    </div>
  );
};

export default LocaleToggle;
