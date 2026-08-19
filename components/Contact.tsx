"use client";
import { useState, useEffect } from "react";
export default function Contact() {
  const [servicioSeleccionado, setServicioSeleccionado] = useState("");

useEffect(() => {
  const servicio = sessionStorage.getItem("servicioSeleccionado");

  if (servicio) {
    setServicioSeleccionado(servicio);
  }

  const actualizarServicio = (event: Event) => {
    const evento = event as CustomEvent<string>;
    setServicioSeleccionado(evento.detail);
  };

  window.addEventListener(
    "servicioSeleccionado",
    actualizarServicio
  );

  return () => {
    window.removeEventListener(
      "servicioSeleccionado",
      actualizarServicio
    );
  };
}, []);

    const enviarWhatsApp = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();

  const formulario = e.currentTarget;
  const datos = new FormData(formulario);

  const nombre = datos.get("nombre");
  const telefono = datos.get("telefono");
  const localidad = datos.get("localidad");
  const superficie = datos.get("superficie");
  const problema = datos.get("problema");
  const trabajo = datos.get("trabajo");

  const servicioFinal =
  servicioSeleccionado ||
  sessionStorage.getItem("servicioSeleccionado") ||
  "No especificado";

  const mensaje = `
NUEVA SOLICITUD DE PRESUPUESTO — NOVA

Nombre: ${nombre}
Teléfono: ${telefono}
Zona: ${localidad}

Servicio: ${servicioFinal}
Ambientes / superficie: ${superficie || "No especificado"}
Problema o reparación: ${problema || "Ninguno indicado"}

Trabajo solicitado:
${trabajo}
`;

const mensajeCodificado = encodeURIComponent(mensaje);
const numeroWhatsApp = "5491161132469";

const urlWhatsApp = `https://wa.me/${numeroWhatsApp}?text=${mensajeCodificado}`;

window.open(urlWhatsApp, "_blank");
};
  return (
    <section id="contacto" className="bg-gray-950 px-6 py-24 text-white">
      <div className="mx-auto max-w-4xl text-center">

        <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-orange-500">
          NOVA
        </p>

        <h2 className="mb-5 text-4xl font-bold">
          ¿Tenés un proyecto en mente?
        </h2>

        <p className="mx-auto mb-10 max-w-2xl text-lg text-gray-300">
          Contanos qué necesitás y te ayudamos a transformar tu espacio.
          Solicita tu presupuesto sin compromiso.
        </p>



        <div className="mx-auto max-w-xl rounded-2xl bg-white p-8 text-left text-black shadow-xl">

          <h3 className="mb-6 text-2xl font-bold">
            Solicitar presupuesto
          </h3>

          {servicioSeleccionado && (
  <div className="mb-5 rounded-lg bg-orange-50 border border-orange-200 p-3">
    <p className="text-sm text-gray-600">
      Servicio seleccionado
    </p>
    <p className="font-semibold text-orange-600">
      {servicioSeleccionado}
    </p>
  </div>
)}

          <form onSubmit={enviarWhatsApp} className="flex flex-col gap-5">

            <input
              type="text"
              name="nombre"
              placeholder="Nombre"
              required
              className="rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
            />

            <input
              type="tel"
              name="telefono"
              placeholder="Teléfono"
              required
              className="rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
            />

            <input
              type="text"
              name="localidad"
              placeholder="Zona / localidad"
              required
              className="rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
            />
            
            <input
              type="text"
              name="superficie"
              placeholder="¿Cuántos ambientes o qué superficie aproximada?"
              className="rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
            />

            <select
  name="problema"
  className="rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
>
  <option value="">¿Hay algún problema o reparación?</option>
  <option value="Humedad">Humedad</option>
  <option value="Grietas">Grietas</option>
  <option value="Paredes dañadas">Paredes dañadas</option>
  <option value="Yeso o enduido">Yeso o enduido</option>
  <option value="Ninguno">Ninguno</option>
  <option value="Otro">Otro</option>
</select>

            <textarea
            name="trabajo"
              placeholder="Contanos brevemente qué trabajo necesitás..."
              rows={5}
              required
              className="resize-none rounded-lg border border-gray-300 p-3 outline-none focus:border-orange-500"
            />

            <button
              type="submit"
              className="rounded-xl bg-orange-500 px-8 py-4 font-semibold text-white transition hover:bg-orange-600"
            >
              Solicitar presupuesto
            </button>

          </form>

        </div>

        <div className="mx-auto mb-10 grid max-w-5xl gap-4 md:grid-cols-3">
  <div className="rounded-xl border border-gray-700 bg-gray-900 p-5 text-center">
    <h3 className="mb-2 font-bold text-white">
      Presupuesto sin compromiso
    </h3>
    <p className="text-sm text-gray-400">
      Te orientamos según lo que realmente necesita tu espacio.
    </p>
  </div>

  <div className="rounded-xl border border-gray-700 bg-gray-900 p-5 text-center">
    <h3 className="mb-2 font-bold text-white">
      Atención personalizada
    </h3>
    <p className="text-sm text-gray-400">
      Evaluamos cada trabajo de acuerdo con tus necesidades.
    </p>
  </div>

  <div className="rounded-xl border border-gray-700 bg-gray-900 p-5 text-center">
    <h3 className="mb-2 font-bold text-white">
      Contacto directo
    </h3>
    <p className="text-sm text-gray-400">
      Recibí una respuesta rápida y coordinamos contigo.
    </p>
  </div>
</div>
      </div>
    </section>
  );
}