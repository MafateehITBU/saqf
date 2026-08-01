import { CompanyOverview } from "./components/CompanyOverview";
import { CtaSection } from "./components/CtaSection";
import { FeatureCards } from "./components/FeatureCards";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LangTransition } from "./components/LangTransition";
import { WhatsAppFloat } from "./components/WhatsAppFloat";
import { LanguageProvider } from "./context/LanguageContext";

export default function App() {
  return (
    <LanguageProvider>
      <div className="page">
        <Header />
        <main>
          <Hero />
          <FeatureCards />
          <CompanyOverview />
          <CtaSection />
        </main>
        <Footer />
        <WhatsAppFloat />
        <LangTransition />
      </div>
    </LanguageProvider>
  );
}
