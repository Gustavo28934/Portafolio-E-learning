import Link from "next/link";
import textos from "../../../locales/español/home/textos.json";

function ActionButtons() {
  return (
    <div className="flex w-full max-w-md flex-row gap-3 sm:gap-4">
      {/* El botón "Software" redirige directamente a la vista Articulate 360 */}
      <Link
        href="/software/articulate-360"
        className="flex flex-1 items-center justify-center rounded-full bg-blue-400 px-6 py-3 text-base font-bold text-white shadow-lg transition-colors hover:bg-blue-500 sm:px-10 sm:text-lg"
      >
        {textos.botones.software}
      </Link>

      {/* El botón "Proyectos" redirige directamente a la vista Rises 360 */}
      <Link
        href="/proyectos/rises-360"
        className="flex flex-1 items-center justify-center rounded-full bg-blue-400 px-6 py-3 text-base font-bold text-white shadow-lg transition-colors hover:bg-blue-500 sm:px-10 sm:text-lg"
      >
        {textos.botones.proyectos}
      </Link>
    </div>
  );
}

export default ActionButtons;
