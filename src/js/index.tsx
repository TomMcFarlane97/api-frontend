import React from 'react';
import ReactDOM from 'react-dom';
import '../scss/index.scss';
import Homepage from './Components/Modules/Homepage/Homepage';
import { store } from './store';
import { Provider } from 'react-redux';
import Navigation from "./Components/Navigation/Navigation";
import {Container} from 'react-bootstrap';
import LoadingRequest from "./Components/LoadingRequest/LoadingRequest";
import {BrowserRouter as Router, Route} from "react-router-dom";
import SettingsPage from "./Components/Modules/SettingsPage/SettingsPage";
import Authentication from "./Components/Authentication/Authentication";
import LoginPage from "./Components/Modules/LoginPage/LoginPage";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Authentication />
        <Container className="App">
          <header className="App-header">
            {/*// @ts-ignore*/}
            <Navigation />
            <LoadingRequest />
          </header>
          <Route path="/" exact component={Homepage} />
          <Route path="/settings" component={SettingsPage} />
          <Route path="/login" component={LoginPage} />
        </Container>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
