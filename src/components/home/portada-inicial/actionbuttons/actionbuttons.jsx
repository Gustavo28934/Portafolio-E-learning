import Link from "next/link";
import textos from "../../../locales/español/home/textos.json";

/** Detecta si un link es externo (http/https) para abrirlo en pestaña nueva. */
const isExternal = (href) => /^https?:\/\//i.test(href);

/**
 * Botón individual del home.
 * - Si `href` tiene valor, es un enlace activo (externo -> pestaña nueva).
 * - Si `href` está vacío, se muestra desactivado (no navega).
 */
function ActionButton({ href, label }) {
  const base =
    "flex flex-1 items-center justify-center rounded-full px-6 py-3 text-base font-bold text-white shadow-lg sm:px-10 sm:text-lg";

  if (!href) {
    return (
      <span
        aria-disabled="true"
        className={`${base} cursor-not-allowed bg-blue-400/60`}
      >
        {label}
      </span>
    );
  }

  return (
    <Link
      href={href}
      className={`${base} bg-blue-400 transition-colors hover:bg-blue-500`}
      {...(isExternal(href)
        ? { target: "_blank", rel: "noopener noreferrer" }
        : {})}
    >
      {label}
    </Link>
  );
}

function ActionButtons() {
  const { botones } = textos;

  return (
    <div className="flex w-full max-w-md flex-row gap-3 sm:gap-4">
      {/* Botón "Software" — destino editable desde textos.json (softwareHref) */}
      <ActionButton href={botones.softwareHref} label={botones.software} />

      {/* Botón "Proyectos" — destino editable desde textos.json (proyectosHref) */}
      <ActionButton href={botones.proyectosHref} label={botones.proyectos} />
    </div>
  );
}

export default ActionButtons;
