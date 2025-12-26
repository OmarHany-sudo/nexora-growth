import Navbar from '../components/Navbar';
import WhatsApp from '../components/WhatsApp';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto p-6 text-center">
        <h1 className="text-4xl font-bold mb-4">
          We Grow Brands Using Data, SEO & Smart Marketing
        </h1>
        <p>
          We help businesses achieve measurable growth using performance marketing,
          SEO, and data-driven strategies — not guesswork.
        </p>
      </main>
      <WhatsApp />
    </>
  );
}