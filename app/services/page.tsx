import Navbar from '../../components/Navbar';

export const metadata = {
  title: 'Services | Nexora Growth',
  description: 'Digital marketing, SEO, and conversion-focused growth services.'
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="max-w-5xl mx-auto py-24">
        <h1 className="text-4xl font-bold mb-6">Our Services</h1>
        <p className="text-slate-600 mb-12">
          Growth-focused services designed for measurable results.
        </p>

        <ul className="space-y-6">
          <li><a href="/services/digital-marketing">Digital Marketing →</a></li>
          <li><a href="/services/seo-growth">SEO & Growth →</a></li>
          <li><a href="/services/web-conversion">Web & Conversion →</a></li>
        </ul>
      </main>
    </>
  );
}
