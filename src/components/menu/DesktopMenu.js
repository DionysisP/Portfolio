import React from 'react';
import {Link} from 'react-router-dom';
import classes from './Navigation.module.css';


export default function DesktopMenu(){

    return(
    <nav className={classes.topBar}>
        <ul>
            <li>
                <Link to='/'>Homepage</Link>
            </li>

            <li>
                <Link to='/about'>About</Link>
            </li>

            <li>
                <Link to='/portfolio'>Portfolio</Link>
            </li>

            <li>
                <Link to='/contact'>Contact</Link>
            </li>   
        </ul>
    </nav> 
    );

}