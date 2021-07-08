
import ShowProject from './portfolioComponents/ShowProject';
import Logos from './portfolioComponents/Logos';
import style from './style/Portfolio.module.css';

import mykonos from '../images/mykonos.png';
import mykonos2 from '../images/mykonos2.png';
import cvcDesk from '../images/cvc-desktop.jpg';
import cvcMob from '../images/cvc-mobile.jpg';
import dpDesk from '../images/dpDesktop.jpg';
import dpMob from '../images/dpMobile.jpg';
import at from './portfolioComponents/images/ATlogo.svg';
import elida from './portfolioComponents/images/elida.svg';

export default function Portfolio(props) {

    return (

        <div className="wrapper2" style={{ 'paddingTop': '64px' }}>

            <h1>{props.title}</h1>

            <h5 className={style.projectsTitle}>Web design</h5>
            <div className={style.allProjects}>
                <ShowProject title='Mykonos Instant Transfer' description='Nullam ut dui vulputate, semper lacus et, feugiat arcu. Morbi justo lacus, mollis at augue in, eleifend semper enim. Mauris ipsum tortor, convallis.' image={mykonos} image2={mykonos2} gitHub={'https://github.com/DionysisP/mykonosProject'} />
                <ShowProject title='Cvc' description='Nam interdum tempus lectus id blandit. Cras posuere convallis orci, nec tempus augue maximus sit amet. Pellentesque sit amet aliquam magna.' image={cvcDesk} image2={cvcMob} />
                <ShowProject title='DP Portfolio' description='Praesent faucibus purus vitae placerat lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.' image={dpDesk} image2={dpMob} />

            </div>


            <h5 className={style.projectsTitle}>Logo Design</h5>
            <div className={style.allLogos}>
                <Logos logo={at} />
                <Logos logo={elida} />
            </div>

        </div>
    );
}