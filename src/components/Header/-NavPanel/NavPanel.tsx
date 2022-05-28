import './NavPanel.css';
import React from 'react';

export function NavPanel(props: object) {
  
  return (
    <nav className="Header-NavPanel">
      <button className='NavPanel-Button NavPanel-Button_choosen'>Все котики</button>
      <button className='NavPanel-Button'>Любимые котики</button>
    </nav>
  );
}