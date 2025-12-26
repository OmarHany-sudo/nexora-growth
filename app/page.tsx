import Navbar from '../components/Navbar';
import WhatsApp from '../components/WhatsApp';

import Hero from '../components/Hero';
import Services from '../components/Services';
import WhyUs from '../components/WhyUs';
import Process from '../components/Process';
import CTA from '../components/CTA';

export const metadata = {
  title: 'Nexora Growth | Data-Driven Marketing & SEO',
  description:
    'We grow brands using performance marketing, SEO, and data-driven strategies.',
  openGraph: {
    title: 'Nexora Growth',
    description: 'Data-driven marketing for scalable business growth',
    url: 'https://nexora-growth.netlify.app',
    siteName: 'Nexora Growth',
    type: 'website'
  }
};

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
