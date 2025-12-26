export default function HeroAR() {
  return (
    <section className="py-32 text-center">
      <h1 className="text-4xl md:text-5xl font-bold mb-6">
        نطوّر علامتك التجارية باستخدام البيانات و SEO
      </h1>
      <p className="max-w-2xl mx-auto text-lg text-slate-600 mb-10">
        نساعد الشركات على تحقيق نمو حقيقي قابل للقياس باستخدام التسويق القائم على الأداء وتحسين محركات البحث.
      </p>

      <div className="flex justify-center gap-4">
        <a
          href="/contact"
          className="bg-cyan-600 text-white px-6 py-3 rounded-md"
        >
          احصل على استشارة مجانية
        </a>
        <a
          href="/services"
          className="border px-6 py-3 rounded-md"
        >
          خدماتنا
        </a>
      </div>
    </section>
  );
}
