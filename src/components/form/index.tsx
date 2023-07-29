import React from 'react';
import './form.scss';
import TagsList from '../tagsList';

interface FormProps {
  currentNewTitle: string;
  setNewTitle: (value: string) => void;
  onNewTitleChanged: (e: React.ChangeEvent<HTMLInputElement>) => void;
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
                  onChange={props.onNewTitleChanged}
                />
              </div>
              {/* <div>Error</div> */}
            </div>

            <div className="elements">
              <div className="elements__description">
                <label htmlFor="description" className="label form-label">
                  Enter a note text:
                </label>
                <textarea className="textarea" rows={5}></textarea>
              </div>
              {/* <div>Error</div> */}
            </div>

            <div className="elements">
              <TagsList />
            </div>
          </div>
          <div className="form__buttons">
            <button className="button">Add note</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Form;
