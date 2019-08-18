import React from 'react';
import './App.css';
import { HeaderComponent } from './components/HeaderComponent/HeaderComponent';
import { MenuComponent } from './components/MenuComponent/MenuComponent';
import { ContainerComponent } from './components/ContainerComponent/ContainerComponent';
import { SideBarComponent } from './components/SideBarComponent/SideBarComponent';

function App() {
  return (
    <div>
      <div class="module">
        <HeaderComponent 
          title="Xbox News"
          items={["Topic 1", "Topic 2", "Topic 3", "Topic 4"]} />
      </div>
      <div class="module">
        <MenuComponent 
          items={["Section 1", "Section 2", "Section 3", "Section 4"]} />
          <ContainerComponent />
          <div class="sideBarDiv">
            <SideBarComponent
              items={["Section 1", "Section 2", "Section 3", "Section 4", "Section 5",
                      "Section 6", "Section 7", "Section 8", "Section 9", "Section 10",
                      "Section 11", "Section 12", "Section 13", "Section 14", "Section 15"
              ]} />
          </div>
      </div>
    </div>
  );
}

export default App;
