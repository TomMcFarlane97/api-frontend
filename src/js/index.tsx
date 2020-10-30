import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/index.scss';
import Homepage from './Components/modules/Homepage/Homepage';
import { store } from './store';
import { Provider } from 'react-redux';
import Header from "./Components/modules/Header/Header";
import { Container } from 'react-bootstrap';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Container >
        <Header />
        <Homepage />
      </Container>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
