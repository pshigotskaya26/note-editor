import React from 'react';
import './notes-list.scss';
import NoteItem from '../noteItem';
import { INote } from '../../types/interfaces/INote';

interface INotesListProps {
  notes: INote[];
}

const NotesList: React.FC<INotesListProps> = (props) => {
  return (
    <div className="notes-list">
      {props.notes.map((noteItem: INote) => (
        <NoteItem key={noteItem.id} />
      ))}
    </div>
  );
};

export default NotesList;
