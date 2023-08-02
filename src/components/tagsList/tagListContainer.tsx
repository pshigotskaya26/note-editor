import React from 'react';
import TagsList from '.';
import { RootState } from '../../store/reducers';
import { ConnectedProps, connect } from 'react-redux';

const TagListContainer: React.FC<TagListContainerProps> = (props) => {
  return <TagsList {...props} />;
};

const mapStateToProps = (state: RootState) => ({
  newTags: state.notesPage.newTags,
});

const connector = connect(mapStateToProps, {});

type TagListContainerProps = ConnectedProps<typeof connector>;

export default connector(TagListContainer);
