import React from 'react';

import './BoardBox.css';

export const Box = (props) => {
    return (
        <button className="board__box" onClick={props.onClick}>
            {props.value}
        </button>
    );
}

export default Box;
