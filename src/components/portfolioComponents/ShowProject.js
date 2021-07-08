
import style from '../style/ShowProject.module.css';
import desktop from './images/desktop.svg';
import mobile from './images/mobile.svg';

export default function ShowProject(props) {
    return (
        <div className={style.singleProject}>

            <img className={style.vectorDesktop} src={desktop} alt='Desktop Vector'/>
            
            <img className={style.projImg} src={props.image} alt='Project' />
            
            <img className={style.vectorMobile} src={mobile} alt='Mobile Vector' />
            
            <img className={style.projImg2} src={props.image2} alt='Project' />
            
            <h4 className={style.projectTitle}>{props.title}</h4>
            <p className={style.projectDesc}>{props.description}</p>
        </div>
    )

}