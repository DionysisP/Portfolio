import style from '../style/Modal.module.css';

export default function Modal(props) {

    return (

        <div className={style.main}>
            <img className={style.logo} src={props.image} alt='sample' />
            <p>{props.desc}</p>
        </div>
    );
}