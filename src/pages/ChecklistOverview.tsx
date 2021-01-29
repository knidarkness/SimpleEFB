import React from 'react';
import styled from 'styled-components';
import { BrowserRouter as Router, Link, Switch, Route, useRouteMatch } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Checklist from './Checklist';

export default function ChecklistOverview() {
  let match = useRouteMatch();

  return <>
    <NavBar />
    <Switch>
      <Route path={`${match.path}/:checklistId`}>
        <Checklist />
      </Route>
    </Switch>
  </>;
};
