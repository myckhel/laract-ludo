import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import CreateItem from './CreateItem';
import DisplayItem from './DisplayItem';
import EditItem from './EditItem';
import History from './pages/History'
import Board from './Board'
import Profile from './pages/Profile'

class Main extends Component {
  constructor(props) {
    super(props)
  }

  render(){
    return (
      <div  className="container">
        <Switch>
          <Route exact path="/" component={DisplayItem} />
          <Route exact path="/add-item" component={CreateItem} />
          <Route exact path="/edit/:id" component={EditItem} />
          <Route path='/history' component={History}/>
          <Route path='/player/profile' component={Profile}/>
          <Route path='/game' component={Board}/>
        </Switch>
      </div>
    )
  }
}

export default Main;
