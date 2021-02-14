import React from 'react';

import './styles.css';

export default function ButtonMenuBar(props){
    return(
        <button className="button-menu-bar">
            {props.title}
        </button>
    );
}