import React from 'react';
import { NavLink } from 'react-router-dom';
import './MainNavigation.css';

export default function MainNavigation({themeToggler, theme}) {
   return(
      <div className="main-nav">
         <NavLink to='/about' activeClassName="link-act">Acerca de</NavLink>
         <NavLink to='/credits' activeClassName="link-act">Créditos</NavLink>
         <NavLink to='/' class="switch" onClick={themeToggler} className='form'>{theme === 'light' ? 'to Dark Mode' : 'to Light Mode'}</NavLink>
      </div>
   )
}