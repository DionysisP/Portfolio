
import style from '../../style/MainButton.module.css'

export default function MainButton(props){
    return(
        <button className={style.btn}>{props.text}</button>
    );
}