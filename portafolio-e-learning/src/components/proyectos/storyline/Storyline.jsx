import ProjectLayout from "../ProjectLayout";
import textos from "../../locales/español/proyectos/storyline/textos.json";

/**
 * Vista de proyectos hechos con Articulate Storyline.
 *
 * Los textos (título, footer y etiquetas de cursos) se leen desde textos.json.
 *
 * Slots listos para colocar imágenes cuando el usuario las envíe:
 * - logoSrc:      logo de Storyline (arriba a la izquierda).
 * - bulbLeftSrc:  foco izquierdo del footer.
 * - bulbRightSrc: foco derecho del footer.
 */
function Storyline() {
  const courses = textos.courses.map((label) => ({ label, href: "#" }));

  return (
    <ProjectLayout
      title={textos.title}
      logoSrc="/img/articulate-360/proyectos/titulo.png"
      logoAlt={textos.logoAlt}
      bulbLeftSrc="/img/fondo/proyectos/foco-izquierda.png"
      bulbRightSrc="/img/fondo/proyectos/foco-derecha.png"
      courses={courses}
      footerText={textos.footerText}
      prevHref="/proyectos/rises-360"
      nextHref="/proyectos/h5p"
      showNext
    />
  );
}

export default Storyline;
