import classes from '../style/SomeOfMyWork.module.css';

import appimg from './images/app1.jpg';
import appimg2 from './images/desktop.jpg';

import {Link} from 'react-router-dom';

export default function SomeOfMyWork(props){

    return(
        <div className="wrapper">
            <h1>{props.title}</h1>
            <div className={classes.display}>
                <img className={classes.firstPhoto} src={appimg} alt="Project"/>
                <img className={classes.secondPhoto} src={appimg2} alt="Project"/>
            </div>
            <Link to='/portfolio'>
            <button className={classes.portfolioButton}>Portfolio</button>
            </Link>
        </div>
    );
}