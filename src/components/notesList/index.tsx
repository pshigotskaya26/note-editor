import React from 'react';
import './notes-list.scss';
import { INote } from '../../types/interfaces/INote';
import NoteItemContainer from '../noteItem/noteItemContainer';

interface INotesListProps {
  notes: INote[];
}

const NotesList: React.FC<INotesListProps> = (props) => {
  return (
    <div className="notes-list">
      {props.notes.map((noteItem: INote, index: number) => (
        <NoteItemContainer
          key={noteItem.id}
          id={noteItem.id}
          index={index + 1}
          title={noteItem.title}
          description={noteItem.description}
          tags={noteItem.tags}
          isNewErrorNoteTitle={noteItem.isNewErrorNoteTitle}
          isNewErrorNoteDescription={noteItem.isNewErrorNoteDescription}
          isEdit={noteItem.isEdit}
        />
      ))}
    </div>
  );
};

export default NotesList;
