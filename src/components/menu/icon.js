export default function Icon(props){
    return(
        <img onClick={props.onClick} style={{'position' : 'absolute' , 'backgroundColor' : 'red', 'width' : '200px', 'height' : '200px'}}/>
    );
}