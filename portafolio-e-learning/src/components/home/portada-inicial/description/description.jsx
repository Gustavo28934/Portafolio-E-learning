import textos from "../../../locales/español/home/textos.json";

function Description() {
  return (
    <div className="mb-8 max-w-2xl rounded-2xl bg-blue-100 p-5 sm:p-6 md:mb-12 md:p-8">
      <p className="text-sm font-medium leading-relaxed text-gray-800 sm:text-base">
        {textos.descripcion}
      </p>
    </div>
  );
}

export default Description;
