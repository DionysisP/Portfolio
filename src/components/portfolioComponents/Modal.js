import style from '../../style/Modal.module.css'
import style3 from '../../style/Modal.module.css'
import close from '../../images/icons/close.svg'

export default function Modal(props) {

    return (
        <div className={style.main}>
            <img src={close} className={style3.icon} alt='close button' onClick={props.closeModal}/>
            <img className={style.logo} src={require('../../images/logos/' + props.image + '.svg').default }alt='' />
            <img className={style.website} src={props.image2} alt='' />
            <p className={style.logoDesc}>{props.description}</p>
        </div>
    );
}