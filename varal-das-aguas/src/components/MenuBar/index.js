import React from 'react';

import './styles.css'
import ButtonMenuBar from '../ButtonMenuBar';

export default function MenuBar(){
    return(
        <div className="menu-bar">
            <ButtonMenuBar title="INÍCIO" />
            <ButtonMenuBar title="O CONCURSO" />
            <ButtonMenuBar title="SOBRE" />
            <ButtonMenuBar title="REGRAS" />
            <ButtonMenuBar title="INSCRIÇÃO" />
        </div>
    );
}