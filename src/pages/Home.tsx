import AboutUsSection from "../components/ui/home/AboutUsSection";
import ContactSection from "../components/ui/home/ContactSection";
import DonorSection from "../components/ui/home/DonorSection";
import Gallery from "../components/ui/home/Gallery";
import HeroSection from "../components/ui/home/HeroSection";
import JoinUs from "../components/ui/home/JoinUs";
import RecentEvent from "../components/ui/home/RecentEvent";
import WinterClothSection from "../components/ui/home/WinterClothSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WinterClothSection />
      <RecentEvent />
      <DonorSection />
      <Gallery />
      <ContactSection />
      {/* <AboutUsSection /> */}
      <JoinUs />
    </>
  );
}
