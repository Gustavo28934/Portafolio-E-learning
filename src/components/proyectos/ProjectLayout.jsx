import Link from "next/link";
import Image from "next/image";

/**
 * Layout reutilizable para las vistas de proyectos (Rises 360, Storyline, H5P).
 *
 * Props:
 * - title:        string  -> título que aparece arriba a la derecha (ej. "Rises 360").
 * - logoSrc:      string  -> ruta de la imagen del logo (arriba a la izquierda). Opcional.
 * - logoAlt:      string  -> texto alternativo del logo.
 * - courses:      Array   -> lista de cursos. Cada item puede ser:
 *                              - un string: "Curso 1" (sin link, botón inactivo), o
 *                              - un objeto: { "label": "Curso 1", "href": "https://..." }.
 *                            Por defecto genera "Curso 1" ... "Curso 10".
 *                            Los href que empiezan con "http" se abren en una pestaña nueva.
 * - bulbLeftSrc:  string  -> ruta de la imagen del foco izquierdo (footer). Opcional.
 * - bulbRightSrc: string  -> ruta de la imagen del foco derecho (footer). Opcional.
 * - footerText:   string  -> texto del footer.
 * - showNext:     boolean -> muestra la flecha "siguiente" (por defecto true).
 * - prevHref:     string  -> destino de la flecha anterior (por defecto "/").
 * - nextHref:     string  -> destino de la flecha siguiente.
 *
 * Nota: el resaltado morado se aplica a cualquier curso al pasar el ratón (hover).
 */
function ProjectLayout({
  title = "",
  logoSrc,
  logoAlt = "Logo",
  courses,
  bulbLeftSrc,
  bulbRightSrc,
  footerText = "Haz clic en cada sección para ver los proyectos a detalle",
  showNext = true,
  homeHref = "/",
  prevHref = "/",
  nextHref,
}) {
  // Genera 10 cursos por defecto si no se pasan.
  // Cada curso puede venir como string ("Curso 1") o como objeto
  // ({ label, href }). Aquí lo normalizamos siempre a { label, href }.
  const items = (
    courses ?? Array.from({ length: 10 }, (_, i) => `Curso ${i + 1}`)
  ).map((course) =>
    typeof course === "string"
      ? { label: course, href: "" }
      : { label: course.label, href: course.href ?? "" }
  );

  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-white">
      {/* Elemento decorativo: arco inferior izquierdo (imagen) */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-44 lg:w-44">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/img/fondo/ellipse.png"
          alt=""
          aria-hidden="true"
          className="h-full w-full object-contain object-left-bottom"
        />
      </div>

      {/* ====== ENCABEZADO ====== */}
      <header className="relative z-10 flex items-center justify-between px-4 pt-4 sm:px-6 sm:pt-6 md:px-10 md:pt-8">
        {/* Logo (esquina superior izquierda) — slot listo para imagen */}
        <div className="flex h-10 w-24 items-center sm:h-12 sm:w-32 md:h-14 md:w-40">
          {logoSrc ? (
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={160}
              height={56}
              className="h-full w-auto object-contain"
              priority
            />
          ) : (
            <div className="flex h-full w-full items-center justify-center rounded-md border border-dashed border-slate-300 text-[10px] text-slate-400">
              LOGO
            </div>
          )}
        </div>

        {/* Botón Home (centrado) */}
        <Link
          href={homeHref}
          aria-label="Volver al inicio"
          className="absolute left-1/2 top-4 flex h-10 w-10 -translate-x-1/2 items-center justify-center rounded-full bg-sky-400 text-white shadow-md transition-colors hover:bg-sky-500 sm:top-6 sm:h-12 sm:w-12 md:top-8"
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

        {/* Título (esquina superior derecha) */}
        <h1 className="text-right text-lg font-extrabold text-slate-900 sm:text-2xl md:text-3xl">
          {title}
        </h1>
      </header>

      {/* ====== GRID DE CURSOS ====== */}
      <section className="relative z-10 mx-auto flex w-full max-w-4xl flex-1 items-center px-4 py-8 sm:px-6 sm:py-10 md:py-12">
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-4 md:gap-x-12 md:gap-y-5">
          {items.map((course, i) => {
            const baseClass =
              "flex w-full items-center justify-center rounded-2xl px-4 py-3 text-center text-sm font-bold text-white shadow-md transition-all sm:py-4 sm:text-base";

            // Sin link: se muestra el botón pero desactivado (no navega).
            if (!course.href) {
              return (
                <span
                  key={i}
                  aria-disabled="true"
                  className={`${baseClass} cursor-not-allowed bg-sky-400/60`}
                >
                  {course.label}
                </span>
              );
            }

            const isExternal = /^https?:\/\//i.test(course.href);
            const activeClass = `${baseClass} bg-sky-400 hover:bg-sky-500 hover:ring-2 hover:ring-purple-500 hover:ring-offset-2`;

            return (
              <Link
                key={i}
                href={course.href}
                className={activeClass}
                {...(isExternal
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
              >
                {course.label}
              </Link>
            );
          })}
        </div>
      </section>

      {/* ====== FOOTER ====== */}
      <footer className="relative z-10 flex items-center justify-between gap-3 px-4 pb-5 sm:px-6 sm:pb-6 md:px-10 md:pb-8">
        {/* Texto con focos a los lados */}
        <div className="flex min-w-0 flex-1 items-center justify-center gap-2 sm:gap-3">
          {/* Foco izquierdo — slot listo para imagen */}
          <BulbSlot src={bulbLeftSrc} alt="Foco izquierdo" />

          <p className="text-center text-xs text-slate-700 sm:text-sm md:text-base">
            {footerText}
          </p>

          {/* Foco derecho — slot listo para imagen */}
          <BulbSlot src={bulbRightSrc} alt="Foco derecho" />
        </div>

        {/* Flechas de navegación */}
        <div className="flex flex-shrink-0 items-center gap-3 sm:gap-4">
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
              className="h-6 w-6 sm:h-7 sm:w-7"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
          </Link>

          {showNext && (
            <Link
              href={nextHref ?? "#"}
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
                className="h-6 w-6 sm:h-7 sm:w-7"
              >
                <line x1="5" y1="12" x2="19" y2="12" />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </Link>
          )}
        </div>
      </footer>
    </main>
  );
}

/** Slot reutilizable para las imágenes de los focos del footer. */
function BulbSlot({ src, alt }) {
  if (src) {
    return (
      <Image
        src={src}
        alt={alt}
        width={40}
        height={40}
        className="h-8 w-8 flex-shrink-0 object-contain sm:h-10 sm:w-10"
      />
    );
  }
  return (
    <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-dashed border-slate-300 text-[8px] text-slate-400 sm:h-10 sm:w-10">
      💡
    </div>
  );
}

export default ProjectLayout;
