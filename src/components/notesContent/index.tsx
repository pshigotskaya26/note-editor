import React from 'react';
import './notes-content.scss';
import NoteListContainer from '../notesList/note-listContainer';

const NotesContent = () => {
  return (
    <section className="notes-content">
      <div className="container">
        <h2 className="notes-content__title">Notes List:</h2>
        {/* <div className="notes-content__tags">Block tags for filter</div> */}
        <div className="notes-content__list">
          <NoteListContainer />
        </div>
      </div>
    </section>
  );
};

export default NotesContent;
