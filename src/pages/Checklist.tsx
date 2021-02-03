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

const ChecklistColumn = styled.div`
  max-width: 45%;
`;

const EChecklist = styled.div``;

export default function Checklist(): JSX.Element {
  const { checklistId } = useParams();
  const ctx: State = useContext(AppCtx);
  const checklist = ctx.getChecklistById(checklistId);

  return (
    <EChecklist>
      <h2>{checklist?.name}</h2>
      <Container>
        <ChecklistColumn>
          {checklist?.items
            .filter((i) => i.actor === PilotRole.PILOT_FLYING)
            .map((item, id) => (
              <CheckListItem checklistItem={item} key={id} />
            ))}
        </ChecklistColumn>
        <ChecklistColumn>
          {checklist?.items
            .filter((i) => i.actor === PilotRole.PILOT_MONITORING)
            .map((item, id) => (
              <CheckListItem checklistItem={item} key={id} />
            ))}
        </ChecklistColumn>
      </Container>
      <button onClick={() => checklist?.setCompleted(true)}>Complete</button>
      <button onClick={() => checklist?.setCompleted(false)}>Reset</button>
    </EChecklist>
  );
}
