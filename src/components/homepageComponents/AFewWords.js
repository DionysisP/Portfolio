import style from '../../style/Homepage.module.css'

export default function AFewWords() {

    const currentDate = new Date().getFullYear();

    return (
        <div className="wrapper">
            <h1>A Few Words</h1>

            <p className={style.paragraph}>
                I was born and grew up in Larissa, Thessaly.
                I am {currentDate - 1995} years old and since I was in secondary school I had this passion with computers (especially Video Games).
                So I decided to study <span style={{'color' : 'black'}}>Web Design & Video Games Development</span> at IEK AKMI in Thessaloniki.
                What I do best is Front-end Development, Logo design and UX/UI. 
            </p>
            <p style={{ 'paddingTop': '100px' }} className={style.paragraph}>Find me on LinkedIn : <span><a style={{ "color": "#f81783" }} href="https://www.linkedin.com/in/dionysisp/" target="_blank" rel="noreferrer">Dionysis Patsiouras</a></span></p>
        </div>
    );

}