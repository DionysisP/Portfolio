import logo from '../images/favicon512.png'
import style from '../Dsign/Dsign.module.css'
import data from './icons.json'

import { useState } from 'react'
import DownloadButton from './DownloadButton'
import { Link } from 'react-router-dom'

export default function Dsign() {

    const [activeElement, setActiveElement] = useState('homepage');

    return (

        <div className={style.wrapper}>

            <header>
                <img src={logo} alt='logo' />
                <h3>Powered by <Link to='/' ><span>Dionysis Patsiouras</span></Link></h3>
                <form style={{ 'position': 'fixed', 'right': '5vw' }} action="https://www.paypal.com/donate" method="post" target="_blank">
                    <input className={style.donate} type="hidden" name="business" value="dion.patsiouras@gmail.com" />
                    <input className={style.donate} type="hidden" name="no_recurring" value="0" />
                    <input className={style.donate} type="hidden" name="item_name" value="Thanks for supporting me! More icons coming soon!" />
                    <input className={style.donate} type="hidden" name="currency_code" value="EUR" />
                    <input className={style.donate} type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />

                </form>
            </header>
            <h5>All icons below are free to use by anyone. Donate and support me!</h5>
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
                    <DownloadButton text='SVG' file={activeElement} filetype='.svg' />
                    <DownloadButton text='PNG' file={activeElement} filetype='.png' />
                </div>
            </footer>
        </div >

    );
}