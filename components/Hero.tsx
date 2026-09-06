"use client";
import Button from "./Button";

export default function Hero() {
  const irAContacto = () => {
  const contacto = document.getElementById("contacto");

  if (contacto) {
    contacto.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }
};
  return (
    <section className="relative flex min-h-[70vh] items-center justify-center overflow-hidden bg-[url('/hero-nova-limpia.jpg')] bg-cover bg-[center_45%]">

      <div className="absolute inset-0 bg-black/55" />

      <div className="relative z-10 max-w-4xl px-6 text-center">

        <p className="mb-4 text-orange-400 font-semibold tracking-[0.3em] uppercase">
          NOVA
        </p>

        <h1 className="mb-8 text-3xl font-extrabold leading-tight text-white md:text-5xl">
          Pintores en CABA y GBA.
        <br />
          Transformamos espacios.
       </h1>

        <p className="mx-auto mb-10 max-w-2xl text-xl text-gray-300">
          Especialistas en pintura, remodelaciones, tratamiento de humedad,
          yeso, enduido, durlock y terminaciones profesionales.
        </p>

        <Button onClick={irAContacto}>
          Solicitar presupuesto
        </Button>

      </div>

    </section>
  );
}