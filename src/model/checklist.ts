import { makeAutoObservable } from "mobx";
import { IChecklistItem, IChecklist, PilotRole } from "./types";

export class Checklist {
  id: string;
  name: string;
  completed: boolean;
  items: ChecklistItem[];

  constructor({ id, name, items }: IChecklist) {
    this.id = id;
    this.name = name;
    this.items = items.map(i => new ChecklistItem(i, () => this.itemUpdated()));
    this.completed = false;

    makeAutoObservable(this);
  }

  itemUpdated() {
    console.log(this.items.length);
    if (this.items.filter(i => i.completed === true).length === this.items.length) {
      this.completed = true;
    }

    if (this.items.filter(i => i.completed === true).length !== this.items.length) {
      this.completed = false;
    }
  }

  setCompleted(completed: boolean): void {
    this.items.forEach(item => item.completed = completed);
    this.completed = completed;
  }
}

export class ChecklistItem {
  actionName: string;
  actionTodo: string | undefined;
  actor: PilotRole;
  completed: boolean;

  itemUpdatedCallback;

  constructor({ actionName, actionTodo, actor }: IChecklistItem, itemUpdatedCallback: () => void) {
    this.actionTodo = actionTodo;
    this.actionName = actionName;
    this.actor = actor;
    this.completed = false;
    this.itemUpdatedCallback = itemUpdatedCallback;
    makeAutoObservable(this);
  }

  setCompleted(completed: boolean) {
    this.completed = completed;
    this.itemUpdatedCallback();
  }
}