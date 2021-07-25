import download from './icons/download-white.svg'
import style from '../Dsign/Dsign.module.css'

export default function DownloadButton(props) {


    return (
        <a href={require('./icons/' + props.file + '-black' + props.filetype).default} download>
            <button className={style.buttonTag}>{props.text}<img className={style.buttonImg} src={download} alt='download' /></button>
        </a>
    );
}