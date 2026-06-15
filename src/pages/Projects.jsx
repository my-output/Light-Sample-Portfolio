import React from 'react';
import './projects.css';
import Photos from '../components/Photos.jsx';

// Create standard widths/heights
const myWidth = 1800/3;
const myHeight = 1200/3;

export default function Projects() {
    return (
        <>
        <body>
            <h2>Portfolio</h2>
            <article>
                <a href='/' className='archive-link'>
                    <p className='album'>Album 1</p>
                    <Photos src='/fleurs.png' width={myWidth} height={myHeight} className='archive-link'/>
                </a>
                <a href='/' className='archive-link'>
                <p className='album'>Album 2</p>
                    <Photos src='/fleurs.png' width={myWidth} height={myHeight} />
                </a>
            </article>
            
        </body>
        </>
    );
}