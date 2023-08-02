import React from 'react';
import NoteItem from '.';
import { useActions } from '../../hooks/useActions';

interface INoteItemContainer {
  id: number;
  title: string;
  index: number;
  description: string;
  isNewErrorNoteTitle: boolean;
  isNewErrorNoteDescription: boolean;
  tags: string[] | null;
  isEdit: boolean;
}

const NoteItemContainer: React.FC<INoteItemContainer> = (props) => {
  const { toggleIsEditNote } = useActions();

  const onEditClick = (id: number, status: boolean) => {
    toggleIsEditNote(id, status);
  };
  return <NoteItem {...props} onEditClick={onEditClick} />;
};

export default NoteItemContainer;
