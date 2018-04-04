import React from 'react';
import { Router, browserHistory, Route, IndexRoute } from 'react-router';
import FAQContainer from './FAQContainer'
import LauncherList from '../components/LauncherList'
import LauncherListContainer from './LauncherListContainer'
import NavBar from '../components/NavBar'

const App = props => {
  return(
    <Router history={browserHistory}>
      <Route path='/' component={NavBar}>
        <IndexRoute component={FAQContainer} />
        <Route path="launchers" component={LauncherList} />
        <Route path="launcher/:id" component={LauncherListContainer} />
      </Route>
    </Router>
  )
}

export default App;
