<!DOCTYPE html>
<html lang="es">
  <head>
    <meta charset="UTF-8">
    <title>Curriculum Vitae de José Vega - Desarrollador Web</title>
    <meta name="description" content="Curriculum vitae de José Vega, un desarrollador web con experiencia en HTML, CSS, JavaScript, PHP y bases de datos.">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">
    <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css">
    <style>
      body {
        font-family: 'Roboto', sans-serif;
        color: #333;
        line-height: 1.2;
        margin: 0;
        padding: 0;
        font-size: 15px; 
      }

      h1, h2 {
        font-family: 'Montserrat', sans-serif;
        font-weight: bold;
        margin: 0;
        font-size: 25px; 
      }

      img {
        border-radius: 50%;
      }

      .icon {
        margin-right: 5px;
      }

      .section {
        border-top: 2px solid #ccc;
        margin-bottom: 30px;
        padding-top: 30px;
      }

      .section h2 {
        font-size: 25px; 
        margin-bottom: 10px;
      }

      .section p {
        margin-bottom: 5px;
        font-size: 16px; 
      }

      .section ul {
        margin: 0;
        padding-left: 20px;
        list-style: none;
      }

      .section li {
        margin-bottom: 5px;
        font-size: 14px; 
      }

      header {
        background-color: blue;
        color: white;
        padding: 20px;
      }

      main {
        max-width: 800px;
        margin: 0 auto;
        padding: 20px;
      }

      ul.skills {
        display: flex;
        flex-wrap: wrap;
        list-style: none;
        margin: 0;
        padding: 0;
      }

      ul.skills li {
        margin-right: 10px;
        margin-bottom: 10px;
        padding: 5px 10px;
        border-radius: 5px;
        background-color: blue;
        color: white;
        font-size: 14px; 
        font-weight: bold;
        text-transform: uppercase;
      }
    </style>
  </head>
  <body>
    <header>
      <h1>Curriculum Vitae de José Vega</h1>
      <p>Desarrollador Web</p>
    </header>
    <main>
      <section class="section">
        <h2>Información personal</h2>
        <ul>
          <li><i class="fas fa-map-marker-alt icon" aria-hidden="true"></i><span class="sr-only">Ubicación:</span> Mendoza, Argentina</li>
          <li><i class="fas fa-envelope icon" aria-hidden="true"></i><span class="sr-only">Correo electrónico:</span> <a href="mailto:josevega1@gmail.com">josevega1@gmail.com</a></li>
          <li><i class="fas fa-phone icon" aria-hidden="true"></i><span class="sr-only">Teléfono:</span> +542634843762</li>
        </ul>
      </section>
      <section class="section">
        <h2>Experiencia laboral</h2>
        <button onclick="mostrarInfo()">Más información</button>
        <div id="info-experiencia" style="display:none">
          <p>Esta sección muestra mi experiencia laboral.</p>
          <p>Para más información, por favor contactarme por correo electrónico.</p>
        </div>
        <ul>
          <li>
            <p><strong>Desarrollador web</strong></p>
            <p>Google</p>
            <p>2019-2022</p>
            <ul>
              <li>Desarrollo de aplicaciones web utilizando HTML, CSS, JavaScript y PHP.</li>
              <li>Creación y diseño de sitios web utilizando WordPress.</li>
              <li>Desarrollo de proyectos de comercio electrónico con Magento.</li>
              <li>Implementación de estrategias de SEO y análisis de datos de Google Analytics.</li>
            </ul>
          </li>
          <li>
            <p><strong>Desarrollador de software</strong></p>
            <p>Microsoft</p>
            <p>2017-2019</p>
            <ul>
              <li>Desarrollo de aplicaciones de escritorio con Java y Python.</li>
              <li>Diseño y desarrollo de bases de datos con MySQL.</li>
              <li>Colaboración en proyectos de desarrollo de software utilizando metodologías ágiles.</li>
            </ul>
          </li>
        </ul>
      </section>
      <section class="section">
        <h2>Educación</h2>
        <ul>
          <li>
            <p><strong>Licenciatura en Informática</strong></p>
            <p>Universidad Nacional de Cuyo</p>
            <p>2012-2018</p>
          </li>
          <li>
            <p><strong>Diploma en Desarrollo de Aplicaciones Web</strong></p>
            <p>Platzi</p>
            <p>2021</p>
          </li>
        </ul>
      </section>
      <section class="section">
        <h2>Habilidades</h2>
        <ul class="skills">
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>PHP</li>
          <li>WordPress</li>
          <li>Magento</li>
          <li>MySQL</li>
          <li>Java</li>
          <li>Python</li>
          <li>Git</li>
        </ul>
      </section>
    </main>
  </body>
</html>