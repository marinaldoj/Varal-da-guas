import React from 'react';

import './styles.css';
import inemaImg from '../../assets/marca_inema_sem_fundo.png'

export default function Footer(){
    return(
        <div className="footer">
            <div className="line-blue"></div>
            <div className="image-content">
            <img src={inemaImg} alt="INEMA"/>
            </div>
        </div>
    );
}