import Navbar from '@/components/Navbar';
export default function Contact() {
  return (
    <>
      <Navbar />
      <main className="max-w-xl mx-auto p-6">
        <h1 className="text-3xl font-bold mb-4">Start Your Project</h1>
        <form className="grid gap-4">
          <input placeholder="Full Name" />
          <input placeholder="Business Name" />
          <textarea placeholder="Your Message"></textarea>
          <button className="bg-cyan-600 text-white py-2 rounded">
            Submit Request
          </button>
        </form>
      </main>
    </>
  );
}