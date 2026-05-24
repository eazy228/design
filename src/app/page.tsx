import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { RatesSection } from "@/components/sections/rates";
import { PopularCryptos } from "@/components/sections/popular-cryptos";
import { SecurityAML } from "@/components/sections/security";
import { HowItWorks } from "@/components/sections/how-it-works";
import { Advantages } from "@/components/sections/advantages";
import { Reserves } from "@/components/sections/reserves";
import { Reviews } from "@/components/sections/reviews";
import { FAQSection } from "@/components/sections/faq";
import { Footer } from "@/components/sections/footer";
import { LogoShowcase } from "@/components/ui/brand-logo";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <LogoShowcase />
        <RatesSection />
        <PopularCryptos />
        <SecurityAML />
        <HowItWorks />
        <Advantages />
        <Reserves />
        <Reviews />
        <FAQSection />
      </main>
      <Footer />
    </>
  );
}
