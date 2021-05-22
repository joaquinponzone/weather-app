import React from 'react';
import { Link } from 'react-router-dom';
import './Card.css';

export default function Card ({min, max, name, img, onClose, id}) {
   return (
      <article className="card">
         <button className="card__closeButton" onClick={onClose}>X</button>
         <h3 className="card__title">{name}</h3>

         <div className="card__info">
            <div className="info__min">
               <h4>Min</h4>
               <p>{min}°</p>
            </div>

            <div className="info__max">
               <h4>Max</h4>
               <p>{max}°</p>
            </div>

            <div className="info__img">
               <img src={"http://openweathermap.org/img/wn/"+img+"@2x.png"} alt="Ícono del clima" />
            </div>
         </div>

        <button className="card__infoButton"><Link to={`ciudad/${id}`}>Más información</Link></button>
      </article>
   );
};
