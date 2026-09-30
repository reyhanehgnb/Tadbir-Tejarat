import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import {
  StoryStatement,
  CollectionsShowcase,
  QuoteBand,
  AboutTeaser,
  Footer
} from "@/components/HomeSections";

export default function HomePage() {
  return (
    <main id="home">
      <Header />
      <HeroSlider />
      <StoryStatement />
      <CollectionsShowcase />
      <QuoteBand />
      <AboutTeaser />
      <Footer/>
    </main>
  );
}
