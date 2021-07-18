import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import classes from '../style/Project.module.css'
import style2 from '../style/Modal.module.css'

import Modal from './portfolioComponents/Modal';
import ViewCodeButton from './portfolioComponents/ViewCodeButton'

import close from '../../src/images/icons/close.svg'
import arrow from '../../src/images/icons/arrow.svg'


export default function Project(props) {

    const [showModal, setShowModal] = useState(false);

    if (showModal) {
        return (
            <div>
                {/* opens modal and close button*/}
                <img className={style2.icon} src={close} alt="icon" onClick={() => setShowModal(false)} />
                <Modal image2={props.websiteImg} status={showModal} />
            </div>
        );
    }


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
                    <img className={classes.websiteImg} src={require('../images/' + props.websiteImg + '.jpg').default} alt='website' />
                    {/* <img className={classes.zoom} src={zoom} alt='zoom' /> */}
                </div>
            </div>
        </div>


    );
}