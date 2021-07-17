import classes from '../style/SomeOfMyWork.module.css';
import { Link } from 'react-router-dom';

<<<<<<< HEAD

export default function SomeOfMyWork(props) {
=======
export default function SomeOfMyWork() {
>>>>>>> dev

    return (
        <div className="wrapper">
            <h1>Some Of My Work</h1>
            
            <div className={classes.display}>
            </div>
<<<<<<< HEAD
         
=======

>>>>>>> dev
            <Link to='/portfolio'>
                <button className={classes.portfolioButton}>Portfolio</button>
            </Link>
        </div>
    );
}