import SoftwareLayout from "../SoftwareLayout";
import textos from "../../locales/español/software/articulate-360/textos.json";

/**
 * Vista de Software: Articulate 360.
 *
 * Los textos (párrafos, botón y footer) se leen desde textos.json.
 *
 * Slots listos para colocar imágenes cuando el usuario las envíe:
 * - logoSrc:       logo de Articulate 360.
 * - mockupSrc:     captura/mockup del laptop.
 */
function Articulate360() {
  return (
    <SoftwareLayout
      // logoSrc="/img/software/articulate-360/logo.png"
      logoAlt={textos.logoAlt}
      // mockupSrc="/img/software/articulate-360/mockup.png"
      mockupAlt={textos.mockupAlt}
      topRightSrc="/img/fondo/ellipse-2.png"
      bottomLeftSrc="/img/fondo/ellipse.png"
      paragraphs={textos.paragraphs}
      moreLabel={textos.moreLabel}
      footerText={textos.footerText}
      moreHref="#"
      homeHref="/"
      showNext
      nextHref="/software/h5p"
    />
  );
}

export default Articulate360;
