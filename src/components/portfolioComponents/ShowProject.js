import classes from '../style/Portfolio.module.css';

export default function ShowProject(props){
    return(
        <div className={classes.individualProj}>
        <img src={props.image} alt='Project' />
        <h4 className={classes.projectTitle}>{props.title}</h4>
        <p className={classes.projectDesc}>{props.description}</p>
    </div>
    )

}