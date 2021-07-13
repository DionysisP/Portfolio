import classes from './style/AFewWords.module.css';
import { useState } from 'react';
import Modal from './portfolioComponents/Modal';
import close from './portfolioComponents/images/close.svg';
import style2 from './style/Modal.module.css';

import cv from '../images/cv.jpg';
import Table from './portfolioComponents/Table';
import Insert from './portfolioComponents/Insert';
import Skills from './portfolioComponents/Skills';

import college from '../images/college.svg';
import work from '../images/work.svg';
import settings from '../images/settings.svg';


export default function Cv(props){
    
    const [showModal, setShowModal] = useState(false);

    if (showModal) {
        return (
            <div>
                {/* opens modal and close button*/}
                <img className={style2.icon} src={close} alt="icon" onClick={() => setShowModal(false)} />
                <Modal image2={cv} status={showModal} />
            </div>
        );
    }


    return(
        <div className="wrapper2" style={{'paddingTop' : '64px'}}>
            <h1>{props.title}</h1>
            {/*<p className={classes.paragraph}>Download pdf <span>here</span></p> */}

            <Table title='Education' image={college}/>
            <Insert year='2020' title='Google UX Design Certificate' description='OAED Scholarship in UX Design' />
            <Insert year='2013-2015' title='Web Design - Video Games Development' description='Student at IEK AKMI Thessaloniki ' />
            

            <Table title='Experience' image={work}/>
            <Insert year='2019' title='Waiter & Cook' description='I worked seasonal in a Pub called Bier Center as waiter and cook.'/>
            <Insert year='2018' title='Logistics - Storekeeper' description='I worked as storekeeper for Leroy Merlin. I was part of a Voucher Program for 3 months. ' />
            <Insert year='2017' title='Contact center' description='During my service in army, I was basically an officer. My job was ansewring calls, sending Fax, make copies and more office-related tasks.'/>
            <Insert year='2016' title='Internship'  description='Right after my graduation I worked for a multilingual center “Hatzistergiou”. My job was to create some graphics such as ads and maintainance of website.'/>
            <Insert year='2013-2015' title='Graphic Designer - Web Designer' description='Member of a startup team called HiQroup Team. We developed a browser strategy game. My role was to design UI, Logos, Stickers, Posters and I had my very first times on coding.' />
            

            
            <Table title='Skills' image={settings}/>
            <Skills />
            
            <div style={{'padding' : '75px 0'}}>
                {/* <p className={classes.paragraph}>Download pdf here</p> */}
                <img className="cv" src={cv} alt="Curriculum Vitae" onClick={() => setShowModal(!showModal)}/>
            </div>
        </div>
    );
        
}