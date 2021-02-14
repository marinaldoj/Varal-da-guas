import React from 'react';

import './styles.css';
import MenuBar from '../../components/MenuBar';
import Label from '../../components/Label';
import oceanImg from '../../assets/ocean-sea-pacific.png'
import nameLogo from '../../assets/logo.png'

export default function HomePage(){
    return(
        <div className="home-menu">
            <MenuBar />
            <div className="logo">
                <img src={oceanImg} className="ocean-img" alt="Oceano"/>
                <img src={nameLogo} className="logo-img" alt="Varal das Águas"/>
                <div className="home-body">
                    <Label title="O CONCURSO"/>
                </div>
            </div>                     
        </div>
    );
}