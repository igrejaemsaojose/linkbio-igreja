import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import LinkButtons from "@/components/LinkButton";
import LocaleToggle from "@/components/LocaleToggle";

const HighlightCard = lazy(() => import("@/components/HighlightCard"));
const Footer = lazy(() => import("@/components/Footer"));

const Index = () => {
  return (
    <div
      className="relative min-h-screen overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at center, hsl(0 0% 100%) 0%, hsl(220 10% 95%) 52%, hsl(220 8% 90%) 100%)",
      }}
    >
      <div className="pointer-events-none absolute -left-10 top-24 h-52 w-52 rounded-full bg-[hsl(240,100%,15%)]/10 blur-3xl" />
      <div className="pointer-events-none absolute -right-12 bottom-24 h-64 w-64 rounded-full bg-[hsl(240,100%,12%)]/10 blur-3xl" />

      <main className="container relative z-10 mx-auto max-w-md px-5 py-8 sm:px-6">
        <div className="flex justify-end pt-2">
          <LocaleToggle />
        </div>

        <Header />

        <div className="space-y-5 pb-4">
          <LinkButtons />
          <Suspense fallback={<div className="h-32" />}>
            <HighlightCard />
          </Suspense>
        </div>

        <Suspense fallback={null}>
          <Footer />
        </Suspense>
      </main>
    </div>
  );
};

export default Index;
