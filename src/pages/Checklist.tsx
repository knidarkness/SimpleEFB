import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import ChecklistView from '../components/CheckListView';

export default function Checklist() {
  const { checklistId } = useParams();
  return (
    <ChecklistView checklistId={checklistId} />
  );
};
