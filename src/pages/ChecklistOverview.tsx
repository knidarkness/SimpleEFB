import React from 'react';
// import styled from 'styled-components';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

import NavBar from '../components/NavBar';
import Checklist from './Checklist';

export default function ChecklistOverview(): JSX.Element {
  const match = useRouteMatch();

  return (
    <>
      <NavBar />
      <Switch>
        <Route path={`${match.path}/:checklistId`}>
          <Checklist />
        </Route>
      </Switch>
    </>
  );
}
