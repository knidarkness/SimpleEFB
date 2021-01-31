import React, { useContext } from 'react';
// import styled from 'styled-components';
import State from '../model';
import AppCtx from '../model/context';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react-lite';

export const NavBar = observer(() => {
  const ctx: State = useContext(AppCtx);

  return (
    <menu>
      {ctx.checklists.map((i) => (
        <Link to={`/checklist/${i.id}`} key={i.id}>
          <h3>
            {i.name} {i.completed ? 'C' : 'N'}
          </h3>
        </Link>
      ))}
    </menu>
  );
});

export default NavBar;
