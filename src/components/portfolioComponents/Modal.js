import style from '../style/Modal.module.css';

export default function Modal(props) {

    return (

        <div className={style.main}>
            {/*show logo if available*/}
            <img className={style.logo} src={props.image} alt='' />
            {/*show website if available*/}
            <img className={style.website} src={props.image2} alt='' />
            <p className={style.logoDesc}>{props.desc}</p>
        </div>
    );
}