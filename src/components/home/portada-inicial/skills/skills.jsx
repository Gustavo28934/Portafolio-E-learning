import Image from "next/image";
import textos from "../../../locales/español/home/textos.json";

function Skills() {
  // Imagen por cada programa (el listado viene del JSON).
  const iconos = {
    H5P: { src: "/img/h5p-icon-home.png", alt: "H5P" },
    sl: { src: "/img/sl-icon-home.png", alt: "Storyline" },
    rs: { src: "/img/rs-icon-home.png", alt: "Rise" },
  };

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-3 sm:gap-6">
      <span className="text-sm font-semibold text-gray-800 sm:text-base">
        {textos.skills.label}
      </span>
      <div className="flex items-center gap-3 sm:gap-4">
        {textos.skills.items.map((name) => {
          const icono = iconos[name];
          if (!icono) return null;
          return (
            <div
              key={name}
              className="relative h-12 w-12 sm:h-14 sm:w-14"
            >
              <Image
                src={icono.src}
                alt={icono.alt}
                fill
                sizes="56px"
                className="object-contain"
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
