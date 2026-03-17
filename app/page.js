import SiteShell from "@/components/layout/SiteShell";
import Hero from "@/components/home/Hero";
import Divider from "@/components/ui/Divider";
import FlagshipProduct from "@/components/home/FlagshipProduct";
import PlatformFeatures from "@/components/home/PlatformFeatures";
import UseCases from "@/components/home/UseCases";
import CTA from "@/components/home/CTA";

export default function HomePage() {
  return (
    <SiteShell>
      <main className="page">
        <Hero />
        <Divider />
        <FlagshipProduct />
        <Divider />
        <PlatformFeatures />
        <Divider />
        <UseCases />
        <Divider />
        <CTA />
      </main>
    </SiteShell>
  );
}