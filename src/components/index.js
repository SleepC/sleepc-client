import React from 'react'
import { render } from 'react-dom'
import { Router, Route, browserHistory, IndexRoute } from 'react-router'

import App from './App.jsx'

import Dashboard from './Dashboard.jsx'
import Reports from './Reports.jsx'

render(
	<Router history={browserHistory}>
	    <Route path="/" component={App}>
	      {/* make them children of `App` */}
	      <IndexRoute component={Dashboard}/>
	      <Route path="/reports" component={Reports} />

	     </Route>
	  </Router> , document.getElementById('app')
)