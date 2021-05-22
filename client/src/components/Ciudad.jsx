import React from "react";
import { Link, Redirect } from "react-router-dom";
import './Ciudad.css'

export default function Ciudad({cities, match}) {
   let matchID = Number(match.params.id);
   const [city] = cities.filter(c => c.id === matchID)
   console.log(city)

   if(!city) return <Redirect />
   return (
      <div>
         <div className='ciudad'>
            <h2>{city.name}</h2>
            <div className="info">
               <div>Temperatura: {Math.floor(city.temp)} ºC</div>
               <div>Clima: {city.weather}</div>
               <div>Viento: {city.wind} km/h</div>
               <div>Nubosidad: {city.clouds}%</div>
               <div>Latitud: {city.latitud}º</div>
               <div>Longitud: {city.longitud}º</div>
            </div>
            <br />
            <button><Link className='back-button' to='/'>Volver</Link></button>
         </div>
      </div>
   )
}