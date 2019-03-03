import React, { Fragment, Component } from 'react';
import { Route, BrowserRouter, Switch } from 'react-router-dom';

// assets
import './assets/styles/font-awesome.min.css'
import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';

class App extends Component {
      render () {
        return (
          <BrowserRouter>
            <Fragment>
              <Header />
              <Main />
              <Footer />
            </Fragment>
          </BrowserRouter>
        )
      }
    }

export default App;
