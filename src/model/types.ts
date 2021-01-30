export interface IChecklist {
  name: string;
  id: string;
  items: IChecklistItem[];

  completed?: boolean;
}

export interface IChecklistItem {
  actionName: string;
  actionTodo?: string;
  completed?: boolean;
  actor: PilotRole,
}

export enum PilotRole {
  PILOT_FLYING = 1,
  PILOT_MONITORING = 2,
};
