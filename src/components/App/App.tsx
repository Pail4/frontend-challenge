import React, { useState } from 'react';
import './App.css';

import { Header } from '../Header/Header';
import { Main } from '../Main/Main';

export function App() {

  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
