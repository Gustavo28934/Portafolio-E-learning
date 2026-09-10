import ProjectLayout from "../ProjectLayout";
import textos from "../../locales/español/proyectos/rises-360/textos.json";

/**
 * Vista de proyectos hechos con Articulate Rise 360.
 *
 * Los textos (título, footer y etiquetas de cursos) se leen desde textos.json.
 * El resaltado morado se muestra al pasar el ratón sobre cualquier curso.
 *
 * Slots listos para colocar imágenes cuando el usuario las envíe:
 * - logoSrc:      logo de Articulate 360 (arriba a la izquierda).
 * - bulbLeftSrc:  foco izquierdo del footer.
 * - bulbRightSrc: foco derecho del footer.
 */
function Rises360() {
  return (
    <ProjectLayout
      title={textos.title}
      logoSrc="/img/articulate-360/proyectos/titulo.png"
      logoAlt={textos.logoAlt}
      bulbLeftSrc="/img/fondo/proyectos/foco-izquierda.png"
      bulbRightSrc="/img/fondo/proyectos/foco-derecha.png"
      courses={textos.courses}
      footerText={textos.footerText}
      prevHref="/"
      nextHref="/proyectos/storyline"
      showNext
    />
  );
}

export default Rises360;
