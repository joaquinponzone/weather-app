import React from 'react';
import './Cards.css';
import Card from './Card.jsx';

export default function Cards({cities, onClose}) {
      if(cities.length < 1) {
         return(
            <>
            <h2>Bienvenido a <span>Weather App</span></h2>
            {/* <p>Ingresa una ciudad en el buscador y obtén sus datos meteorológicos.</p> */}
            </>
         )
      } else {
         return(
            <>
            <div className='cards-container'>
               {cities.map(c => <Card
               id={c.id}
               key={c.id}
               max={c.max}
               min={c.min}
               name={c.name}
               img={c.img}
               onClose={() => onClose(c.id)}
               /> )}
            </div>
            </>
         )
      }
      
}
