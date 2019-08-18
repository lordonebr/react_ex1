import React from 'react';
import './PostComponent.css';

export const PostComponent = ({imageSrc, text}) => (
    <>
        <div class="postItem">
            <img class="image" src={imageSrc} />
            <p class="text">{text}</p>
        </div>
    </>
)