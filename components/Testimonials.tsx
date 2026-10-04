export default function Testimonials() {
  const testimonios = [
    {
      nombre: "Pablo",
      texto:
        "Los super recomiendo, trabajan muy prolijos y cumplen con el tiempo acordado.",
    },
    {
      nombre: "Martina",
      texto:
        "Muy buen trabajo, excelente calidad-precio.",
    },
    {
      nombre: "Facundo",
      texto:
        "Son muy prolijos y responsables.",
    },
    {
      nombre: "Daniel",
      texto:
        "Además de que trabajan muy bien, son muy responsables.",
    },
  ];

  return (
    <section id="testimonios" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-orange-500">
            OPINIONES REALES
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Lo que dicen nuestros clientes
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            La confianza de nuestros clientes es parte fundamental de cada
            trabajo que realizamos.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonios.map((testimonio) => (
            <div
              key={testimonio.nombre}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 text-2xl tracking-wide text-orange-500">
                ★★★★★
              </div>

              <p className="leading-relaxed text-gray-600">
                “{testimonio.texto}”
              </p>

              <div className="mt-6 border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">
                  {testimonio.nombre}
                </p>

                <p className="text-sm text-gray-500">
                  Cliente NOVA
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl bg-orange-50 p-6 text-center">
          <p className="font-semibold text-gray-900">
            ¿Ya trabajaste con NOVA?
          </p>

          <p className="mt-2 text-gray-600">
            Tu experiencia también puede ayudar a otras personas a conocernos.
          </p>
        </div>
      </div>
    </section>
  );
}