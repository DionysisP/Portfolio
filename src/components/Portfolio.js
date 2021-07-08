
import ShowProject from './portfolioComponents/ShowProject';
import style from './style/Portfolio.module.css';

import mykonos from '../images/mykonos.png';
import mykonos2 from '../images/mykonos2.png';

export default function Portfolio(props) {

    return (

        <div className="wrapper2" style={{ 'paddingTop': '64px' }}>

            <h1>{props.title}</h1>
            <div className={style.allProjects}>
                <ShowProject title='Mykonos Instant Transfer' description='Nullam ut dui vulputate, semper lacus et, feugiat arcu. Morbi justo lacus, mollis at augue in, eleifend semper enim. Mauris ipsum tortor, convallis.' image={mykonos} image2={mykonos2}/>
                <ShowProject title='Cinema' description='Nam interdum tempus lectus id blandit. Cras posuere convallis orci, nec tempus augue maximus sit amet. Pellentesque sit amet aliquam magna.' image={mykonos} />
                <ShowProject title='CVC' description='Praesent faucibus purus vitae placerat lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.' image={mykonos} />
        
            </div>
        </div>
    );
}