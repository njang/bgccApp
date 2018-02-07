import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Eat from '../components/Eat';
import Rest from '../components/Rest';
import Play from '../components/Play';
import Potty from '../components/Potty';
import Incident from '../components/Incident';

export default (
	<BrowserRouter>
  	<Switch>
	    <Route exact path='/' component={ Eat } />
	    <Route path='/eat' component={ Eat } />
	    <Route path='/rest' component={ Rest } />
	    <Route path='/play' component={ Play } />
	    <Route path='/potty' component={ Potty } />
	    <Route path='/incident' component={ Incident } />
	  </Switch>
	</BrowserRouter>
)

