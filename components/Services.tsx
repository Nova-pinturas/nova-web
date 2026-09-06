"use client";
import Button from "./Button";
export default function Services() {
const irContacto = (servicio: string) => {
  const mensaje = `Hola NOVA, me gustaría solicitar un presupuesto para el servicio de ${servicio}.`;

  const url = `https://wa.me/5491161132469?text=${encodeURIComponent(mensaje)}`;

  window.open(url, "_blank");
};

  const services = [
    {
      title: "Pintura",
      description:
  "Pintura de interiores y exteriores para hogares y comercios, con preparación de superficies y terminaciones profesionales.",
    },
    {
      title: "Tratamiento de humedad",
     description:
  "Tratamiento de humedad y preparación de superficies para reparar, proteger y mejorar las paredes de tu espacio.",
    },
    {
      title: "Yeso, enduido y durlock",
      description:
  "Trabajos de yeso, enduido y Durlock para reparar, nivelar y preparar paredes con terminaciones prolijas y profesionales.",
    },
    {
      title: "Remodelaciones",
      description:
  "Remodelamos y renovamos espacios para mejorar su aspecto, funcionalidad y terminación según cada proyecto.",
    },
    {
  title: "Plomería",
  description:
  "Reparaciones e instalaciones de plomería para hogares y comercios, con soluciones prácticas para cada necesidad.",
},
  ];

  return (
    <section id="servicios" className="bg-white px-6 py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-orange-500">
            NOVA
          </p>

          <h2 className="text-4xl font-bold text-gray-900">
            Servicios de pintura y remodelación en CABA y GBA
         </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Realizamos trabajos de pintura, reparación y remodelación para hogares,
            comercios y espacios en CABA y GBA.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          
          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-2xl border border-gray-200 p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
            >
              <div className="mb-5 h-1 w-12 rounded-full bg-orange-500" />

              <h3 className="mb-3 text-xl font-bold text-gray-900">
                {service.title}
              </h3>

              <p className="leading-7 text-gray-600">
                {service.description}
              </p>
           <Button onClick={() => {
  sessionStorage.setItem("servicioSeleccionado", service.title);

  window.dispatchEvent(
    new CustomEvent("servicioSeleccionado", {
      detail: service.title,
    })
  );

  window.location.hash = "contacto";
}}>
  Solicitar presupuesto
</Button>
            </div>
          ))}
          <div className="rounded-2xl border border-orange-200 bg-orange-50 p-7 shadow-sm">
  <div className="mb-5 h-1 w-12 rounded-full bg-orange-300" />

  <h3 className="mb-3 text-xl font-bold text-gray-900">
    Próximamente
  </h3>

  <p className="leading-7 text-gray-500">
    Nuevo servicio
  </p>
</div>

<div className="rounded-2xl border border-orange-200 bg-orange-50 p-7 shadow-sm">
  <div className="mb-5 h-1 w-12 rounded-full bg-orange-300" />

  <h3 className="mb-3 text-xl font-bold text-gray-900">
    Próximamente
  </h3>

  <p className="leading-7 text-gray-500">
    Nuevo servicio
  </p>
</div>

<div className="rounded-2xl border border-orange-200 bg-orange-50 p-7 shadow-sm">
  <div className="mb-5 h-1 w-12 rounded-full bg-orange-300" />

  <h3 className="mb-3 text-xl font-bold text-gray-900">
    Próximamente
  </h3>

  <p className="leading-7 text-gray-500">
    Nuevo servicio
  </p>
</div>
        </div>
      </div>
    </section>
  );
}