
import style from '../style/ShowProject.module.css';

export default function ShowProject(props) {
    return (
        <div className={style.singleProject}>
            <img src={props.image} alt='Project' />
            <h4 className={style.projectTitle}>{props.title}</h4>
            <p className={style.projectDesc}>{props.description}</p>
        </div>
    )

}