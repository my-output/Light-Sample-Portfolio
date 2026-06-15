import React from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Outlet, Link } from 'react-router-dom'; // Updated imports

import './card.css';
import Photos from './Photos';


const myWidth = 1600/3;
const myHeight = 1200/3;

function Card() {
    return (
        <article className='card'>

            <div className='profile'>
                <Photos src={'/leaf-edit.jpeg'} width={myWidth/1.5} height={myHeight} className='profile-img'/>
            </div>

            <div className='description'>
                <h3>About me</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam malesuada ante leo, et feugiat ante mattis non. Integer sed neque lacus. Ut facilisis, tellus ut sollicitudin pulvinar, neque leo vestibulum nibh, sit amet dictum elit nunc ullamcorper neque. Praesent aliquam elit ante, consequat efficitur nibh luctus in. Donec vitae arcu non nulla iaculis convallis. Sed tempus nulla est, sit amet venenatis diam euismod in. Etiam et ipsum ante. Nulla tempor tempor ex nec finibus. Quisque ut quam in erat fringilla molestie. Maecenas ut ex nec lacus egestas porttitor. Suspendisse sodales augue blandit, lobortis tortor eu, scelerisque mauris. Vestibulum iaculis condimentum luctus. Praesent nec blandit leo. Donec dignissim elit turpis, id dapibus mauris interdum ac. Sed ultricies nulla quis auctor feugiat. Mauris eu tristique orci, in sodales dui.
                </p>
                <span>
                    <a href='../pages/Projects.jsx'>See my work!</a>
                </span>
                
            </div>
            
        </article>
    );
}

export default Card;