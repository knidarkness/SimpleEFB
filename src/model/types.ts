export interface Checklist {
  name: string;
  id: string;
  items: ChecklistItem[];
}

export interface ChecklistItem {
  actionName: string;
  actionTodo?: string;
  actor: PilotRole,
}

export enum PilotRole {
  PILOT_FLYING = 1,
  PILOT_MONITORING = 2,
};
