import React from 'react';
import './nature.css';
import Photos from '../components/Photos.jsx';
import img1 from '/leaf.jpeg';
import img2 from '/ferns.jpeg';
import img3 from '/flowers.jpeg';
import img4 from '/grass.jpeg';
import img5 from '/petals.jpeg';

// Create standard widths/heights
const myWidth = 1800/3;
const myHeight = 1200/3;
const longHeight = 1400;
const longWidth = 1800;

export default function Nature() {
    console.log("Nature component!");
    return (
        <>
            <article className="nature-gallery">
                {/* Item 1 */}
                <div className="gallery-item">
                    <Photos src={img1} width={myWidth*0.85} height={myHeight} />
                    <aside>
                        <h4>Title</h4>
                        <p>Date</p>
                    </aside>
                </div>

                {/* Item 2 */}
                <div className="gallery-item">
                    <Photos src={img2} width={myWidth*0.85} height={myHeight} />
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
                    <Photos src={img4} width={myWidth} height={myHeight} />
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