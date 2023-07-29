import React from 'react';
import { Dispatch } from 'redux';
import { connect, ConnectedProps } from 'react-redux';
import Form from './index';
import { RootState } from '../../store/reducers';
import { NotesActions } from '../../store/types/notes';
import { setNewTitle } from '../../store/action-creators/notes';

const FormContainer: React.FC<FormContainerProps> = (props) => {
  const onNewTitleChanged = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.setNewTitle(event.target.value);
  };

  return <Form {...props} onNewTitleChanged={onNewTitleChanged} />;
};

const mapStateToProps = (state: RootState) => ({
  currentNewTitle: state.notesPage.newTitleBody,
});

const mapDispatchToProps = (dispatch: Dispatch<NotesActions>) => ({
  setNewTitle: (value: string) => dispatch(setNewTitle(value)),
});

const connector = connect(mapStateToProps, mapDispatchToProps);
type FormContainerProps = ConnectedProps<typeof connector>;

export default connector(FormContainer);
