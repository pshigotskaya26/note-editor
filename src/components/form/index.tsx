import React from 'react';
import './form.scss';
import Error from '../error';
import ErrorMesages from '../../types/enums/errorValues';
import { RootState } from '../../store/reducers';
//import TagListContainer from '../tagsList/tagListContainer';

interface FormProps {
  currenState: RootState;
  currentNewTitle: string;
  currentNewDescription: string;
  isNewErrorTitle: boolean;
  isNewErrorDescription: boolean;
  onNewTitleChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onNewDescriptionChanged: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
  onAddNoteClick: () => void;
}

const Form: React.FC<FormProps> = (props) => {
  return (
    <section className="form">
      <div className="container">
        <h2 className="form__title">Create a new note:</h2>
        <div className="form__content">
          <div className="form__elements">
            <div className="elements">
              <div className="elements__title">
                <label htmlFor="title" className="label form-label">
                  Enter a note title:
                </label>
                <input
                  id="title"
                  className="input-text"
                  type="text"
                  value={props.currentNewTitle}
                  onChange={(e) => props.onNewTitleChanged(e)}
                />
              </div>
              {props.isNewErrorTitle && <Error message={ErrorMesages.ERROR__TITLE_MESSAGE} />}
            </div>

            <div className="elements">
              <div className="elements__description">
                <label htmlFor="description" className="label form-label">
                  Enter a note text:
                </label>
                <textarea
                  className="textarea"
                  rows={5}
                  value={props.currentNewDescription}
                  onChange={(e) => props.onNewDescriptionChanged(e)}
                />
              </div>
              {props.isNewErrorDescription && (
                <Error message={ErrorMesages.ERROR__DESCRIPTION_MESSAGE} />
              )}
            </div>

            {/* <div className="elements">
              <TagListContainer />
            </div> */}
          </div>
          <div className="form__buttons">
            <button className="button" onClick={props.onAddNoteClick}>
              Add note
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
