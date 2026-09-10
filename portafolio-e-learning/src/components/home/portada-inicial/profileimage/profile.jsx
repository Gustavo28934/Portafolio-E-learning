import textos from "../../../locales/español/home/textos.json";

/**
 * Imagen de perfil (esquina superior derecha).
 *
 * La imagen "portada.png" ya incluye el anillo / fondo celeste alrededor,
 * por lo que se muestra directamente sin borde adicional.
 */
function ProfileImage() {
  const imageSrc = "/img/fondo/portada.png";

  return (
    <div className="relative aspect-square w-full">
      {imageSrc ? (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageSrc}
          alt={textos.profileAlt}
          className="h-full w-full object-contain"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center rounded-full bg-sky-200 text-xs text-sky-700">
          Foto
        </div>
      )}
    </div>
  );
}

export default ProfileImage;
