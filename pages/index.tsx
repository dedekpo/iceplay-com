import Statistics from "../src/components/Estatistics";
import Expansion from "../src/components/Expansion";
import Footer from "../src/components/Footer";
import Header from "../src/components/Header";
import MainHero from "../src/components/MainHero";
import Testimonials from "../src/components/Testimonials";
import CallToAction from "../src/components/CallToAction";
import Features from "../src/components/Features";

export default function Home() {
  return (
    <>
      <Header />
      <MainHero />
      <Features />
      <Statistics />
      <Expansion />
      <Testimonials />
      <CallToAction />
      <Footer />
    </>
  )
}