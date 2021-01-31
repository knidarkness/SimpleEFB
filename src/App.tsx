import React from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import ChecklistOverview from './pages/ChecklistOverview';

export default function App(): JSX.Element {
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
            <ChecklistOverview />
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
