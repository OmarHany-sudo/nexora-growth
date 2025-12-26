import Navbar from '../../components/Navbar';

export default function HomeAR() {
  return (
    <div dir="rtl">
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold">
          نطوّر علامتك التجارية باستخدام البيانات و SEO
        </h1>
        <p>نحقق نمو حقيقي قابل للقياس بدون تخمين.</p>
      </main>
    </div>
  );
}