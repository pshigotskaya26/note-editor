import React from 'react';
import TagsList from '../tagsList';
import { AiOutlineCloseCircle, AiFillEdit } from 'react-icons/ai';
import './note-item.scss';

const NoteItem = () => {
  return (
    <div className="note-item">
      <div className="note-item__order">1</div>
      <div className="note-item__content">
        <h3 className="note-item__title">Title 1</h3>
        <input type="text" className="input-text" value={''} />
        <div className="note-item__description">
          quality and professional print - It doesnt just look high quality, it is high quality.
        </div>
        <textarea className="textarea" value={''} rows={5}></textarea>
        <div className="note-item__tags">
          <TagsList />
        </div>
      </div>
      <div className="note-item__controls">
        <div className="note-item__icons">
          <AiFillEdit size={25} className="note-item__edit-icon" />
          <AiOutlineCloseCircle size={25} className="note-item__delete-icon" />
        </div>
        <div className="note-item__buttons">
          <button className="button button_small">Save</button>
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
