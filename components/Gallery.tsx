"use client";

import { useState } from "react";

export default function Gallery() {
  const [imagenSeleccionada, setImagenSeleccionada] = useState<string | null>(
    null
  );

  return (
    <section id="galeria" className="bg-gray-50 px-6 py-24">
      <div className="mx-auto max-w-6xl">

        <div className="mb-14 text-center">
          <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-orange-500">
            NOVA
          </p>

         <h2 className="text-4xl font-bold text-gray-900">
            Nuestros trabajos
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-gray-600">
            Algunos de los espacios que hemos transformado con dedicación,
            calidad y atención a cada detalle.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          <div className="overflow-hidden rounded-2xl">
            <img
              src="/trabajo-1.jpg"
              alt="Trabajo de pintura realizado por NOVA"
              onClick={() =>
                setImagenSeleccionada("/trabajo-1.jpg")
              }
              className="h-72 w-full cursor-pointer object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src="/trabajo-2.jpg"
              alt="Trabajo de remodelación realizado por NOVA"
              onClick={() =>
                setImagenSeleccionada("/trabajo-2.jpg")
              }
              className="h-72 w-full cursor-pointer object-cover transition duration-500 hover:scale-105"
            />
          </div>

          <div className="overflow-hidden rounded-2xl">
            <img
              src="/trabajo-3.jpg"
              alt="Terminación profesional realizada por NOVA"
              onClick={() =>
                setImagenSeleccionada("/trabajo-3.jpg")
              }
              className="h-72 w-full cursor-pointer object-cover transition duration-500 hover:scale-105"
            />
          </div>

        </div>
      </div>

      {imagenSeleccionada && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4"
          onClick={() => setImagenSeleccionada(null)}
        >
          <img
            src={imagenSeleccionada ?? ""}
            alt="Trabajo realizado por NOVA"
            className="max-h-[90vh] max-w-full rounded-xl object-contain shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          />

          <button
            type="button"
            onClick={() => setImagenSeleccionada(null)}
            className="absolute right-4 top-4 rounded-full bg-white px-4 py-2 text-2xl font-bold text-gray-800 shadow-lg"
            aria-label="Cerrar imagen"
          >
            ×
          </button>
        </div>
      )}
    </section>
  );
}