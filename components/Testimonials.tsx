export default function Testimonials() {
  const testimonios = [
    {
      titulo: "Calidad en cada detalle",
      texto:
        "Trabajamos cada proyecto con dedicación, cuidando los detalles y buscando siempre un resultado profesional.",
    },
    {
      titulo: "Compromiso con el cliente",
      texto:
        "Escuchamos lo que necesitás, analizamos cada trabajo y buscamos ofrecer una solución adecuada para tu espacio.",
    },
    {
      titulo: "Un trabajo bien hecho",
      texto:
        "Nuestro objetivo es que el resultado final no solo se vea bien, sino que también genere confianza y satisfacción.",
    },
  ];

  return (
    <section id="testimonios" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-orange-500">
            NOVA
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            La confianza se construye con cada trabajo
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Nos enfocamos en brindar un servicio responsable, prolijo y
            profesional en cada proyecto.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {testimonios.map((testimonio) => (
            <div
              key={testimonio.titulo}
              className="rounded-2xl border border-gray-200 bg-gray-50 p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 text-3xl text-orange-500">★★★★★</div>

              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {testimonio.titulo}
              </h3>

              <p className="leading-relaxed text-gray-600">
                {testimonio.texto}
              </p>

              <div className="mt-6 border-t border-gray-200 pt-4">
                <p className="font-semibold text-gray-900">
                  Compromiso NOVA
                </p>
                <p className="text-sm text-gray-500">
                  Pintura y remodelación
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
            Muy pronto podremos mostrar las experiencias reales de nuestros
            clientes.
          </p>
        </div>
      </div>
    </section>
  );
}