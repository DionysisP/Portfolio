
import classes from '../style/AFewWords.module.css';

export default function AFewWords(props){

    return(
        <div className="wrapper">
            <h1>{props.title}</h1>
            <p className={classes.paragraph}>I am 26 years old. My hometown is Larisa, Greece. I studied Web - Desing & Video Games Development 
            in Thessaloniki for 2 years. I am very passionate and I study and work very hard every day.
            I like learn new things and become better day by day.</p> 
            <p style={{'paddingTop' : '66px'}} className={classes.paragraph}>Find me on LinkedIn : <span><a style={{"color" :"#f81783"}} href="https://www.linkedin.com/in/dionysis-patsiouras-a10415213/" target="_blank" rel="noreferrer">Dionysis Patsiouras</a></span></p>
        </div>
    );

}