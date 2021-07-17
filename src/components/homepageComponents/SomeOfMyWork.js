import classes from '../style/SomeOfMyWork.module.css';
import { Link } from 'react-router-dom';


import ShowProject from '../portfolioComponents/ShowProject';

import mykonos from '../../images/mykonos.jpg';



export default function SomeOfMyWork(props) {

    return (
        <div className="wrapper">
            <h1>{props.title}</h1>
            <div className={classes.display}>
         
            </div>
            <ShowProject
                    id='1'
                    title='Mykonos Instant Transfer'
                    description='A Single page application I designed and developed in a couple of hours.I used a Wordpress-like theme and rushed it using public domain images.'
                    websiteImage={mykonos}
                    websiteImage2={mykonos}
                    gitHub={'https://github.com/DionysisP/mykonosProject'}
                />
            <Link to='/portfolio'>
                <button className={classes.portfolioButton}>Portfolio</button>
            </Link>
        </div>
    );
}