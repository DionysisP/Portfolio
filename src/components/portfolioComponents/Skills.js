import classes from '../style/Skills.module.css';

export default function Skills(){
    return(



        <div className={classes.list}>
            <ul>
                <li className={classes.listTitle}>Front - End</li>
                <li>HTML5</li>
                <li>CSS</li>
                <li>SASS</li>
                <li>Bootstrap</li>
                <li>JavaScript</li>
                <li>JQuery</li>
                <li>React</li>
                <li>Wordpress</li>
            </ul>

            <ul>
                <li className={classes.listTitle}>Back - End</li>
                <li>PHP</li>
                <li>Laravel</li>
                <li>MySQL</li>
            </ul>

            <ul>
                <li className={classes.listTitle}>Design</li>
                <li>Figma</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Adobe XD</li>
            </ul>
        
        </div>

        
    );
}