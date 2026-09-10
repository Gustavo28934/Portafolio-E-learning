import textos from "../../../locales/español/home/textos.json";

function Skills() {
  // Estilos por cada programa (el texto viene del JSON).
  const estilos = {
    H5P: { bgColor: "bg-blue-500", textColor: "text-white", border: "" },
    sl: { bgColor: "bg-fuchsia-500", textColor: "text-white", border: "" },
    rs: {
      bgColor: "bg-white",
      textColor: "text-orange-500",
      border: "border-2 border-orange-400",
    },
  };

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-3 sm:gap-6">
      <span className="text-sm font-semibold text-gray-800 sm:text-base">
        {textos.skills.label}
      </span>
      <div className="flex gap-3 sm:gap-4">
        {textos.skills.items.map((name) => {
          const s = estilos[name] ?? {
            bgColor: "bg-slate-400",
            textColor: "text-white",
            border: "",
          };
          return (
            <div
              key={name}
              className={`${s.bgColor} ${s.textColor} ${s.border} flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold shadow-md sm:h-14 sm:w-14 sm:text-base`}
            >
              {name}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
