import style from '../style/About.module.css';
export default function Insert(props){
    return(
        <section>
            <p className={style.year}>{props.year}</p>
            <div className={style.contain} style={{'marginTop' : '-1px'}}>
            <p className={style.edu}>{props.title}</p>
            <p className={style.description}>{props.description}</p>
            </div>
        </section>
    );
}