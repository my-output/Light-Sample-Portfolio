import React from 'react';
import './summer.css';
import Photos from '../components/Photos.jsx';

export default function Gallery2() {
    return(
        <>
            { /* Item for long images */}
            <div className="gallery-item">
                    <Photos src={img3} width={myWidth} height={longHeight/2} />
                    <aside>
                        <h4>Title</h4>
                        <p>Date</p>
                    </aside>
            </div>
        </>
    );
}