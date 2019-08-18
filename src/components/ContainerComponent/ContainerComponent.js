import React from 'react';
import { PostComponent } from '../PostComponent/PostComponent';
import './ContainerComponent.css';

export const ContainerComponent = ({imageSrc, text}) => (
    <>
         <div class="listPost">
            <PostComponent imageSrc="https://news.xbox.com/en-us/wp-content/uploads/sites/2/2019/08/Train-Sim-World-2020-10-Main-Spessart-Bahn.jpg"
                            text="Train Sim World 2020 Arrives Today on Xbox One: Train Sim World 2020 introduces our new Action Point scoring system. Players will be able to see where points are earned for reaching their objectives, along with the impact of any mistakes such as speeding, passing signals or missing a station." />
            <PostComponent imageSrc="https://news.xbox.com/en-us/wp-content/uploads/sites/2/2019/08/Beyond_Screen_2.jpg"
                            text="Go Beyond with the Biggest Free Update Yet to No Man’s Sky on Xbox One: This is the biggest update yet, bringing together a whole host of new features. Some of them are things that you, the Xbox One No Man’s Sky community, have been eagerly requesting, and some of them will be a surprise to even the most dedicated explorers." />
            <PostComponent imageSrc="https://news.xbox.com/en-us/wp-content/uploads/sites/2/2019/08/aoede.png"
                            text="Join the Age of Empires: Definitive Edition Beta August 7th: On the heels of some recent announcements about Age of Empires: Definitive Edition, Xbox Insiders are invited to join the AoE: DE Multiplayer Beta! Limited space is available for this beta on a first-come first-serve basis. This playtest will help us test cross-network play functionality ahead of the game’s release to Steam later this month." />
            <PostComponent imageSrc="https://news.xbox.com/en-us/wp-content/uploads/sites/2/2019/08/OVR_Sigma_006.jpg"
                            text="Overwatch Introduces New Ways to Group Up and Fight for the Future on Xbox One: Exciting updates are coming to the world of Overwatch, giving players new ways to jump into the epic team-based shooter. This month the thirty-first hero, Sigma, joins the lineup and a new Role Queue system goes in to effect, evolving the way players group up to claim victory." />
          </div>
    </>
)