import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainNavigation.css';

export default function MainNavigation() {
   return(
      <div className="main-nav">
         <NavLink to='/about' activeClassName="link-act">Acerca de</NavLink>
         <NavLink to='/credits' activeClassName="link-act">Créditos</NavLink>
      </div>
   )
}