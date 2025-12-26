import Navbar from '../../components/Navbar';
import WhatsApp from '../../components/WhatsApp';

import HeroAR from '../../components/ar/HeroAR';
import ServicesAR from '../../components/ar/ServicesAR';
import WhyUsAR from '../../components/ar/WhyUsAR';
import ProcessAR from '../../components/ar/ProcessAR';
import CTAAR from '../../components/ar/CTAAR';

export default function HomeAR() {
  return (
    <div dir="rtl">
      <Navbar />
      <main>
        <HeroAR />
        <ServicesAR />
        <WhyUsAR />
        <ProcessAR />
        <CTAAR />
      </main>
      <WhatsApp />
    </div>
  );
}
