import './globals.css';

export const metadata = {
  title: "Nexora Growth | Data-Driven Marketing",
  description: "SEO, performance marketing, and conversion-focused growth strategies."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-slate-900">{children}</body>
    </html>
  );
}