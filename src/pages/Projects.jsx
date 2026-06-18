import React from 'react';
import './projects.css';
import Photos from '../components/Photos.jsx';
import days from '/days.jpeg';
import leafImage from '/leaf-edit.jpeg';

// Create standard widths/heights
const myWidth = 1800/3;
const myHeight = 1200/3;
const longHeight = 1400;
const longWidth = 1800;

export default function Projects() {
    return (
        <>
        <body>
            <h2>Portfolio</h2>
            <article>
                <a href={'summer'} className='archive-link'>
                    <p className='album'>Summer</p>
                    <Photos src={days} width={myWidth} height={myHeight} />
                </a>
                <a href={'nature'} className='archive-link'>
                <p className='album'>Nature</p>
                    <Photos src={leafImage} width={myWidth} height={myHeight} />
                </a>
            </article>
            
        </body>
        </>
    );
}