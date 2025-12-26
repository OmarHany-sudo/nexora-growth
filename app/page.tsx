import Navbar from '../components/Navbar';
import WhatsApp from '../components/WhatsApp';

import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Process from '../components/Process';
import CTA from '../components/CTA';

export default function Home() {
  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <Services />
        <WhyUs />
        <Process />
        <CTA />
      </main>

      <WhatsApp />
    </>
  );
}
