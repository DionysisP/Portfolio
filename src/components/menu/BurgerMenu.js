import { useState } from "react";
import ResponsiveMenu from "./ResponsiveMenu";

export default function BurgerMenu(props){

    const [showMenu, setShowMenu] = useState(true);
    
    if(!showMenu){
        <ResponsiveMenu />
    }

    const [checked, setChecked] = useState(true);

    return(
       
        <div>
            
            <input type='checkbox' id="menuButton" className={'toggle'} defaultChecked={props.checked} onChange={() => setChecked(!checked)} />
                <label htmlFor="menuButton">
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                </label>
                
              

         
        </div>
    );
}