import React from 'react';
import './summer.css';
import Photos from '../components/Photos.jsx';
import img1 from '/days.jpeg';
import img2 from '/dayshadow.jpeg';
import img3 from '/beach-house.jpeg';
import img4 from '/surfboards.png';
import img5 from '/motion.jpeg';

// Create standard widths/heights
const myWidth = 1800/3;
const myHeight = 1200/3;
const longHeight = 1400;
const longWidth = 1800;

export default function Summer() {
    console.log("Summer component!");
    return (
        <>
            <article className="summer-gallery">
                {/* Item 1 */}
                <div className="gallery-item">
                    <Photos src={img1} width={myWidth} height={myHeight} />
                    <aside>
                        <h4>Title</h4>
                        <p>Date</p>
                    </aside>
                </div>

                {/* Item 2 */}
                <div className="gallery-item">
                    <Photos src={img2} width={myWidth} height={myHeight} />
                    <aside>
                        <h4>Title</h4>
                        <p>Date</p>
                    </aside>
                </div>

                {/* Item 3 */}
                <div className="gallery-item">
                    <Photos src={img3} width={myWidth} height={longHeight/2} />
                    <aside>
                        <h4>Title</h4>
                        <p>Date</p>
                    </aside>
                </div>
                
                {/* Item 4 */}
                <div className="gallery-item">
                    <Photos src={img4} width={myWidth} height={longHeight/2} />
                    <aside>
                        <h4>Title</h4>
                        <p>Date</p>
                    </aside>
                </div>

                {/* Item 5 */}
                <div className="gallery-item">
                    <Photos src={img5} width={myWidth} height={longHeight/2} />
                    <aside>
                        <h4>Title</h4>
                        <p>Date</p>
                    </aside>
                </div>

            </article>   
        </>
    );
}