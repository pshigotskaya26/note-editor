import React from 'react';
import NotesList from '.';
import { RootState } from '../../store/reducers';
import { ConnectedProps, connect } from 'react-redux';

const NoteListContainer: React.FC<NoteListContainerProps> = (props) => {
  return <NotesList {...props} />;
};

const mapStateToProps = (state: RootState) => ({
  notes: state.notesPage.notes,
});
const connector = connect(mapStateToProps, {});

type NoteListContainerProps = ConnectedProps<typeof connector>;

export default connector(NoteListContainer);
