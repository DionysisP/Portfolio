import style from '../../style/Homepage.module.css'
import { Link } from 'react-router-dom';
import MainButton from '../portfolioComponents/MainButton';

export default function SomeOfMyWork(props) {

    return (
        <div className="wrapper">
            <h1>Some Of My Work</h1>
            
            <div className={style.display}>
            </div>
         
            <Link to='/portfolio'>
                <MainButton text='Portfolio' />
            </Link>
        </div>
    );
}