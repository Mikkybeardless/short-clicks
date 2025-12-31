import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Stats } from "@/components/stats";
import { Pricing } from "@/components/pricing";
import { Footer } from "@/components/footer";

export default function Page() {
  return (
    <div className="min-h-screen">
      {/* <Header /> */}
      <main>
        <Hero />
        <Stats />
        <Features />
        <Pricing />
      </main>
      <Footer />
    </div>
  );
}
