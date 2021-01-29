import React, { useContext } from 'react';
import State, { AppCtx } from './../model';
import CheckListItem from './CheckListItem';

export default function ChecklistView({ checklistId }) {
  const ctx: State = useContext(AppCtx);
  const checklist = ctx.getChecklistById(checklistId);
  return (
    <>
      <span>{checklist?.name}</span>
      <span>{checklist?.items.length}</span>
      {checklist?.items.map((item, id) => (<CheckListItem checklistItem={item} key={id} />))}
    </>
  );
}