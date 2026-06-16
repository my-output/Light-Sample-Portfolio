import React from 'react';
import './nature.css';
import Photos from '../components/Photos.jsx';

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
                    <Photos src='/leaf.jpeg' width={myWidth*0.85} height={myHeight} />
                    <aside>
                        <h4>Title</h4>
                        <p>Date</p>
                    </aside>
                </div>

                {/* Item 2 */}
                <div className="gallery-item">
                    <Photos src='/ferns.jpeg' width={myWidth*0.85} height={myHeight} />
                    <aside>
                        <h4>Title</h4>
                        <p>Date</p>
                    </aside>
                </div>

                {/* Item 3 */}
                <div className="gallery-item">
                    <Photos src='/flowers.jpeg' width={myWidth} height={longHeight/2} />
                    <aside>
                        <h4>Title</h4>
                        <p>Date</p>
                    </aside>
                </div>
                
                {/* Item 4 */}
                <div className="gallery-item">
                    <Photos src='/grass.jpeg' width={myWidth} height={myHeight} />
                    <aside>
                        <h4>Title</h4>
                        <p>Date</p>
                    </aside>
                </div>

                {/* Item 5 */}
                <div className="gallery-item">
                    <Photos src='/petals.jpeg' width={myWidth} height={longHeight/2} />
                    <aside>
                        <h4>Title</h4>
                        <p>Date</p>
                    </aside>
                </div>

            </article>   
        </>
    );
}