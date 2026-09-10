import textos from "../../../locales/español/home/textos.json";

function NameSection() {
  return (
    <div className="mt-2 md:mt-4">
      <h1 className="mb-3 text-5xl font-black leading-none text-black sm:text-6xl md:mb-4 md:text-7xl lg:text-8xl">
        {textos.nombre.linea1}
        <br />
        {textos.nombre.linea2}
      </h1>
      <div className="mb-3 h-1.5 w-2/3 rounded-full bg-neutral-900 md:mb-4"></div>
      <h2 className="text-xl italic tracking-tight text-gray-800 sm:text-2xl md:text-3xl lg:text-4xl">
        {textos.subtitulo.prefijo}{" "}
        <span className="font-bold not-italic">
          {textos.subtitulo.resaltado}
        </span>
      </h2>
    </div>
  );
}

export default NameSection;
