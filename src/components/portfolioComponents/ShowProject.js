import ViewCodeButton from './ViewCodeButton';
import style from '../style/ShowProject.module.css';

import desktop from '../../images/desktop.svg'
import mobile from '../../images/mobile.svg'


import { Link } from 'react-router-dom';

export default function ShowProject(props) {
    return (
        <div className={style.singleProject}>
            <img className={style.vectorDesktop} src={desktop} alt='Desktop Vector' />
            <img className={style.projImg} src={props.websiteImage} alt='Project' />

            <img className={style.vectorMobile} src={mobile} alt='Mobile Vector' />
            <img className={style.projImg2} src={props.websiteImage2} alt='Project' />

            <h4 className={style.projectTitle}>{props.title}</h4>
            <p className={style.projectDesc}>{props.description}</p>

            <div className={style.buttons}>
                <Link to={'/project/' + props.id}>
                    <button className={style.btn}>Preview</button>
                </Link>
                <ViewCodeButton url={props.gitHub} />
            </div>
        </div>
    )

}