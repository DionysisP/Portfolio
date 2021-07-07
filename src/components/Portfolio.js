
import ShowProject from './portfolioComponents/ShowProject';
import style from './style/Portfolio.module.css';
import cvc from '../images/cvc.png';
import cinema from '../images/cinema.png';
export default function Portfolio(props) {

    return (

        <div className="wrapper2" style={{ 'paddingTop': '64px' }}>

            <h1>{props.title}</h1>
            <div className={style.allProjects}>
                <ShowProject title='CVC' description='elajdsadas' image={cvc} />
                <ShowProject title='Cinema' description='sdasda' image={cinema} />
            </div>
        </div>
    );
}