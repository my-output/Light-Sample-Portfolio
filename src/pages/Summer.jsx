import React from 'react';
import './summer.css';
import Photos from '../components/Photos.jsx';

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
                    <Photos src='/days.jpeg' width={myWidth} height={myHeight} />
                    <aside>
                        <h4>Title</h4>
                        <p>Date</p>
                    </aside>
                </div>

                {/* Item 2 */}
                <div className="gallery-item">
                    <Photos src='/dayshadow.jpeg' width={myWidth} height={myHeight} />
                    <aside>
                        <h4>Title</h4>
                        <p>Date</p>
                    </aside>
                </div>

                {/* Item 3 */}
                <div className="gallery-item">
                    <Photos src='/beach-house.jpeg' width={myWidth} height={longHeight/2} />
                    <aside>
                        <h4>Title</h4>
                        <p>Date</p>
                    </aside>
                </div>
                
                {/* Item 4 */}
                <div className="gallery-item">
                    <Photos src='/surfboards.png' width={myWidth} height={longHeight/2} />
                    <aside>
                        <h4>Title</h4>
                        <p>Date</p>
                    </aside>
                </div>

                {/* Item 5 */}
                <div className="gallery-item">
                    <Photos src='/motion.jpeg' width={myWidth} height={longHeight/2} />
                    <aside>
                        <h4>Title</h4>
                        <p>Date</p>
                    </aside>
                </div>

            </article>   
        </>
    );
}