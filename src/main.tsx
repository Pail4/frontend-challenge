/* eslint-disable @typescript-eslint/no-non-null-assertion */
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom/client';
import App from './components/App/App';
import './styles/clear.css';
import './index.css';
import { store } from './store/store';
import { fetchCats } from './store/reducers';

store.dispatch(fetchCats('ffcb565d-366b-4b2d-8326-388c4b9c40e6'));
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
