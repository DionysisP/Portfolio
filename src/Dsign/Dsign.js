import logo from '../images/favicon512.png'
import style from '../Dsign/Dsign.module.css'
import data from './icons.json'

import { useState } from 'react'
import DownloadButton from './DownloadButton'
import { Link } from 'react-router-dom'
import DonateButton from './DonateButton'

export default function Dsign() {

    const [activeElement, setActiveElement] = useState('homepage');

    return (

        <div className={style.wrapper}>
            {/* {console.log(activeElement)} */}
            <header>
                <img src={logo} alt='logo' />
                <h3>Powered by <Link to='/' ><span>Dionysis Patsiouras</span></Link></h3>
                <DonateButton />
            </header>
            <h4>Finest Design</h4>
            <h5>D-SIGN is a desing system. This page offers free icons referring mostly to web developers. Download as many as you want and support me by donating. </h5>
            <div className={style.container}>
            
                {data.map(item => {
                    
                    return (
                        <div key={item.id} className={activeElement === item.title ? style.itemSelected : style.indivImg} onClick={() => setActiveElement(item.title)}>
                            <img className={style.icon} src={require('./icons/' + item.image).default} alt='icon' />
                            <p className={style.imgTitle}>{item.title}</p>
                        </div>
                    );
                })}
            </div>
            

            <footer>
                <div className={style.btns}>
                    <DownloadButton text='SVG' file={activeElement} filetype='SVG' />
                    {/* <DownloadButton text='PNG' file={activeElement} filetype='.png' /> */}
                </div>
            </footer>
        </div >

    );
}