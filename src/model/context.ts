import React, { createContext } from 'react';
import State from './index';

export let AppCtx;

if (!AppCtx) {
  AppCtx = createContext<State>();
}

export default AppCtx;