import download from './download-white.svg'
import style from '../fnst/Fnst.module.css'

export default function DownloadButton(props) {
    return (
        <a href={require('./icons/' + props.folder + '/' + props.file + props.filetype).default} download={props.file + props.filetype}>
            <button className={style.buttonTag}>{props.text}<img className={style.buttonImg} src={download} alt='download' /></button>
        </a >
    );
}