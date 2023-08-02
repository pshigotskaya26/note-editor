import { Dispatch } from 'redux';
import { NotesActionTypes, NotesActions } from '../types/notes';
import { notesAPI } from '../../api/notesAPI';
import { INote } from '../../types/interfaces/INote';

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

export const getNewNotes = () => {
  return (dispatch: Dispatch<NotesActions>) => {
    const newNotes = notesAPI.getNewNotes();
    dispatch({
      type: NotesActionTypes.SET_NEW_NOTES,
      payload: newNotes,
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

export const getIsNewErrorTitle = () => {
  return (dispatch: Dispatch<NotesActions>) => {
    const newIsNewErrorTitle = notesAPI.getIsNewErrorTitle();
    dispatch({
      type: NotesActionTypes.TOGGLE_IS_NEW_ERROR_TITLE,
      payload: Boolean(newIsNewErrorTitle),
    });
  };
};

export const getIsNewErrorDescription = () => {
  return (dispatch: Dispatch<NotesActions>) => {
    const newIsNewErrorDescription = notesAPI.getIsNewErrorDescription();
    dispatch({
      type: NotesActionTypes.TOGGLE_IS_NEW_ERROR_DESCRIPTION,
      payload: Boolean(newIsNewErrorDescription),
    });
  };
};

export const toggleIsNewErrorTitle = (value: boolean) => {
  return (dispatch: Dispatch<NotesActions>) => {
    const updatedIsNewErrorTitle = notesAPI.toggleIsNewErrorTitle(value);
    dispatch({
      type: NotesActionTypes.TOGGLE_IS_NEW_ERROR_TITLE,
      payload: Boolean(updatedIsNewErrorTitle),
    });
  };
};

export const toggleIsNewErrorDescription = (value: boolean) => {
  return (dispatch: Dispatch<NotesActions>) => {
    const updatedIsNewErrorDescription = notesAPI.toggleIsNewErrorDescription(value);
    dispatch({
      type: NotesActionTypes.TOGGLE_IS_NEW_ERROR_DESCRIPTION,
      payload: Boolean(updatedIsNewErrorDescription),
    });
  };
};

export const addNote = (newNote: INote) => {
  return (dispatch: Dispatch<NotesActions>) => {
    const notes = notesAPI.addNewNote(newNote);
    dispatch({ type: NotesActionTypes.UPDATE_NOTES, payload: notes });
  };
};

export const toggleIsEditNote = (id: number, status: boolean) => {
  return (dispatch: Dispatch<NotesActions>) => {
    const updatedNotes = notesAPI.toggleIsEditNote(id, status);
    dispatch({ type: NotesActionTypes.UPDATE_NOTES, payload: updatedNotes });
  };
};

export const toggleIsNewErrorNoteTitle = (id: number, status: boolean) => {
  return (dispatch: Dispatch<NotesActions>) => {
    const updatedNotes = notesAPI.toggleIsNewErrorNoteTitle(id, status);
    dispatch({ type: NotesActionTypes.UPDATE_NOTES, payload: updatedNotes });
  };
};

export const toggleIsNewErrorNoteDescription = (id: number, status: boolean) => {
  return (dispatch: Dispatch<NotesActions>) => {
    const updatedNotes = notesAPI.toggleIsNewErrorNoteDescription(id, status);
    dispatch({ type: NotesActionTypes.UPDATE_NOTES, payload: updatedNotes });
  };
};

export const deleteNoteItem = (id: number) => {
  return (dispatch: Dispatch<NotesActions>) => {
    const updatedNotes = notesAPI.deleteNoteItem(id);
    dispatch({ type: NotesActionTypes.UPDATE_NOTES, payload: updatedNotes });
  };
};

export const updateNoteTitle = (id: number, newTitle: string) => {
  return (dispatch: Dispatch<NotesActions>) => {
    const updatedNotes = notesAPI.updateNoteTitle(id, newTitle);
    dispatch({ type: NotesActionTypes.UPDATE_NOTES, payload: updatedNotes });
  };
};

export const updateNoteDescription = (id: number, newDescription: string) => {
  return (dispatch: Dispatch<NotesActions>) => {
    const updatedNotes = notesAPI.updateNoteDescription(id, newDescription);
    dispatch({ type: NotesActionTypes.UPDATE_NOTES, payload: updatedNotes });
  };
};

export const getNewTags = () => {
  return (dispatch: Dispatch<NotesActions>) => {
    const newTags = notesAPI.getNewTags();

    dispatch({
      type: NotesActionTypes.SET_NEW_TAGS,
      payload: newTags,
    });
  };
};

export const getTags = () => {
  return (dispatch: Dispatch<NotesActions>) => {
    const tags = notesAPI.getTags();

    dispatch({
      type: NotesActionTypes.SET_TAGS,
      payload: tags,
    });
  };
};
