import download from './download-white.svg'
import style from '../Dsign/Dsign.module.css'

export default function DownloadButton(props) {
    return (
        <a href={require('./icons/' + props.folder + '/' + props.file + props.filetype).default} download={props.file}>
            <button className={style.buttonTag}>{props.text}<img className={style.buttonImg} src={download} alt='download' /></button>
        </a >
    );
}