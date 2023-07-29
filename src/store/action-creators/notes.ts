import { Dispatch } from 'redux';
import { NotesActionTypes, NotesActions } from '../types/notes';

export const setNewTitle = (newTitle: string) => ({
  type: NotesActionTypes.SET_NEW_TITLE,
  payload: newTitle,
});

export const fetchNewTitle = (value: string) => {
  return (dispatch: Dispatch<NotesActions>) => {
    dispatch(setNewTitle(value));
  };
};
