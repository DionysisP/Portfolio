import classes from './style/Portfolio.module.css';
import Project from './portfolioComponents/Project';

import cvc from '../images/cvc.png';
import cinema from '../images/cinema.png';
import lyrics from '../images/lyrics.jpg';
import data from './projects.json';

export default function Portfolio(props) {



    return (

        <div className="wrapper2" style={{ 'paddingTop': '64px' }}>
            <h1>{props.title}</h1>
            <div className={classes.projects}>
                {data.map(proj => (
                    <Project id={proj.id} projectTitle={proj.title} image={proj.image} projectDesc={proj.description} />
                ))}

            </div>


        </div>
    );
}