import { makeAutoObservable } from "mobx";
import checklists from './checklists.json';
import { Checklist } from "./types";
// export * from './context';

export default class State {
  secondsPassed = 0;

  constructor(public checklists: Checklist[]) {
    makeAutoObservable(this);
  }

  increaseTimer() {
    this.secondsPassed += 1;
  }

  getChecklistById(id): Checklist | undefined {
    return this.checklists.find((item) => item.id === id);
  }
}


let state: State;
export function loadState() {
  if (!state) {
    state = new State(checklists.checklists)
  }
  return state;
}
