import React from 'react';
import './card.css';

function Photos({ src, width, height }) {
    return (
        <div className='card'>
            <img src={src} alt="Pictures"width={width}height={height} />
        </div>
    );
}

export default Photos