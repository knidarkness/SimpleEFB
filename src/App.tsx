import React, { useContext } from 'react';
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom';
import ChecklistOverview from './pages/ChecklistOverview';
import State from './model';
import Home from './pages/Home';
import AppCtx from './model/context';
// import { observer } from 'mobx-react-lite';

// const TimerView = observer(() => {
//   const state: State = useContext(AppCtx);
//   return (
//     <span>{state.secondsPassed}</span>
//   );
// });

export default function App() {
  const state: State = useContext(AppCtx);
  console.log(state.checklists[0].items[0].actionName);
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

