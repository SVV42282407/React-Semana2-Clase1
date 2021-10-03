import React, {useState, useEffect} from 'react';
import './index.css';

const MenuHackaton = (props) => {
    const {key,
            name,
            url} = props;
    return(
        <div className="menu-item">
            <a id={key} href={url}>{name}</a>
        </div>
    )
}

export default MenuHackaton;