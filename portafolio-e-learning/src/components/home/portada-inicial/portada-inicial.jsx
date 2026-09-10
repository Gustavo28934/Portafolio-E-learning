import ActionButtons from "./actionbuttons/actionbuttons";
import DecorativeElements from "./decorativeelements/decorativeelements";
import Description from "./description/description";
import Header from "./header/header";
import NameSection from "./namesection/namesection";
import ProfileImage from "./profileimage/profile";
import Skills from "./skills/skills";

function Portada_inicial() {
  return (
    <main className="relative flex min-h-screen flex-col overflow-hidden bg-white">
      {/* Elementos decorativos de fondo (arcos celestes) */}
      <DecorativeElements />

      {/* Imagen de perfil (esquina superior derecha) */}
      <div className="absolute right-0 top-0 z-20">
        <div className="w-40 sm:w-56 md:w-80 lg:w-[26rem] xl:w-[30rem]">
          <ProfileImage />
        </div>
      </div>

      {/* Contenedor principal (contenido agrupado y compacto) */}
      <div className="relative z-10 flex w-full flex-1 flex-col justify-center px-5 py-8 sm:px-10 md:px-16 lg:px-20">
        {/* Encabezado + nombre: reservan espacio a la derecha para no chocar con la foto */}
        <div className="w-full max-w-3xl pr-32 text-left sm:pr-52 md:pr-80 lg:pr-[26rem] xl:pr-[30rem]">
          <Header />
          <NameSection />
        </div>

        {/* Descripción */}
        <div className="-ml-5 mt-4 w-full max-w-2xl sm:-ml-10 md:-ml-16 md:mt-5 lg:-ml-20">
          <Description />
        </div>

        {/* Skills */}
        <div className="mt-4 w-full md:mt-5">
          <Skills />
        </div>

        {/* Botones de acción centrados */}
        <div className="mt-6 flex w-full justify-center md:mt-8">
          <ActionButtons />
        </div>
      </div>
    </main>
  );
}

export default Portada_inicial;
