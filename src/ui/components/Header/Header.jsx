import * as React from 'react';
import { Link } from "react-router-dom";
import "./Header.scss";

import Navigation from '../Navigation/Navigation';


const Header = () => (
        <div className='Header'>
             <Navigation />
        </div>
        );


export default Header;