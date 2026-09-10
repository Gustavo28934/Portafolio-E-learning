import SoftwareLayout from "../SoftwareLayout";
import textos from "../../locales/español/software/h5p/textos.json";

/**
 * Vista de Software: H5P.
 *
 * Los textos (párrafos, botón y footer) se leen desde textos.json.
 *
 * Variante respecto a Articulate 360:
 * - La flecha "anterior" se muestra a la derecha (vuelve a Articulate 360).
 *
 * Slots listos para colocar imágenes cuando el usuario las envíe:
 * - logoSrc:       logo de H5P.
 * - mockupSrc:     captura/mockup del laptop.
 */
function H5PSoftware() {
  return (
    <SoftwareLayout
      logoSrc="/img/h5p/software/titulo.png"
      logoAlt={textos.logoAlt}
      mockupSrc="/img/h5p/software/logo-h5p.png"
      mockupAlt={textos.mockupAlt}
      topRightSrc="/img/fondo/ellipse-2.png"
      bottomLeftSrc="/img/fondo/ellipse.png"
      paragraphs={textos.paragraphs}
      moreLabel={textos.moreLabel}
      footerText={textos.footerText}
      moreHref="#"
      homeHref="/"
      showPrev
      prevOnRight
      prevHref="/software/articulate-360"
    />
  );
}

export default H5PSoftware;
