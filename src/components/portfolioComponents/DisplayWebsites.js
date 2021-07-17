import style from '../style/Portfolio.module.css'
import ShowProject from './ShowProject';

import mykonos from '../../images/mykonos.jpg'
import mykonos2 from '../../images/mykonos2.jpg'

import dpDesk from '../../images/dpDesktop.jpg'
import dpMob from '../../images/dpMobile.jpg'



export default function DisplayWebsites(){
    return(
        <div className={style.allProjects}>
                <ShowProject
                    id='1'
                    title='Mykonos Instant Transfer'
                    description='A Single page application I designed and developed in a couple of hours.I used a Wordpress-like theme and rushed it using public domain images.'
                    websiteImage={mykonos}
                    websiteImage2={mykonos2}
                    gitHub={'https://github.com/DionysisP/mykonosProject'}
                />
                <ShowProject
                    id='2'
                    title='My Portfolio'
                    description='The very page you are looking right now. This is my first attempt of using React. I designed the layout in Figma.'
                    websiteImage={dpDesk}
                    websiteImage2={dpMob}
                    gitHub={'https://github.com/DionysisP/Portfolio'}
                />

            </div>
    );
}