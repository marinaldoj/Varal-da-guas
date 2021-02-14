import React from 'react';

import './styles.css';

export default function Label(props){
    return(
        <h1 className="label">
            {props.title}
        </h1>
    );
}