import React, { useState } from 'react';

import DisplayWebsites from './portfolioComponents/DisplayWebsites';
import DisplayLogos from './portfolioComponents/DisplayLogos';

import style from './style/Portfolio.module.css';


export default function Portfolio() {

    const [active, setActive] = useState(2);

    var currentlyDisplayed

    switch (active) {
        case 1:
            currentlyDisplayed = <DisplayWebsites />
            break;
        case 2:
            currentlyDisplayed = <DisplayLogos />
            break;
        default:
            break;
    }


    return (
        <div className="wrapper2" style={{ 'paddingTop': '64px' }}>
            <h1>Portfolio</h1>
            <ul className={style.projectList}>
                <li onClick={() => setActive(1)} className={active === 1 ? style.active : ''}>Web Design</li>
                <li onClick={() => setActive(2)} className={active === 2 ? style.active : ''}>Logos</li>
            </ul>
            {currentlyDisplayed}
        </div>
    );
}