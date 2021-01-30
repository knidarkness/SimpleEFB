import React from 'react';
import { observer } from 'mobx-react-lite';
import { ChecklistItem } from '../model/checklist';
import { PilotRole } from '../model/types';

const CheckListItem = observer(({ checklistItem }: { checklistItem: ChecklistItem }) => {
  return (
    <div>
      <span>{checklistItem.actionName} </span>
      <span>{checklistItem.actionTodo} </span>
      <span>{checklistItem.actor === PilotRole.PILOT_FLYING ? 'PF' : 'PM'}</span>
      <input type={'checkbox'} checked={!!checklistItem.completed} onChange={e => checklistItem.setCompleted(e.target.checked)} />
    </div>
  );
});

export default CheckListItem;