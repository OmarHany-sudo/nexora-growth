import './globals.css';

export const metadata = {
  title: "Nexora Growth | Data-Driven Marketing",
  description: "SEO, performance marketing, and conversion-focused growth strategies.",
  openGraph: {
    title: "Nexora Growth",
    description: "Data-driven marketing for scalable growth",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900 antialiased">
        {children}
      </body>
    </html>
  );
}