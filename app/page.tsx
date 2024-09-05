import About from "@/components/About";
import CallToAction from "@/components/CallToAction";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <CallToAction />
      <Footer />
    </main>

  );
}
