import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import CreateItem from './CreateItem';
import DisplayItem from './DisplayItem';
import EditItem from './EditItem';

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
        </Switch>
      </div>
    )
  }
}

export default Main;
