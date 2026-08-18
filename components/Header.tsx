"use client";
import { useState } from "react";
export default function Header() {
  const [menuAbierto, setMenuAbierto] = useState(false);

 const irASeccion = (
  e: React.MouseEvent<HTMLAnchorElement>,
  id: string
) => {
  e.preventDefault();

  const seccion = document.getElementById(id);

  if (seccion) {
    seccion.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    window.history.replaceState(null, "", `#${id}`);
    
    setMenuAbierto(false);
  }
};

  return (
    <header className="relative sticky top-0 z-50 flex items-center justify-between px-10 py-6 shadow-sm bg-white">
      <h1 className="text-3xl font-bold text-orange-500">
        NOVA
      </h1>

<button
  onClick={() => setMenuAbierto(!menuAbierto)}
  className="md:hidden text-2xl text-orange-500"
>
  ☰
</button>

<nav
  className={`${
    menuAbierto ? "flex" : "hidden"
  } md:flex flex-col md:flex-row gap-6 md:gap-8 absolute md:static top-full right-0 bg-white p-6 md:p-0 shadow-md md:shadow-none`}
>

        <a href="#top" onClick={(e) => irASeccion(e, "top")}>Inicio</a>

        <a href="#servicios" onClick={(e) => irASeccion(e, "servicios")}>
          Servicios
        </a>

        <a href="#galeria" onClick={(e) => irASeccion(e, "galeria")}>
          Galería
        </a>

        <a href="#contacto" onClick={(e) => irASeccion(e, "contacto")}>
          Contacto
        </a>
      </nav>
    </header>
  );
}