/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react';
import './App.css';

import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Provider } from 'react-redux';
import { fetchCats } from '../../store/reducers';
import { store } from '../../store/store';


store.dispatch(fetchCats());
export function App() {
  function onScroll(event: any) {
    const div = event.target;
    const bot = div.getBoundingClientRect().bottom;
    const diff = div.scrollHeight - div.scrollTop - bot;
    if (diff < 5) {
      store.dispatch(fetchCats());
    }
  }
  return (
    <Provider store={store}>
      <div className="App" onScroll={onScroll}>
        <Header></Header>
        <Main></Main>
      </div>
    </Provider>
  );
}

export default App;
