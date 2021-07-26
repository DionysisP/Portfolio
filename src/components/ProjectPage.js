import React from 'react'
import { Link } from 'react-router-dom'

import classes from '../style/ProjectPage.module.css'

import ViewCodeButton from './portfolioComponents/ViewCodeButton'

import arrow from '../../src/images/icons/arrow.svg'


export default function ProjectPage(props) {


    return (

        <div className="wrapper2" style={{ 'paddingTop': '64px' }}>

            <h1 className={classes.title}>{props.title}</h1>
            <div className={classes.back}><img src={arrow} alt='arrow' /><Link to={'/Portfolio'}> Back to Projects</Link></div>
            <div className={classes.mainContainer}>

                <div className={classes.container1}>
                    <a href={props.url} target="_blank" rel="noreferrer">{props.url}</a>
                    <p className={classes.desc}>{props.desc}</p>
                    <p className={classes.tech}>{'Technologies : ' + props.technologies}</p>
                    <ViewCodeButton url={props.git} />
                </div>

                <div className={classes.container2} >
                    <img className={classes.websiteImg} src={require('../images/' + props.websiteImg).default} alt='website' />
                </div>
            </div>
        </div>


    );
}