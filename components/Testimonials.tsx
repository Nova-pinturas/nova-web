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

        {/* Encabezado */}
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-orange-500">
            NOVA
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Lo que dicen nuestros clientes
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            La confianza de nuestros clientes es parte fundamental de cada
            trabajo que realizamos.
          </p>
        </div>

        {/* Opiniones */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {testimonios.map((testimonio) => (
            <div
              key={testimonio.nombre}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 text-2xl text-orange-500">
                ★★★★★
              </div>

              <p className="leading-relaxed text-gray-600">
                “{testimonio.texto}”
              </p>

              <div className="mt-6 border-t border-gray-200 pt-4">
                <p className="font-bold text-gray-900">
                  {testimonio.nombre}
                </p>

                <p className="text-sm text-gray-500">
                  Cliente NOVA
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Invitación a dejar una opinión */}
        <div className="mt-12 rounded-2xl bg-orange-50 p-8 text-center">
          <div className="mb-3 text-2xl text-orange-500">
            ★★★★★
          </div>

          <p className="text-xl font-bold text-gray-900">
            ¿Ya trabajaste con NOVA?
          </p>

          <p className="mx-auto mt-2 max-w-xl text-gray-600">
            Tu opinión nos ayuda a seguir creciendo y también ayuda a otras
            personas a conocernos.
          </p>

          <a
            href="https://maps.app.goo.gl/ggfQCaLv8X52EB5t8?g_st=am"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block rounded-xl bg-orange-500 px-6 py-3 font-semibold text-white transition duration-300 hover:bg-orange-600 hover:shadow-lg"
          >
            ⭐ Dejar una opinión en Google
          </a>
        </div>

      </div>
    </section>
  );
}