import style from '../style/Homepage.module.css';
import { Link } from 'react-router-dom';


export default function SomeOfMyWork(props) {

    return (
        <div className="wrapper">
            <h1>Some Of My Work</h1>
            
            <div className={style.display}>
            </div>
         
            <Link to='/portfolio'>
                <button className={style.portfolioButton}>Portfolio</button>
            </Link>
        </div>
    );
}