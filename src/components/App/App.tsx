import React from 'react';
import './App.css';

import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { store } from '../../store/store';
import { fetchCats } from '../../store/reducers';

export function App() {

  return (
    <div className="App">
      <Header></Header>
      <Main></Main>
      <button onClick={() => store.dispatch(fetchCats('ffcb565d-366b-4b2d-8326-388c4b9c40e6'))}>BIG BUTTON</button>
    </div>
  );
}

export default App;
