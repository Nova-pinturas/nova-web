export default function Footer() {
  return (
    <footer className="bg-gray-950 text-white">
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="grid gap-10 md:grid-cols-3">

          {/* Marca */}
          <div>
            <h2 className="text-3xl font-bold text-orange-500">
              NOVA
            </h2>

            <p className="mt-3 max-w-sm text-sm leading-6 text-gray-400">
              Transformamos espacios. Creamos confianza.
              Calidad, compromiso y terminaciones profesionales.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Navegación
            </h3>

            <div className="flex flex-col gap-3 text-sm">
              <a
                href="#top"
                className="text-gray-400 transition hover:text-orange-500"
              >
                Inicio
              </a>

              <a
                href="#servicios"
                className="text-gray-400 transition hover:text-orange-500"
              >
                Servicios
              </a>

              <a
                href="#galeria"
                className="text-gray-400 transition hover:text-orange-500"
              >
                Galería
              </a>

              <a
                href="#contacto"
                className="text-gray-400 transition hover:text-orange-500"
              >
                Contacto
              </a>
            </div>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
              Contacto
            </h3>

            <p className="text-sm leading-6 text-gray-400">
              ¿Tenés un proyecto en mente?
              <br />
              Solicita tu presupuesto sin compromiso.
            </p>

            <a
              href="#contacto"
              className="mt-5 inline-block rounded-xl bg-orange-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-orange-600"
            >
              Solicitar presupuesto
            </a>
          </div>

        </div>

        {/* Línea inferior */}
        <div className="mt-10 border-t border-gray-800 pt-6 text-center">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} NOVA. Todos los derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}