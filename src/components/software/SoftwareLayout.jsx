import Link from "next/link";

/**
 * Layout reutilizable para las vistas de Software (Articulate 360, H5P).
 *
 * Props:
 * - logoSrc:      string -> ruta del logo (columna izquierda, arriba). Slot listo.
 * - logoAlt:      string -> texto alternativo del logo.
 * - paragraphs:   Array<string> -> párrafos de la descripción.
 * - moreHref:     string -> destino del botón "Ver más" (por defecto "#").
 * - mockupSrc:    string -> imagen del mockup (columna derecha). Slot listo.
 * - mockupAlt:    string -> texto alternativo del mockup.
 * - topRightSrc:  string -> imagen decorativa esquina superior derecha. Slot listo.
 * - bottomLeftSrc:string -> imagen decorativa esquina inferior izquierda. Slot listo.
 * - homeHref:     string -> destino del botón home (por defecto "/").
 * - showPrev:     boolean -> muestra flecha anterior.
 * - prevHref:     string -> destino flecha anterior.
 * - showNext:     boolean -> muestra flecha siguiente.
 * - nextHref:     string -> destino flecha siguiente.
 * - footerText:   string -> texto del footer.
 */
function SoftwareLayout({
  logoSrc,
  logoAlt = "Logo",
  paragraphs = [],
  moreHref = "#",
  moreLabel = "Ver más",
  mockupSrc,
  mockupAlt = "Vista previa",
  topRightSrc,
  bottomLeftSrc,
  homeHref = "/",
  showPrev = false,
  prevHref = "#",
  prevOnRight = false,
  showNext = false,
  nextHref = "#",
  footerText = "Haz clic en la flecha para navegar",
}) {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-white">
      {/* Decorativo esquina superior derecha — slot de imagen */}
      <div className="pointer-events-none absolute right-0 top-0 z-0 h-28 w-28 sm:h-40 sm:w-40 md:h-52 md:w-52">
        {topRightSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={topRightSrc}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain object-right-top"
          />
        ) : (
          <div className="flex h-full w-full items-start justify-end rounded-bl-2xl border border-dashed border-slate-200 p-1 text-[9px] text-slate-300">
            IMG sup. der.
          </div>
        )}
      </div>

      {/* Decorativo esquina inferior izquierda — slot de imagen */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-44 lg:w-44">
        {bottomLeftSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={bottomLeftSrc}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain object-left-bottom"
          />
        ) : (
          <div className="flex h-full w-full items-end justify-start rounded-tr-2xl border border-dashed border-slate-200 p-1 text-[9px] text-slate-300">
            IMG inf. izq.
          </div>
        )}
      </div>

      {/* Botón Home (arriba a la izquierda) */}
      <header className="relative z-20 px-4 pt-4 sm:px-6 sm:pt-6 md:px-10 md:pt-8">
        <Link
          href={homeHref}
          aria-label="Volver al inicio"
          className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-400 text-white shadow-md transition-colors hover:bg-sky-500 sm:h-12 sm:w-12"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 sm:h-6 sm:w-6"
          >
            <path d="M3 10.5 12 3l9 7.5" />
            <path d="M5 9.5V21h14V9.5" />
          </svg>
        </Link>
      </header>

      {/* Contenido principal: dos columnas (apiladas en móvil) */}
      <section className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col items-center gap-8 px-6 py-8 sm:px-8 md:flex-row md:gap-10 md:py-10 lg:gap-16">
        {/* Columna izquierda: logo + texto + botón */}
        <div className="order-2 w-full md:order-1 md:w-1/2">
          {/* Logo — slot listo para imagen */}
          <div className="mb-5 flex h-12 items-center sm:h-14 md:mb-6 md:h-16">
            {logoSrc ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                src={logoSrc}
                alt={logoAlt}
                className="h-full w-auto object-contain"
              />
            ) : (
              <div className="flex h-full w-40 items-center justify-center rounded-md border border-dashed border-slate-300 text-[10px] text-slate-400">
                LOGO
              </div>
            )}
          </div>

          {/* Párrafos */}
          <div className="space-y-4">
            {paragraphs.map((text, i) => (
              <p
                key={i}
                className="text-sm leading-relaxed text-gray-800 sm:text-base"
              >
                {text}
              </p>
            ))}
          </div>

          {/* Botón "Ver más" */}
          <div className="mt-6 md:mt-8">
            <Link
              href={moreHref}
              className="inline-flex items-center justify-center rounded-xl bg-sky-400 px-8 py-3 text-base font-bold text-white shadow-md transition-colors hover:bg-sky-500 sm:px-10"
            >
              {moreLabel}
            </Link>
          </div>
        </div>

        {/* Columna derecha: mockup — slot listo para imagen */}
        <div className="order-1 flex w-full items-center justify-center md:order-2 md:w-1/2">
          {mockupSrc ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={mockupSrc}
              alt={mockupAlt}
              className="h-auto w-full max-w-md object-contain md:max-w-full"
            />
          ) : (
            <div className="flex aspect-video w-full max-w-md items-center justify-center rounded-xl border border-dashed border-slate-300 text-xs text-slate-400">
              IMG (mockup / vista previa)
            </div>
          )}
        </div>
      </section>

      {/* Footer: texto + flechas */}
      <footer className="relative z-10 flex items-center px-4 pb-5 sm:px-6 sm:pb-6 md:px-10 md:pb-8">
        {/* Lado izquierdo: flecha anterior (solo si NO está configurada a la derecha) */}
        <div className="flex w-16 justify-start sm:w-20">
          {showPrev && !prevOnRight && (
            <Link
              href={prevHref}
              aria-label="Anterior"
              className="text-slate-800 transition-colors hover:text-sky-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[1.65rem] w-[1.65rem] sm:h-[1.925rem] sm:w-[1.925rem]"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </Link>
          )}
        </div>

        {/* Texto centrado */}
        <p className="flex-1 text-center text-xs text-slate-600 sm:text-sm md:text-base">
          {footerText}
        </p>

        {/* Lado derecho: flecha siguiente o flecha anterior (si prevOnRight) */}
        <div className="flex w-16 justify-end sm:w-20">
          {showNext && (
            <Link
              href={nextHref}
              aria-label="Siguiente"
              className="text-slate-800 transition-colors hover:text-sky-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[1.65rem] w-[1.65rem] sm:h-[1.925rem] sm:w-[1.925rem]"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          )}

          {showPrev && prevOnRight && (
            <Link
              href={prevHref}
              aria-label="Anterior"
              className="text-slate-800 transition-colors hover:text-sky-500"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-[1.65rem] w-[1.65rem] sm:h-[1.925rem] sm:w-[1.925rem]"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
            </Link>
          )}
        </div>
      </footer>
    </main>
  );
}

export default SoftwareLayout;
