export default function ServicesAR() {
  return (
    <section className="py-20 bg-slate-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">خدماتنا</h2>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">التسويق الرقمي</h3>
            <p className="text-slate-600">
              حملات قائمة على الأداء تركز على النتائج الحقيقية والعائد.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">SEO والنمو</h3>
            <p className="text-slate-600">
              تحسين محركات البحث لزيادة الظهور والنمو العضوي.
            </p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-3">المواقع والتحويل</h3>
            <p className="text-slate-600">
              مواقع وصفحات مصممة لتحويل الزوار إلى عملاء.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
