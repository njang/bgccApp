import React from 'react';
import { Switch, Route } from 'react-router-dom';
import ChildrenContainer from '../containers/ChildrenContainer'
import ChildContainer from '../containers/ChildContainer'
import AddChildForm from '../components/AddChild'

export default (
	<Switch>
    <Route exact path='/' component={ ChildrenContainer } />
  	<Route exact path='/children' component={ ChildrenContainer } />
  	<Route exact path='/children/add' component={ AddChildForm } />
  	<Route path='/child/:id' component={ ChildContainer } />
  </Switch>
)

