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
  const { toggleIsEditNote, deleteNoteItem, updateNoteTitle, updateNoteDescription } = useActions();

  const onNoteTitleChanged = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
    updateNoteTitle(id, event.target.value);
  };

  const onNoteDescriptionChanged = (event: React.ChangeEvent<HTMLTextAreaElement>, id: number) => {
    updateNoteDescription(id, event.target.value);
  };

  const onEditNoteClick = (id: number) => {
    toggleIsEditNote(id, true);
  };

  const onDeleteNoteClick = (id: number) => {
    deleteNoteItem(id);
  };

  const onSaveNote = (id: number) => {
    toggleIsEditNote(id, false);
  };
  return (
    <NoteItem
      {...props}
      onEditNoteClick={onEditNoteClick}
      onNoteTitleChanged={onNoteTitleChanged}
      onNoteDescriptionChanged={onNoteDescriptionChanged}
      onDeleteNoteClick={onDeleteNoteClick}
      onSaveNote={onSaveNote}
    />
  );
};

export default NoteItemContainer;
