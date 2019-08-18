import React from 'react';
import './HeaderComponent.css';

export const HeaderComponent = ({title, items}) => (
    <>
        <div class="logoDiv">
            <h1 class="logoText">{title}</h1>
        </div>
        <div class="mainMenu">
            <ul class="listMenu">
                { items.map(item => (
                    <li class="listItemMenu">
                        <a class="listItemLink" href="#">{item}</a>
                    </li>
                ))}
            </ul>
            <input class="searchInput" placeholder="Search..." type="text" name="search"></input>
        </div>
    </>
)