import { Dispatch } from 'redux';
import { NotesActionTypes, NotesActions } from '../types/notes';
import { notesAPI } from '../../api/notesAPI';

export const getNewTitle = () => {
  return (dispatch: Dispatch<NotesActions>) => {
    const newTitle = notesAPI.getNewTitle();
    dispatch({ type: NotesActionTypes.SET_NEW_TITLE, payload: newTitle });
  };
};

export const getNewDescription = () => {
  return (dispatch: Dispatch<NotesActions>) => {
    const newDescription = notesAPI.getNewDescription();
    dispatch({
      type: NotesActionTypes.SET_NEW_DESCRIPTION,
      payload: newDescription,
    });
  };
};

export const updateNewTitle = (value: string) => {
  return (dispatch: Dispatch<NotesActions>) => {
    notesAPI.setNewTitle(value);
    const newTitle = notesAPI.getNewTitle();
    dispatch({
      type: NotesActionTypes.UPDATE_NEW_TITLE,
      payload: newTitle,
    });
  };
};

export const updateNewDescription = (value: string) => {
  return (dispatch: Dispatch<NotesActions>) => {
    notesAPI.setNewDescription(value);
    const newDescription = notesAPI.getNewDescription();
    dispatch({
      type: NotesActionTypes.UPDATE_NEW_DESCRIPTION,
      payload: newDescription,
    });
  };
};
