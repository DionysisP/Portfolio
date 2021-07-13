
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
                    description='A Single page application I designed and developed in a couple of hours.I used a Wordpress-like theme and rushed it using public domain images.'
                    websiteImage={mykonos}
                    websiteImage2={mykonos2}
                    gitHub={'https://github.com/DionysisP/mykonosProject'}
                />
                {/*
                <ShowProject
                    id='2'
                    title='Imagym'
                    description='Imagym initialy developed in Wordpress by someone else. I decided to re-make it in JQuery for optimization purposes'
                    websiteImage={imagym}
                    websiteImage2={imagym}
                    gitHub={'https://github.com/DionysisP/gym_website'}
                />
                    */}
                <ShowProject
                    id='2'
                    title='My Portfolio'
                    description='The very page you are looking right now. This is my first attempt of using React. I designed the layout in Figma.'
                    websiteImage={dpDesk}
                    websiteImage2={dpMob}
                />

            </div>


            <h5 style={{'paddingTop' : '50px'}} className={style.projectsTitle}>Logo Design</h5>
            <div className={style.allLogos}>
                <Logos logo={webAtClass} desc='Web@Class is an online classroom "simulation".' />
                <Logos logo={elida} desc='Navigation gauntlet for visually impaired people' />
                <Logos logo={eveningJam} desc='Evening Jam is an Jazz/Blues band from Larisa' />
                <Logos logo={at} desc='Alexanter Tsapo Logo' />
                <Logos logo={bell} desc='While fooling around on Adobe Illustrator, I suddenly came up with this logo. Cannot really tell what this is about but it reminds me a bell in a strange way. ' />
                <Logos logo={martini} desc='Greek music band from Thesaloniki'/>
            </div>

        </div>

        

    );
}