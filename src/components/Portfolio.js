
import ShowProject from './portfolioComponents/ShowProject';
import style from './style/Portfolio.module.css';
import cvc from '../images/cvc.png';
import cinema from '../images/cinema.png';
export default function Portfolio(props) {

    return (

        <div className="wrapper2" style={{ 'paddingTop': '64px' }}>

            <h1>{props.title}</h1>
            <div className={style.allProjects}>
                <ShowProject title='CVC' description='Nullam ut dui vulputate, semper lacus et, feugiat arcu. Morbi justo lacus, mollis at augue in, eleifend semper enim. Mauris ipsum tortor, convallis.' image={cvc} />
                <ShowProject title='Cinema' description='Nam interdum tempus lectus id blandit. Cras posuere convallis orci, nec tempus augue maximus sit amet. Pellentesque sit amet aliquam magna.' image={cinema} />
                <ShowProject title='CVC' description='Praesent faucibus purus vitae placerat lobortis. Interdum et malesuada fames ac ante ipsum primis in faucibus.' image={cvc} />
        
            </div>
        </div>
    );
}