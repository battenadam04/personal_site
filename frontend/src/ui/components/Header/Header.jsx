import * as React from 'react';
import { Link } from "react-router-dom";
import "./Header.scss";

import Navigation from '../Navigation/Navigation';


const Header = () => (
        <div className='Header uk-position-z-index'>
             <Navigation />
        </div>
        );


export default Header;