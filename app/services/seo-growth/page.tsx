import Navbar from '../../../components/Navbar';

export const metadata = {
  title: 'SEO & Growth | Nexora Growth',
  description: 'Technical and on-page SEO for long-term organic growth.'
};

export default function SEOService() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto py-24">
        <h1 className="text-4xl font-bold mb-6">SEO & Growth</h1>
        <p className="mb-8 text-slate-600">
          SEO is not magic. It’s structure, data, and consistency.
        </p>

        <ul className="list-disc pl-6 space-y-3">
          <li>Technical SEO audits</li>
          <li>On-page optimization</li>
          <li>Site structure & speed</li>
          <li>Long-term ranking strategy</li>
        </ul>
      </main>
    </>
  );
}
