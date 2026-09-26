import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import {
  StoryStatement,
  StatsBand,
  CollectionsShowcase,
  QuoteBand,
  AboutTeaser,
  ContactCta
} from "@/components/HomeSections";

export default function HomePage() {
  return (
    <main id="home">
      <Header />
      <HeroSlider />
      <StoryStatement />
      <StatsBand />
      <CollectionsShowcase />
      <QuoteBand />
      <AboutTeaser />
      <ContactCta />
    </main>
  );
}
