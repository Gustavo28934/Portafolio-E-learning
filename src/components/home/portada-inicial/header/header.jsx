import Image from "next/image";
import textos from "../../../locales/español/home/textos.json";

function Header() {
  return (
    <div className="mb-6 flex items-center md:mb-8">
      {/* Logo "articulate 360" (arriba a la izquierda) */}
      <Image
        src="/img/header-1.png"
        alt={textos.logoAlt}
        width={220}
        height={48}
        priority
        className="h-auto w-32 object-contain sm:w-40 md:w-48 lg:w-56"
      />
    </div>
  );
}

export default Header;
