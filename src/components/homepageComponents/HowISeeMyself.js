import style from '../style/Homepage.module.css';

export default function HowISeeMyself(){

    return(
        <div className="wrapper" style={{'background':'#384264'}}>
            <h1 style={{'color':'white'}}>How I See Myself</h1>
            <p style={{'color': 'white', 'textAlign' : 'center'}}className={style.paragraph}>
                Althought I call myself a Front-end Developer I am also interested in Logo Design, 3D Modeling and even Back-end.</p>

            <div className={style.allbars}>

                <div className={style.bar}>
                    <label className={style.skill}>Front - End</label>
                    <div className={style.progress}>
                        <div style={{'width' : '80%'}} className={style.progressBar} ></div>
                    </div>
                </div>

                <div className={style.bar}>
                    <label className={style.skill} >UX / UI</label>
                    <div className={style.progress}>
                        <div style={{'width' : '80%'}} className={style.progressBar} ></div>
                    </div>
                </div>

                <div className={style.bar}>
                    <label className={style.skill} >Back - End</label>
                    <div className={style.progress}>
                        <div style={{'width' : '70%'}} className={style.progressBar} ></div>
                    </div>
                </div>

                <div className={style.bar}>
                    <label className={style.skill}>Logo - Graphics</label>
                    <div className={style.progress}>
                        <div style={{'width' : '75%'}} className={style.progressBar} ></div>
                    </div>
                </div>

                <div className={style.bar}>
                    <label className={style.skill}>3D Modeling</label>
                    <div className={style.progress}>
                        <div style={{'width' : '60%'}} className={style.progressBar} ></div>
                    </div>
                </div>


            </div>
        </div>
    );
}