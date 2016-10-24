import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './App'

import Dashboard from './components/Dashboard'
import Reports from './components/Reports'

render(
	<Router history={browserHistory}>
	    <Route path="/" component={App}>
	      {/* make them children of `App` */}
	      <IndexRoute component={Dashboard}/>
	      <Route path="/reports" component={Reports} />

	     </Route>
	  </Router> , document.getElementById('root')
)