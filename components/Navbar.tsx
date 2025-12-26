export default function Navbar() {
  return (
    <nav className="flex justify-between px-6 py-4 border-b">
      <strong>Nexora Growth</strong>
      <div className="space-x-4">
        <a href="/services">Services</a>
        <a href="/blog">Blog</a>
        <a href="/contact" className="bg-cyan-600 text-white px-4 py-2 rounded">
          Free Consultation
        </a>
      </div>
    </nav>
  );
}