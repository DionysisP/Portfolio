import style from '../../style/Portfolio.module.css'
import style3 from '../../style/Modal.module.css'


import data from './logos.json'
import Modal from './Modal'

import close from '../../../src/images/icons/close.svg'
import { useState } from 'react';


export default function DisplayLogos() {

    const [showModal, setShowModal] = useState(false);
    const [image, setImage] = useState('')
    const [desc, setDesc] = useState('')

    if (showModal) {
        return (
            <>
                <img  className={style3.icon} src={close} alt="icon" onClick={() => setShowModal(false)} />
                <Modal image={image} description={desc}/>
            </>
        );
    }

    return (
        <div className={style.allLogos}>
            {data.map(show => {
                return (
                    <div key={show.id}>
                        <img
                            src={require('../../../src/images/logos/' + show.image + '.svg').default}
                            className={style.logo}
                            alt='logo'
                            onClick={() => {
                                setImage(show.image)
                                setDesc(show.description)
                                setShowModal(!showModal)
                            }
                        }
                        />

                    </div>
                );
            })}
        </div>

    );
}