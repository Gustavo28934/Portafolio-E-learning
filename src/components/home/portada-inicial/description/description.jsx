import textos from "../../../locales/español/home/textos.json";

function Description() {
  return (
    <div className="w-fit max-w-xl rounded-r-[2.5rem] bg-sky-100 py-4 pl-5 pr-8 sm:py-5 sm:pl-10 sm:pr-12 md:pl-16 md:pr-16 lg:pl-20">
      <p className="text-sm font-medium leading-relaxed text-gray-800 sm:text-base">
        {textos.descripcion}
      </p>
    </div>
  );
}

export default Description;
