import React from 'react';
import { ChecklistItem, PilotRole } from '../model/types';

export default function CheckListItem({ checklistItem }: { checklistItem: ChecklistItem }) {
  return (
    <div>
      <span>{checklistItem.actionName}</span>
      <span>{checklistItem.actionTodo}</span>
      <span>{checklistItem.actor === PilotRole.PILOT_FLYING ? 'PF' : 'PM'}</span>
    </div>
  );
};
