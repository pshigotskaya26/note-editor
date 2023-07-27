import React from 'react';
import './notes-list.scss';
import NoteItem from '../noteItem';

const NotesList = () => {
  return (
    <div className="notes-list">
      <NoteItem />
    </div>
  );
};

export default NotesList;
