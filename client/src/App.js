import './App.css';

import React from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Breeds from './components/Breeds';
import { Redirect } from 'react-router-dom';

const renderRedirect = () => {
  if (!window.location.pathname.includes('breeds')) {
    return <Redirect to='/breeds' />
  }
}

const App = () => (
  <div>
    {renderRedirect()}
    <nav>
      <Link to='/breeds'>Breeds</Link>
    </nav>

    <Switch>
      <Route path='/' component={Breeds} />
    </Switch>
  </div>
);

export default App;
