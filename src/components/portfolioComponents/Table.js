import style from '../style/About.module.css';
export default function Table(props){
    return(
        <div className="wrapper2">
        <div className={style.container}>

                <div className={style.div1}>
                    <img className={style.icons} src={props.image} alt="Icons" />
                </div>
            
                <div className={style.div2}>
                    <p className={style.title}>{props.title}</p>
                </div>

            </div>

            
        </div>
    );
}