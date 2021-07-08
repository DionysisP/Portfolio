import style from '../style/Logos.module.css';

export default function Logos(props) {
    return (
        
            <img className={style.logo} src={props.logo} alt='logo' />
    );
}