import { useState } from 'react'
import data from '../../json/logos.json'
import Modal from './Modal'
import style from '../../style/Portfolio.module.css'

export default function DisplayLogos() {

    const [showModal, setShowModal] = useState(false);
    const [image, setImage] = useState('')
    const [desc, setDesc] = useState('')


    return (
        <div className={style.allLogos}>

            {data.map(show => {
                return (
                    <div key={show.id}>
                        {showModal ? <Modal image={image} description={desc} closeModal={() => setShowModal(false)} /> : null}
                        <img
                            src={require('../../../src/images/logos/' + show.image + '.svg').default}
                            className={style.logo}
                            alt='logo'
                            onClick={() => {
                                setImage(show.image)
                                setDesc(show.description)
                                setShowModal(!showModal)
                            }
                            }/>
                    </div>
                );
            })}
        </div>

    );
}