import React from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { RootState } from '../../store/reducers';
import { updateNewTitle, updateNewDescription } from '../../store/action-creators/notes';
import Form from './index';

const FormContainer: React.FC<FormContainerProps> = (props) => {
  const onNewTitleChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.updateNewTitle(event.target.value);
  };

  const onNewDescriptionChanged = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.updateNewDescription(event.target.value);
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
  //isNewErrorTitle: state.notesPage.isNewErrorTitle,
  //isNewErrorDescription: state.notesPage.isNewErrorDescription,
});

const connector = connect(mapStateToProps, { updateNewTitle, updateNewDescription });
type FormContainerProps = ConnectedProps<typeof connector>;

export default connector(FormContainer);
