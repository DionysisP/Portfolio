
import ShowProject from './portfolioComponents/ShowProject';
import Logos from './portfolioComponents/Logos';
import style from './style/Portfolio.module.css';

import mykonos from '../images/mykonos.png';
import mykonos2 from '../images/mykonos2.png';
import imagym from '../images/imagym.png';


import dpDesk from '../images/dpDesktop.jpg';
import dpMob from '../images/dpMobile.jpg';

import at from './portfolioComponents/images/ATlogo.svg';
import elida from './portfolioComponents/images/elida.svg';
import webAtClass from './portfolioComponents/images/webAtClass.svg';
import eveningJam from './portfolioComponents/images/eveningjam.svg';
import bell from './portfolioComponents/images/bell.svg';
import martini from './portfolioComponents/images/martini.svg';
import React from 'react';


export default function Portfolio(props) {

    return (

        <div className="wrapper2" style={{ 'paddingTop': '64px' }}>

            <h1>{props.title}</h1>

            <h5 className={style.projectsTitle}>Web design</h5>
            <div className={style.allProjects}>

                <ShowProject
                    id='1'
                    title='Mykonos Instant Transfer'
                    description='A Single page application I designed and developed in a couple of hours'
                    image={mykonos}
                    image2={mykonos2}
                    gitHub={'https://github.com/DionysisP/mykonosProject'}
                />

                <ShowProject
                    id='2'
                    title='Imagym'
                    description='Imagym initialy developed in Wordpress by someone else. I decided to re-make it in JQuery for optimization purposes'
                    image={imagym}
                    image2={imagym}
                    gitHub={'https://github.com/DionysisP/gym_website'}
                />

                <ShowProject
                    id='3'
                    title='DP Portfolio'
                    description='My personal online portfolio you are currently seeing. Designed in Figma and developed with React'
                    image={dpDesk}
                    image2={dpMob}
                />

            </div>


            <h5 className={style.projectsTitle}>Logo Design</h5>
            <div className={style.allLogos}>
                <Logos logo={webAtClass} />
                <Logos logo={elida} />
                <Logos logo={eveningJam} />
                <Logos logo={at} />
                <Logos logo={bell} />
                <Logos logo={martini} />
            </div>

        </div>

    );
}