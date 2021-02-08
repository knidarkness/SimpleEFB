import React, { useContext } from 'react';
import styled from 'styled-components';

import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import MenuIcon from '@material-ui/icons/Menu';

import {
  AppBar,
  // Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';

import Home from './pages/Home';
import LandingDistancePage from './pages/LandingDistance';
import AppCtx from './model/context';
import State from './model';
import { Airport } from './model/types';

const Body = styled.div`
  width: 70%;
  margin: auto;
`;

const TopBar = styled.nav`
  flex-grow: 1;
`;

const TopMenuLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export default function App(): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const ctx: State = useContext(AppCtx);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  React.useEffect(() => {
    (async function updateRunways() {
      const airportsRaw = await fetch(
        `${process.env.PUBLIC_URL || ''}/airports.json`
      );
      const airportsData = await airportsRaw.json();

      ctx.loadAirportsData(airportsData as Record<string, Airport>);
      console.log('Loaded airport data.');
    })();
  }, []);

  return (
    <HashRouter basename="/">
      <CssBaseline />
      <TopBar>
        <AppBar position="static">
          <Toolbar>
            <IconButton onClick={handleClick}>
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <TopMenuLink to="/">
                <MenuItem onClick={handleClose}>Home</MenuItem>
              </TopMenuLink>
              <TopMenuLink to="/landing">
                <MenuItem onClick={handleClose}>Boeing 767 - Landing</MenuItem>
              </TopMenuLink>
            </Menu>
            <Typography variant="h6">SimpleEFB</Typography>
          </Toolbar>
        </AppBar>
      </TopBar>
      <Body>
        <Switch>
          <Route exact path="/landing">
            <LandingDistancePage />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Body>
    </HashRouter>
  );
}
