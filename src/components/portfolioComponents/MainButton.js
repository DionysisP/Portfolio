
import style from '../../style/MainButton.module.css'

export default function MainButton(props){
    return(
        <a href={props.url} target="_blank" rel="noreferrer"> 
            <button className={style.btn}>{props.text}</button>
        </a>
    );
}