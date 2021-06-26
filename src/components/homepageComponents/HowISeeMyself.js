import classes from '../style/AFewWords.module.css';
import classes2 from '../style/HowISeeMyself.module.css';
export default function HowISeeMyself(props){

    return(
        <div className="wrapper" style={{'background':'#384264'}}>
            <h1 style={{'color':'white'}}>{props.title}</h1>
            <p style={{'color': 'white', 'textAlign' : 'center'}}className={classes.paragraph}>I would describe myself as Front-end Developer & UX Designer. Althought I’ve practised on Back-end as well.</p>
        
            <div className={classes2.allbars}>

                <div className={classes2.bar}>
                    <label>Front - End</label>
                    <div className={classes2.progress}>
                        <div style={{'width' : '80%'}} className={classes2.progressBar} ></div>
                    </div>
                </div>

                <div className={classes2.bar}>
                    <label>UX Design</label>
                    <div className={classes2.progress}>
                        <div style={{'width' : '80%'}} className={classes2.progressBar} ></div>
                    </div>
                </div>

                <div className={classes2.bar}>
                    <label>Back - End</label>
                    <div className={classes2.progress}>
                        <div style={{'width' : '70%'}} className={classes2.progressBar} ></div>
                    </div>
                </div>

                <div className={classes2.bar}>
                    <label>Logo - Graphics</label>
                    <div className={classes2.progress}>
                        <div style={{'width' : '75%'}} className={classes2.progressBar} ></div>
                    </div>
                </div>


            </div>
        </div>
    );
}