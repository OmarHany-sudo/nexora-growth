import Navbar from '@/components/Navbar';
export const metadata = { title: "Services | Nexora Growth" };
export default function Services() {
  return (
    <>
      <Navbar />
      <main className="max-w-4xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-6">Our Services</h1>
        <ul className="space-y-4">
          <li>Digital Marketing</li>
          <li>SEO & Growth</li>
          <li>Web & Conversion</li>
        </ul>
      </main>
    </>
  );
}