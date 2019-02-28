require('./bootstrap');
import React, { Component } from 'react';
import { render } from 'react-dom';
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
            <div>
              <Header />
              <Main />
              <Footer />
            </div>
          </BrowserRouter>
        )
      }
    }

render(<App />, document.getElementById('app'));
