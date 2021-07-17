import classes from '../style/SomeOfMyWork.module.css';
import { Link } from 'react-router-dom';


export default function SomeOfMyWork(props) {

    return (
        <div className="wrapper">
            <h1>{props.title}</h1>
            <div className={classes.display}>
            </div>
         
            <Link to='/portfolio'>
                <button className={classes.portfolioButton}>Portfolio</button>
            </Link>
        </div>
    );
}