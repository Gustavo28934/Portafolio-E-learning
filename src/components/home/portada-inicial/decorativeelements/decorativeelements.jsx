/**
 * Elementos decorativos de las esquinas inferiores.
 *
 * Slots listos para colocar una imagen en cada lado:
 * - leftSrc:  ruta de la imagen de la esquina inferior IZQUIERDA.
 * - rightSrc: ruta de la imagen de la esquina inferior DERECHA.
 *
 * Cuando tengas las imágenes, colócalas en /public y define las rutas abajo.
 * Mientras no existan, se muestra un recuadro placeholder pegado a cada esquina.
 */
function DecorativeElements() {
  const leftSrc = "/img/fondo/ellipse.png"; // esquina inferior izquierda
  const rightSrc = "/img/fondo/capa_1.png"; // esquina inferior derecha (incluye "articulate 360")

  return (
    <>
      {/* Esquina inferior IZQUIERDA — slot de imagen */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-0 h-20 w-20 sm:h-28 sm:w-28 md:h-36 md:w-36 lg:h-44 lg:w-44">
        {leftSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={leftSrc}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain object-left-bottom"
          />
        ) : (
          <div className="flex h-full w-full items-end justify-start rounded-tr-2xl border border-dashed border-slate-200 p-1 text-[9px] text-slate-300">
            IMG izquierda
          </div>
        )}
      </div>

      {/* Esquina inferior DERECHA — slot de imagen */}
      <div className="pointer-events-none absolute bottom-0 right-0 z-0 h-24 w-24 sm:h-32 sm:w-32 md:h-44 md:w-44 lg:h-52 lg:w-52">
        {rightSrc ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            src={rightSrc}
            alt=""
            aria-hidden="true"
            className="h-full w-full object-contain object-right-bottom"
          />
        ) : (
          <div className="flex h-full w-full items-end justify-end rounded-tl-2xl border border-dashed border-slate-200 p-1 text-[9px] text-slate-300">
            IMG derecha
          </div>
        )}
      </div>
    </>
  );
}

export default DecorativeElements;
