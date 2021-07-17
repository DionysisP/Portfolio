import classes from './style/Homepage.module.css';
import portrait from '../images/portrait.png';

import AFewWords from './homepageComponents/AFewWords';
import HowISeeMyself from './homepageComponents/HowISeeMyself';
import SomeOfMyWork from './homepageComponents/SomeOfMyWork';
import React, { useState } from 'react';


export default function Homepage() {

    const [showImage, setShowImage] = useState(false);

    if (showImage) {
        var popUp =
            <div className={classes.popUp}>
                <div className={classes.cloud}>
                    <h3>Hi!</h3>
                </div>
                <div className={classes.tail}></div>
            </div>
    }

    return (
        <React.Fragment>
            <div className={classes.container}>

                <div onMouseOver={() => setShowImage(true)} onMouseLeave={() => setShowImage(false)}>
                    <img className={classes.portrait} src={portrait} alt="Portrait" />
                </div>
                {/*
                {popUp}
                 */}
                <p>Hello!<br />My name is <span>Dionysis Patsiouras</span>, I am passionate </p>
                <h1 className={classes.myTitle} >DEVELOPER / DESIGNER</h1>

                <p className={classes.scrollDown}>Scroll down to see more</p>
                <p className={classes.swipeDown}>Swipe down to see more</p>
                <svg width="8" height="28" viewBox="0 0 8 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M3.64645 27.3536C3.84171 27.5488 4.15829 27.5488 4.35355 27.3536L7.53553 24.1716C7.7308 23.9763 7.7308 23.6597 7.53553 23.4645C7.34027 23.2692 7.02369 23.2692 6.82843 23.4645L4 26.2929L1.17157 23.4645C0.976312 23.2692 0.659729 23.2692 0.464467 23.4645C0.269205 23.6597 0.269205 23.9763 0.464467 24.1716L3.64645 27.3536ZM3.5 -1.88549e-06L3.5 27L4.5 27L4.5 -1.9292e-06L3.5 -1.88549e-06Z" fill="white" />
                </svg>

            </div>
            <AFewWords title='A few words' />
            <HowISeeMyself title='How I see myself' />
            <SomeOfMyWork title='Some of my work' />

        </React.Fragment>
    );

}