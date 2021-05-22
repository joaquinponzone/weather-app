import React from 'react';
import { Route } from 'react-router-dom';
import Cards from './Cards.jsx';
import About from './About.jsx';
import Creditos from './Creditos.jsx';
import Ciudad from './Ciudad.jsx';
import './Main.css';

export default function Main({cities, onClose}) {
   return (
      <main>
         <div className="main-container">
            <Route exact path='/' render={() => <Cards cities={cities} onClose={onClose} />} />
            <Route path='/about' component={About} />
            <Route path='/credits' component={Creditos} />
            <Route path='/ciudad/:id' render={ ({ match }) => <Ciudad cities={cities} match={match} /> } />
         </div>
      </main>
   )
}