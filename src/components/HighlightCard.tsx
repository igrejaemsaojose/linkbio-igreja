import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { highlight } from "@/config/highlight";
import * as LucideIcons from "lucide-react";
import { ArrowRight } from "lucide-react";

const HighlightCard = () => {
  if (!highlight.enabled) return null;

  const IconComponent = highlight.icon
    ? (LucideIcons[highlight.icon as keyof typeof LucideIcons] as React.ComponentType<{ className?: string }>)
    : null;

  return (
    <Card className="w-full animate-fade-in-up overflow-hidden border-[hsl(240,20%,80%)] bg-gradient-to-br from-[hsl(240,100%,8%)] to-[hsl(240,100%,13%)] shadow-[0_24px_50px_-35px_hsla(240,100%,8%,0.8)]">
      <CardContent className="p-6">
        <div className="flex flex-col items-start gap-4 text-left">
          {IconComponent && (
            <div className="rounded-full bg-white/10 p-3">
              <IconComponent className="h-6 w-6 text-white" />
            </div>
          )}

          <div className="space-y-2">
            <h3 className="text-lg font-semibold tracking-[-0.01em] text-white">{highlight.title}</h3>
            <p className="text-sm leading-relaxed text-white/75">{highlight.description}</p>
          </div>

          <a
            href={highlight.buttonUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1"
          >
            <Button
              size="sm"
              className="gap-2 rounded-full border border-white/20 bg-white/10 px-4 text-white hover:bg-white/20"
            >
              {highlight.buttonLabel}
              <ArrowRight className="h-4 w-4" />
            </Button>
          </a>
        </div>
      </CardContent>
    </Card>
  );
};

export default HighlightCard;
