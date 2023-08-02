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
  const { toggleIsEditNote, deleteNoteItem } = useActions();

  const onEditNoteClick = (id: number, status: boolean) => {
    toggleIsEditNote(id, status);
  };

  const onDeleteNoteClick = (id: number) => {
    deleteNoteItem(id);
  };
  return (
    <NoteItem {...props} onEditNoteClick={onEditNoteClick} onDeleteNoteClick={onDeleteNoteClick} />
  );
};

export default NoteItemContainer;
