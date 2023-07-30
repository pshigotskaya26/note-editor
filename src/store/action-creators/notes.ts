import { Dispatch } from 'redux';
import { NotesActionTypes, NotesActions } from '../types/notes';
import { notesAPI } from '../../api/notesAPI';

export const setNewTitle = (newTitle: string) => ({
  type: NotesActionTypes.SET_NEW_TITLE,
  payload: newTitle,
});

export const setNewDescriprion = (newDescription: string) => ({
  type: NotesActionTypes.SET_NEW_DESCRIPTION,
  payload: newDescription,
});

export const fetchNewTitle = () => {
  return (dispatch: Dispatch<NotesActions>) => {
    const newTtile = notesAPI.getNewTitle();
    if (newTtile !== '') {
      dispatch(setNewTitle(newTtile));
    }
  };
};

export const fetchNewDescription = () => {
  return (dispatch: Dispatch<NotesActions>) => {
    const newDescription = notesAPI.getNewDescription();
    if (newDescription !== '') {
      dispatch(setNewDescriprion(newDescription));
    }
  };
};
