import download from './download-white.svg'
import style from '../Dsign/Dsign.module.css'

export default function DownloadButton(props) {


    return (
        <a href={require('./icons/' + props.file + props.filetype + '.rar').default} download>
            <button className={style.buttonTag}>{props.text}<img className={style.buttonImg} src={download} alt='download' /></button>
        </a >
    );
}