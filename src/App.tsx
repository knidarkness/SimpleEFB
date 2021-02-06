import React from 'react';
import {
  HashRouter,
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from 'react-router-dom';
import styled from 'styled-components';
import CssBaseline from '@material-ui/core/CssBaseline';

import LandingDistancePage from './pages/LandingDistance';
import {
  AppBar,
  // Button,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Home from './pages/Home';

const Body = styled.div`
  width: 70%;
  margin: auto;
`;

const TopBar = styled.nav`
  flex-grow: 1;
  width: 100vw;
`;

const TopMenuLink = styled(Link)`
  color: black;
  text-decoration: none;
`;

export default function App(): JSX.Element {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

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
              id="simple-menu"
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
