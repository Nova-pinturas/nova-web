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
        "Pintura de interiores y exteriores con terminaciones profesionales.",
    },
    {
      title: "Tratamiento de humedad",
      description:
        "Tratamos problemas de humedad y preparamos las superficies correctamente.",
    },
    {
      title: "Yeso, enduido y durlock",
      description:
        "Reparación, preparación de paredes e instalación de Durlock para lograr terminaciones prolijas y profesionales.",
    },
    {
      title: "Remodelaciones",
      description:
        "Renovamos y mejoramos espacios adaptándonos a las necesidades de cada proyecto.",
    },
    {
  title: "Plomería",
  description:
    "Reparaciones e instalaciones de plomería para mantener tu espacio en buenas condiciones.",
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
            Nuestros servicios
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-600">
            Soluciones profesionales para transformar, renovar y proteger tus
            espacios.
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