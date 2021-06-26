import classes from './style/Portfolio.module.css';
import Project from './portfolioComponents/Project';

import cvc from '../images/cvc.png';
import cinema from '../images/cinema.png';
import lyrics from '../images/lyrics.jpg';

export default function Portfolio(props){
    return(
        <div className="wrapper2" style={{'paddingTop' : '64px'}}>
            <h1>{props.title}</h1>
            <div className={classes.projects}>             
                <Project id='1' projectTitle='Covid Vaccine Company' image={cvc} projectDesc='Quisque molestie, est laoreet congue consectetur, turpis ligula ornare risus, ut auctor ex felis at nulla.'/>
                <Project id='2' projectTitle='Melbourne Theater' image={cinema} projectDesc='Turpis ligula ornare risus, ut auctor ex felis at nulla.'/>

            </div>
            <div className={classes.projects}>             
                <Project id='1' projectTitle='Covid Vaccine Company' image={cvc} projectDesc='Quisque molestie, est laoreet congue consectetur, turpis ligula ornare risus, ut auctor ex felis at nulla.'/>
                <Project id='2' projectTitle='Melbourne Theater' image={cinema} projectDesc='Turpis ligula ornare risus, ut auctor ex felis at nulla.'/>

            </div>
            
        </div>
    );  
}