import { makeAutoObservable } from "mobx";
import { Checklist } from "./checklist";
import checklists from './checklists.json';
import { IChecklist } from "./types";
// export * from './context';

export default class State {
  checklists: Checklist[];
  constructor(checklists: IChecklist[]) {
    this.checklists = checklists.map(s => new Checklist(s));
    makeAutoObservable(this);
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
