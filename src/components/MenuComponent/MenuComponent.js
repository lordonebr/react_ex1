import React from 'react';
import './MenuComponent.css';

export const MenuComponent = ({items}) => (
    <>
        <nav class="navStyle">
            { items.map(item => (
                <a class="itemNav" href="#">{item}</a>
            ))}
        </nav>
    </>
)