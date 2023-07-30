import React from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import Form from './index';
import { RootState } from '../../store/reducers';
import { NotesActions } from '../../store/types/notes';
import { setNewDescriprion, setNewTitle } from '../../store/action-creators/notes';

const FormContainer: React.FC<FormContainerProps> = (props) => {
  const onNewTitleChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setNewTitle(event.target.value);
  };

  const onNewDescriptionChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.setNewDescription(event.target.value);
  };

  return (
    <Form
      {...props}
      onNewTitleChanged={onNewTitleChanged}
      onNewDescriptionChanged={onNewDescriptionChanged}
    />
  );
};

const mapStateToProps = (state: RootState) => ({
  currentNewTitle: state.notesPage.newTitleBody,
  currentNewDescription: state.notesPage.newDescriptionBody,
  isNewErrorTitle: state.notesPage.isNewErrorTitle,
  isNewErrorDescription: state.notesPage.isNewErrorDescription,
});

const mapDispatchToProps = (dispatch: Dispatch<NotesActions>) => ({
  setNewTitle: (value: string) => dispatch(setNewTitle(value)),
  setNewDescription: (value: string) => dispatch(setNewDescriprion(value)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type FormContainerProps = ConnectedProps<typeof connector>;

export default connector(FormContainer);
