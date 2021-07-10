import style from '../style/Modal.module.css';

export default function Modal(props){
    return(
        <div className={style.main}>
            <img className={style.logo} src={props.image} alt='logo'/>
            <p>{props.desc}</p>
        </div>
    );
}