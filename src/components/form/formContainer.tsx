import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store/reducers';
import {
  updateNewTitle,
  updateNewDescription,
  toggleIsNewErrorTitle,
  toggleIsNewErrorDescription,
  addNote,
} from '../../store/action-creators/notes';
import Form from './index';
import { INote } from '../../types/interfaces/INote';

const FormContainer: React.FC<FormContainerProps> = (props) => {
  const onNewTitleChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.updateNewTitle(event.target.value);
  };

  const onNewDescriptionChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewDescription(event.target.value);
  };

  const onAddNoteClick = () => {
    props.currentNewTitle.length
      ? props.toggleIsNewErrorTitle(false)
      : props.toggleIsNewErrorTitle(true);
    props.currentNewDescription.length
      ? props.toggleIsNewErrorDescription(false)
      : props.toggleIsNewErrorDescription(true);

    if (props.currentNewTitle.length && props.currentNewDescription.length) {
      props.toggleIsNewErrorTitle(false);
      props.toggleIsNewErrorDescription(false);

      const newNote: INote = {
        id: 0,
        title: props.currentNewTitle,
        description: props.currentNewDescription,
        isNewErrorNoteTitle: false,
        isNewErrorNoteDescription: false,
        tags: [],
        isEdit: false,
      };

      props.updateNewTitle('');
      props.updateNewDescription('');
      props.addNote(newNote);
    }
  };

  return (
    <Form
      {...props}
      onNewTitleChanged={onNewTitleChanged}
      onNewDescriptionChanged={onNewDescriptionChanged}
      onAddNoteClick={onAddNoteClick}
    />
  );
};

const mapStateToProps = (state: RootState) => ({
  currenState: state,
  currentNewTitle: state.notesPage.newTitleBody,
  currentNewDescription: state.notesPage.newDescriptionBody,
  isNewErrorTitle: state.notesPage.isNewErrorTitle,
  isNewErrorDescription: state.notesPage.isNewErrorDescription,
});

const connector = connect(mapStateToProps, {
  updateNewTitle,
  updateNewDescription,
  toggleIsNewErrorTitle,
  toggleIsNewErrorDescription,
  addNote,
});
type FormContainerProps = ConnectedProps<typeof connector>;

export default connector(FormContainer);
