
import style from '../style/Portfolio.module.css'
import Logos from '../portfolioComponents/Logos'

import at from '../portfolioComponents/images/ATlogo.svg'
import elida from '../portfolioComponents/images/elida.svg'
import webAtClass from '../portfolioComponents/images/webAtClass.svg'
import eveningJam from '../portfolioComponents/images/eveningjam.svg'
import bell from '../portfolioComponents/images/bell.svg'
import martini from '../portfolioComponents/images/martini.svg'


export default function DisplayLogos(){
    return(
        <div className={style.allLogos}>
            <Logos logo={webAtClass} desc='Web@Class is an online classroom "simulation".' />
            <Logos logo={elida} desc='Navigation gauntlet for visually impaired people' />
            <Logos logo={eveningJam} desc='Evening Jam is an Jazz/Blues band from Larisa' />
            <Logos logo={at} desc='Alexanter Tsapo Logo' />
            <Logos logo={bell} desc='While fooling around on Adobe Illustrator, I suddenly came up with this logo. Cannot really tell what this is about but it reminds me a bell in a strange way. ' />
            <Logos logo={martini} desc='Greek music band from Thesaloniki' />
        </div>
    );
}