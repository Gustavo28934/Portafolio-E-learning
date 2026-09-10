import ProjectLayout from "../ProjectLayout";
import textos from "../../locales/español/proyectos/h5p/textos.json";

/**
 * Vista de proyectos hechos con H5P.
 *
 * Los textos (título, footer y etiquetas de cursos) se leen desde textos.json.
 *
 * Variante respecto a Rises 360 / Storyline:
 * - Solo se muestra la flecha "anterior" (sin flecha siguiente),
 *   tal como aparece en el diseño de referencia.
 *
 * Slots listos para colocar imágenes cuando el usuario las envíe:
 * - logoSrc:      logo de H5P (arriba a la izquierda).
 * - bulbLeftSrc:  foco izquierdo del footer.
 * - bulbRightSrc: foco derecho del footer.
 */
function H5P() {
  const courses = textos.courses.map((label) => ({ label, href: "#" }));

  return (
    <ProjectLayout
      title={textos.title}
      // logoSrc="/img/proyectos/h5p/logo.png"
      logoAlt={textos.logoAlt}
      // bulbLeftSrc="/img/proyectos/focos/foco-izquierdo.png"
      // bulbRightSrc="/img/proyectos/focos/foco-derecho.png"
      courses={courses}
      footerText={textos.footerText}
      prevHref="/proyectos/storyline"
      showNext={false}
    />
  );
}

export default H5P;
