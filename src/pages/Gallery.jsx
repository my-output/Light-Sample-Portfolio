import React from 'react';
import './summer.css';
import Photos from '../components/Photos.jsx';

export default function Gallery() {
    return (
        <>
            {/* Standard Item */}
            <div className="gallery-item">
                <Photos src={src} width={width} height={height} />
                <aside>
                    <h4>Title</h4>
                    <p>Date</p>
                </aside>
            </div>
        </>
    );
}
