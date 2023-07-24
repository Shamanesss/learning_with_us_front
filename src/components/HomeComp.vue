<template>
  <div class="hello">
    <div class="container">
      <p>Bienvenido a nuestro sitio web de Cursos de Programación.</p>
      <p>
        ¿Te apasiona la tecnología y el desarrollo de software? ¿Quieres
        aprender a programar en los lenguajes más populares y poder construir
        tus propias aplicaciones y sitios web? ¡Has llegado al lugar adecuado!
      </p>
      <p>
        En nuestro sitio web, te ofrecemos una amplia gama de cursos de
        programación, diseñados para principiantes y aquellos que deseen mejorar
        sus habilidades en el desarrollo de software. Nuestros cursos están
        dirigidos por expertos en la industria que te guiarán en tu camino hacia
        el dominio de los lenguajes más demandados del mundo.
      </p>
      <p>
        Sumérgete en el emocionante mundo de JavaScript, HTML y CSS, los
        cimientos de la web moderna. Aprende a construir sitios web interactivos
        y dinámicos, y descubre cómo dar vida a tus ideas mediante la
        programación.
      </p>
      <p>
        Pero eso no es todo, pronto estaremos agregando cursos de Python, Java y
        C, para aquellos que buscan expandir sus conocimientos y convertirse en
        programadores polifacéticos.
      </p>
      <p>
        Nuestro objetivo es proporcionarte una experiencia de aprendizaje única,
        con contenido de calidad y proyectos prácticos que te permitan aplicar
        lo que aprendes de manera efectiva.
      </p>
      <p>
        ¡No esperes más! Únete a nuestra comunidad de estudiantes apasionados y
        emprende tu viaje hacia una carrera emocionante en el mundo de la
        programación. ¡La puerta a un futuro lleno de oportunidades está abierta
        para ti!
      </p>
      <br />
    </div>
    <router-link to="/cursos"><button>Entrar</button></router-link>
  </div>
</template>
<script setup></script>
<style scoped>
.container {
  text-align: justify;
}
button {
  background: #848d68;
  color: white;
  padding: 0.5rem;
  font-size: 1.5rem;
  width: 50%;
  border-radius: 1rem;
  margin-bottom: 2rem;
}
button:hover {
  opacity: 0.7;
  background-color: #3e5e84;
  color: white;
  padding: 0.5rem;
}
</style>
