import React from 'react';
import classes from './style/ShowData.module.css';
import arrow from '../images/arrow.svg';
export default function ShowData(props){


    return(
        
        <div className="wrapper2" style={{'paddingTop' : '64px'}}>
            
            

            <h1>{props.title}</h1>
            <div className={classes.back}><img src={arrow} alt='arrow' /><a href='/portfolio'> Back to Projects</a></div>
            <div className={classes.mainContainer}>
            
                <div className={classes.container1}> 
                    
                    <p className={classes.desc}>{props.desc}</p>

                    <p className={classes.palette}>Color Palette</p>

                    <div className={classes.colors}>
                        <div className={classes.shape} style={{ 'backgroundColor': '#' + props.color1 }}></div>
                        <div className={classes.shape} style={{ 'backgroundColor': '#' + props.color2 }}></div>
                        <div className={classes.shape2} style={{ 'backgroundColor': '#' + props.color3}}></div>
                        <div className={classes.shape} style={{ 'backgroundColor': '#' + props.color4 }}></div>
                    </div>
                </div>


                <div className={classes.container2}>
                    <img src={props.img} alt='website' />
                </div>
                {/* <h1>{props.match.params.id}</h1> */}
            </div>
        </div>
    );
}