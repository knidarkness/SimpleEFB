import { createContext } from 'react';
import State, { loadState } from './index';

export let AppCtx;

if (!AppCtx) {
  AppCtx = createContext<State>(loadState());
}

export default AppCtx;