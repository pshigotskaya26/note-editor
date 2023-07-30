import { Dispatch } from 'redux';
import { NotesActionTypes, NotesActions } from '../types/notes';
import { notesAPI } from '../../api/notesAPI';

export const setNewTitle = (newTitle: string) => ({
  type: NotesActionTypes.SET_NEW_TITLE,
  payload: newTitle,
});

export const fetchNewTitle = () => {
  return (dispatch: Dispatch<NotesActions>) => {
    const newTtile = notesAPI.getNewTitle();
    if (newTtile !== '') {
      dispatch(setNewTitle(newTtile));
    }
  };
};
