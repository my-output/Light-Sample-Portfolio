import React from 'react';
import './card.css';

function Photos({ src }) {
    return (
        <div className='card'>
            <img src={src} alt="Pictures"width={1200}height={1600} />
        </div>
    );
}

export default Photos