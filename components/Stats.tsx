export default function Stats() {

  const stats = [
    {
      number: "+50",
      label: "Proyectos realizados",
    },
    {
      number: "100%",
      label: "Compromiso con cada trabajo",
    },
    {
      number: "24 hs",
      label: "Respuesta por WhatsApp",
    },
    {
      number: "CABA + GBA",
      label: "Zona de trabajo",
    },
  ];

  return (
    <section className="bg-white px-6 py-16">

      <div className="mx-auto max-w-6xl">

        <div className="grid gap-4 text-center md:grid-cols-4">

          {stats.map((stat) => (

            <div
              key={stat.label}
              className="rounded-2xl border border-gray-200 p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >

              <h3 className="mb-2 text-2xl font-extrabold text-orange-500">
                {stat.number}
              </h3>

              <p className="font-medium text-gray-700">
                {stat.label}
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}