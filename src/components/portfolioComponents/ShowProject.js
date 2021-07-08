
import style from '../style/ShowProject.module.css';
import desktop from './images/desktop.svg';
import mobile from './images/mobile.svg';

export default function ShowProject(props) {
    return (
        <div className={style.singleProject}>

            <img className={style.vectorDesktop} src={desktop} />
            
            <img className={style.projImg} src={props.image} />
            
            <img className={style.vectorMobile} src={mobile} />
            
            <img className={style.projImg2} src={props.image2} />
            
            <h4 className={style.projectTitle}>{props.title}</h4>
            <p className={style.projectDesc}>{props.description}</p>
        </div>
    )

}