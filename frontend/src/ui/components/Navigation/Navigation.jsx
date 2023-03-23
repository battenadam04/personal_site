import * as React from 'react';
import { useState, useRef } from 'react';

import { NavLink as Link } from 'react-router-dom';

import "./Navigation.scss";


const Navigation = () => {

const links = [
                            <Link to={"Home"} className={({ isActive }) => isActive ? 'active' : 'inactive'}>Home</Link>,
                            <Link to={"About"} className={({ isActive }) => isActive ? 'active' : 'inactive'}>About</Link>,
                            <Link to={"Contact"} className={({ isActive }) => isActive ? 'active' : 'inactive'}>Contact</Link>,
                            <Link to={"Blog"} className={({ isActive }) => isActive ? 'active' : 'inactive'}>Blog</Link>,
                            <Link to={"Projects"} className={({ isActive }) => isActive ? 'active' : 'inactive'}>Projects</Link>,
]

    return (
      <nav>
                        <div className="main-nav">
                        {links.map(link => link)}
                        </div>
                        <div className="a-header">
                        		<input type="checkbox" name="main-nav" id="main-nav" className="burger-check" />
                        		<label for="main-nav" className="burger menu"><span></span></label>
                        		<div className="burger-links">
                        			{links.map(link => link)}
                        			</div>
                        </div>

      </nav>
        );
}
export default Navigation;