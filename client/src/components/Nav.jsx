import React from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import SearchBar from './SearchBar.jsx';
import MainNavigation from './MainNavigation.jsx';

function Nav({ onSearch, themeToggler, theme }) {
	return (
		<nav>
			<div className='container'>
				{/* <button class="switch" onClick={themeToggler} className='form'>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</button> */}

				{/* <div class="theme-container">
					<p>{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</p>
					<label class="switch" for="checkbox">
						<input type="checkbox" id="checkbox" onChange={themeToggler}/>
						<div class="slider round"></div>
					</label>
				</div> */}

				<h1 className='brand'>
					<Link to='/'>{'Weather App'}</Link>
				</h1>
				<MainNavigation />
				<SearchBar onSearch={onSearch} />
			</div>
		</nav>
	);
}

export default Nav;
