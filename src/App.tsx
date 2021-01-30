import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import ChecklistOverview from './pages/ChecklistOverview';
import Home from './pages/Home';


export default function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/checklist">Checklists</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
        </Switch>
        <Switch>
          <Route path="/checklist">
            <ChecklistOverview />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

