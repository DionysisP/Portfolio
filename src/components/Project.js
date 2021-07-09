import React from 'react';
import classes from './style/ShowData.module.css';
import arrow from '../images/arrow.svg';
import { Link } from 'react-router-dom';
import ViewCodeButton from './portfolioComponents/ViewCodeButton';


export default function ShowData(props) {


    return (

        <div className="wrapper2" style={{ 'paddingTop': '64px' }}>


            <h1>{props.title}</h1>
            <div className={classes.back}><img src={arrow} alt='arrow' /><Link to={'/Portfolio'}> Back to Projects</Link></div>
            <div className={classes.mainContainer}>

                <div className={classes.container1}>
                    <a href={props.url} target="_blank" rel="noreferrer">{props.url}</a>
                    <p className={classes.desc}>{props.desc}</p>


                    <p className={classes.tech}>{'Technologies : ' + props.technologies}</p>
                  
                    <ViewCodeButton url={props.git}/>


                </div>


                <div className={classes.container2}>
                    <img src={props.img} alt='website' />
                </div>
                {/* <h1>{props.match.params.id}</h1> */}
            </div>
        </div>


    );
}