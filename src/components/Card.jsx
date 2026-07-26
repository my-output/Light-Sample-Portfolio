import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';

import Photos from './Photos';
import leafImage from '/leaf-edit.jpeg';
import './card.css';

const myWidth = 1600/3;
const myHeight = 1200/3;

function Card({ body }) {
    return (
        <>
            <article className='card'>

                <div className='profile'>
                    <Photos src={leafImage} width={myWidth/1.5} height={myHeight} className='profile-img'/>
                </div>

                <div className='description'>
                    <h3>About me</h3>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada ante leo, et feugiat ante mattis non. Integer sed neque lacus. Ut facilisis, tellus ut sollicitudin pulvinar, neque leo vestibulum nibh, sit amet dictum elit nunc ullamcorper neque.
                    </p>
                    <Link to="/projects" className='see-work'>See My Work!</Link>
                    
                </div>
                
            </article>
        </>
        
        
    );
}

export default Card;