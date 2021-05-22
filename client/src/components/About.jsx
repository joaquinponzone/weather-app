import React from 'react';

export default function About() {
   return (
      <>
         <h2>Sobre <span>Weather App</span></h2>
         <div className="contenedor-texto">
            <p>Esta web fue creada por <a href="https://github.com/joaquinponzone/">Joaquin Ponzone</a> utilizando <a href="https://reactjs.org">React JS</a>.</p>
               <p>La idea es que puedas traer los datos meteorológicos del lugar que desees, simplemente utilizando el buscador de arriba. Estos datos son traídos mediante el uso de una API externa y renderizados en pantalla dinámicamente. Las distintas secciones de la web se visualizan usando el ruteo provisto por <a href="https://reactrouter.com/">React Router</a>.</p>
            <p>Para obtener más información sobre alguna ciudad, puedes pulsar el botón de "Más información" que se encuentra en cada tarjeta.</p>
         </div>
      </>
   )
}