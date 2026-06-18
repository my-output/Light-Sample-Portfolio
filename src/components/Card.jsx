import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom';

import Photos from './Photos';
import leafImage from '/leaf-edit.jpeg';
import './card.css';

const myWidth = 1600/3;
const myHeight = 1200/3;

function Card() {
    return (
        <article className='card'>

            <div className='profile'>
                <Photos src={leafImage} width={myWidth/1.5} height={myHeight} className='profile-img'/>
            </div>

            <div className='description'>
                <h3>About me</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada ante leo, et feugiat ante mattis non. Integer sed neque lacus. Ut facilisis, tellus ut sollicitudin pulvinar, neque leo vestibulum nibh, sit amet dictum elit nunc ullamcorper neque. Praesent aliquam elit ante, consequat efficitur nibh luctus in. Donec vitae arcu non nulla iaculis convallis. Sed tempus nulla est, sit amet venenatis diam euismod in. Etiam et ipsum ante. Nulla tempor tempor ex nec finibus. Quisque ut quam in erat fringilla molestie. Maecenas ut ex nec lacus egestas porttitor. Suspendisse sodales augue blandit, lobortis tortor eu, scelerisque mauris. Vestibulum iaculis condimentum luctus. Praesent nec blandit leo. Donec dignissim elit turpis, id dapibus mauris interdum ac. Sed ultricies nulla quis auctor feugiat. Mauris eu tristique orci, in sodales dui.
                </p>
                <Link to="/projects" className='see-work'>See My Work!</Link>
                
            </div>
            
        </article>
    );
}

export default Card;