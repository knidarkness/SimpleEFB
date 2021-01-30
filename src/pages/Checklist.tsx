import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import State from './../model';
import AppCtx from './../model/context';
import { PilotRole } from '../model/types';

import CheckListItem from '../components/CheckListItem';

const Container = styled.div`
  display: flex;
`;

export default function Checklist() {
  const { checklistId } = useParams();
  const ctx: State = useContext(AppCtx);
  const checklist = ctx.getChecklistById(checklistId);

  return (
    <>
      <h2>{checklist?.name}</h2>
      <Container>
        <div>
          {checklist?.items.filter(i => i.actor === PilotRole.PILOT_FLYING).map((item, id) => (<CheckListItem checklistItem={item} key={id} />))}
        </div>
        <div>
          {checklist?.items.filter(i => i.actor === PilotRole.PILOT_MONITORING).map((item, id) => (<CheckListItem checklistItem={item} key={id} />))}
        </div>
      </Container>
      <button onClick={() => checklist?.setCompleted(true)}>Complete</button>
      <button onClick={() => checklist?.setCompleted(false)}>Reset</button>
    </>
  );
};
