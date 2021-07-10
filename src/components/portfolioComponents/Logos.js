import { useState } from 'react';
import style from '../style/Logos.module.css';
import style2 from '../style/Modal.module.css';

import Modal from './Modal';
import close from '../portfolioComponents/images/close.svg';
export default function Logos(props) {

    const [showModal, setShowModal] = useState(false);

    // when click on a logo, modal appears
    if (showModal === true) {

        return (
            <div>
                {/* opens modal and close button*/}
                <img className={style2.icon} src={close} alt="icon" onClick={() => setShowModal(false)} />
                <Modal image={props.logo} desc={props.desc} />
            </div>
        );
    }

    //Show all logos
    return (
        <>
            <img className={style.logo} src={props.logo} alt='logo' onClick={() => setShowModal(!showModal)} />

        </>
    );
}