import React from 'react';
import { AiOutlineCloseCircle, AiFillEdit } from 'react-icons/ai';
import './note-item.scss';
import Error from '../error';
import ErrorMesages from '../../types/enums/errorValues';
//import TagListContainer from '../tagsList/tagListContainer';

interface INoteProps {
  id: number;
  title: string;
  index: number;
  description: string;
  isNewErrorNoteTitle: boolean;
  isNewErrorNoteDescription: boolean;
  tags: string[] | null;
  isEdit: boolean;
  onEditNoteClick: (id: number) => void;
  onNoteTitleChanged: (event: React.ChangeEvent<HTMLInputElement>, id: number) => void;
  onNoteDescriptionChanged: (event: React.ChangeEvent<HTMLTextAreaElement>, id: number) => void;
  onSaveNote: (id: number, title: string, description: string) => void;
  onDeleteNoteClick: (id: number) => void;
}

const NoteItem: React.FC<INoteProps> = (props) => {
  return (
    <div className="note-item">
      <div className="note-item__order">{props.index}</div>
      <div className="note-item__content">
        <div className="elements">
          <div className="elements__title">
            {props.isEdit ? (
              <input
                type="text"
                className="input-text"
                value={props.title}
                onChange={(e) => {
                  props.onNoteTitleChanged(e, props.id);
                }}
              />
            ) : (
              <h3 className="note-item__title">{props.title}</h3>
            )}
          </div>
          {props.isNewErrorNoteTitle && <Error message={ErrorMesages.ERROR__TITLE_MESSAGE} />}
        </div>
        <div className="elements">
          <div className="elements__description">
            {props.isEdit ? (
              <textarea
                className="textarea"
                value={props.description}
                rows={5}
                onChange={(e) => {
                  props.onNoteDescriptionChanged(e, props.id);
                }}
              />
            ) : (
              <div className="note-item__description">{props.description}</div>
            )}
          </div>
          {props.isNewErrorNoteDescription && (
            <Error message={ErrorMesages.ERROR__DESCRIPTION_MESSAGE} />
          )}
        </div>

        {/* <div className="note-item__tags">
          <TagListContainer />
        </div> */}
      </div>
      <div className="note-item__controls">
        <div className="note-item__icons">
          {!props.isEdit && (
            <AiFillEdit
              size={25}
              className="note-item__edit-icon"
              onClick={() => props.onEditNoteClick(props.id)}
            />
          )}

          {!props.isEdit && (
            <AiOutlineCloseCircle
              size={25}
              className="note-item__delete-icon"
              onClick={() => props.onDeleteNoteClick(props.id)}
            />
          )}
        </div>
        <div className="note-item__buttons">
          {props.isEdit && (
            <button
              className="button button_small"
              onClick={() => props.onSaveNote(props.id, props.title, props.description)}
            >
              Save
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default NoteItem;
