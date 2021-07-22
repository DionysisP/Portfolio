import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';
import classes2 from './ResponsiveMenu.module.css';

export default function ResponsiveMenu() {


    const [showMenu, setShowMenu] = useState(false);
    const [checked, setChecked] = useState(true);

    function redirect() {
        setShowMenu(!showMenu)
        setChecked(!checked)
    }

    

        var menu =
            <nav className={ showMenu === (true) ? classes2.slide : classes2.responsiveBox}>
                <ul>
                    <li>
                        <Link to='/' onClick={redirect}>
                            <svg width="30" height="30" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M11.6668 23.3333V16.3333H16.3335V23.3333H22.1668V14H25.6668L14.0002 3.5L2.3335 14H5.8335V23.3333H11.6668Z" fill="white" />
                            </svg>
                            Homepage
                        </Link>
                    </li>


                    <li>
                        <Link to='/about' onClick={redirect}>
                            <svg width="30" height="30" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M13.9998 14C16.5782 14 18.6665 11.9117 18.6665 9.33333C18.6665 6.755 16.5782 4.66667 13.9998 4.66667C11.4215 4.66667 9.33317 6.755 9.33317 9.33333C9.33317 11.9117 11.4215 14 13.9998 14ZM13.9998 16.3333C10.8848 16.3333 4.6665 17.8967 4.6665 21V23.3333H23.3332V21C23.3332 17.8967 17.1148 16.3333 13.9998 16.3333Z" fill="white" />
                            </svg>
                            About
                        </Link>
                    </li>


                    <li>
                        <Link to='/portfolio' onClick={redirect}>
                            <svg width="30" height="30" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M18.9467 13.4283L20.7783 11.5967L16.4033 7.22166L14.5717 9.05333L9.74167 4.235C8.83167 3.325 7.35 3.325 6.44 4.235L4.22333 6.45166C3.31333 7.36166 3.31333 8.84333 4.22333 9.75333L9.04167 14.5717L3.5 20.125V24.5H7.875L13.4283 18.9467L18.2467 23.765C19.355 24.8733 20.8483 24.465 21.5483 23.765L23.765 21.5483C24.675 20.6383 24.675 19.1567 23.765 18.2467L18.9467 13.4283ZM10.71 12.915L5.88 8.09666L8.085 5.88L9.56667 7.36166L8.19 8.75L9.835 10.395L11.2233 9.00666L12.915 10.6983L10.71 12.915ZM19.9033 22.12L15.085 17.3017L17.3017 15.085L18.9933 16.7767L17.605 18.165L19.25 19.81L20.6383 18.4217L22.12 19.9033L19.9033 22.12Z" fill="white" />
                                <path d="M24.1619 8.21333C24.6169 7.75833 24.6169 7.02333 24.1619 6.56833L21.4319 3.83833C20.8835 3.29 20.1252 3.5 19.7869 3.83833L17.6519 5.97333L22.0269 10.3483L24.1619 8.21333Z" fill="white" />
                            </svg>
                            Portfolio
                        </Link>
                    </li>


                    <li>
                        <Link to='/contact' onClick={redirect}>
                            <svg width="30" height="30" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M23.3335 4.66666H4.66683C3.3835 4.66666 2.34516 5.71666 2.34516 7L2.3335 21C2.3335 22.2833 3.3835 23.3333 4.66683 23.3333H23.3335C24.6168 23.3333 25.6668 22.2833 25.6668 21V7C25.6668 5.71666 24.6168 4.66666 23.3335 4.66666ZM23.3335 9.33333L14.0002 15.1667L4.66683 9.33333V7L14.0002 12.8333L23.3335 7V9.33333Z" fill="white" />
                            </svg>
                            Contact
                        </Link>
                    </li>
                </ul>
            </nav>
    



    return (
            <div className={classes.topBarBackground}>

                <input type='checkbox' id="menuButton" className={'toggle'} onClick={() => setShowMenu(!showMenu)} checked={!checked} onChange={() => setChecked(!checked)} />
                <label className={classes.burgerLabel} htmlFor="menuButton">
                    <span className='line'></span>
                    <span className='line'></span>
                    <span className='line'></span>
                </label>

                {menu}

            </div>
    );

}
