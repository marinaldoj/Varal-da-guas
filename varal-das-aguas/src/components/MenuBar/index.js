import React from 'react';

import './styles.css'
import ButtonMenuBar from '../ButtonMenuBar';

export default function MenuBar(){
    return(
        <div className="menu-bar">
            <a href="/"><ButtonMenuBar title="INÍCIO" /></a>
            <a href="#contest"><ButtonMenuBar title="O CONCURSO" /></a>
            <a href="#on"><ButtonMenuBar title="SOBRE" /></a>
            <a href="#rules"><ButtonMenuBar title="REGRAS" /></a>
            <a href="/"><ButtonMenuBar title="INSCRIÇÃO" /></a>
        </div>
    );
}