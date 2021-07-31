// import { Link } from 'react-router-dom'

import data from '../../json/projects.json'

import ViewCodeButton from './ViewCodeButton'

import style from '../../style/Portfolio.module.css'
import style2 from '../../style/DisplayWebsites.module.css'

import desktop from '../../images/desktop.svg'
import mobile from '../../images/mobile.svg'

import MainButton from './MainButton'

export default function DisplayWebsites() {

 
    return (
        <div className={style.allProjects}>


            {data.map(show => {

                const showTechs = []
                
                for (let tech of show.technologies){
                    showTechs.push(<img key={tech} src={require('../../images/icons/' + tech).default} style={{'width':'45px'}} alt=''/>)
                }

                return (
                    <div key={show.id} className={style2.singleProject}>
                        <img className={style2.vectorDesktop} src={desktop} alt='Desktop Vector' />
                        <img className={style2.projImg} src={require('../../images/' + show.desktop_image).default} alt='Project' />

                        <img className={style2.vectorMobile} src={mobile} alt='Mobile Vector' />
                        <img className={style2.projImg2} src={require('../../images/' + show.mobile_image).default} alt='Project' />

                        <h4 className={style2.projectTitle}>{show.title}</h4>
                        <p className={style2.projectDesc}>{show.description}</p>

                        {showTechs}

                        <div className={style2.buttons}>
                            <a href={show.url} target="_blank" rel="noreferrer"><MainButton text='Visit Website' /></a>
                            <ViewCodeButton url={show.github} />
                        </div>
                    </div>


                );

            })}


        </div>
    );
}