import React from 'react';
import './SideBarComponent.css';

export const SideBarComponent = ({items}) => (
    <>
        <ul class="sideBarStyle">
            { items.map(item => (
                <li class="listSideBarStyle">
                    <a class="itemSideBar" href="#">{item}</a>
                </li>
            ))}
        </ul>
    </>
)