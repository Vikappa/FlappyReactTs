import React from 'react';
import birdImageFile from '/assets/img/bird.png';
import './BirdStyle.css';

interface BirdProps {
    x: number;
    y: number;
}

const Bird: React.FC<BirdProps> = ({ x, y }) => {
    return (
        <div
            className="bird-container"
            style={{
                position: 'absolute',
                left: x,
                top: y,
                zIndex: 1000,
            }}
        >
            <img
                src={birdImageFile}
                alt="bird"
                className="bird-image"
                style={{
                    width: '60px',
                    height: '46px',
                    zIndex: 1000,
                }}
            />
        </div>
    );
};

export default Bird;
