import style from '../style/Modal.module.css';

export default function Modal(props) {

    return (

        <div className={style.main}>
            {/*show logo if available*/}
            <img className={style.logo} src={require('./images/' + props.image + '.svg').default }alt='' />
            {/*show website if available*/}
            <img className={style.website} src={props.image2} alt='' />
            <p className={style.logoDesc}>{props.description}</p>
            <h1>{props.p}</h1>
        </div>
    );
}