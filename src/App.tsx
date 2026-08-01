import { CompanyOverview } from "./components/CompanyOverview";
import { FeatureCards } from "./components/FeatureCards";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
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
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
}
