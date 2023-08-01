import { INote } from '../../types/interfaces/INote';

export interface INotesState {
  newTitleBody: string;
  newDescriptionBody: string;
  newTags: string[];
  isNewErrorTitle: boolean;
  isNewErrorDescription: boolean;
  notes: INote[];
  tags: string[];
  choosenTags: string[];
}

export enum NotesActionTypes {
  SET_NEW_TITLE = 'SET_NEW_TITLE',
  SET_NEW_DESCRIPTION = 'SET_NEW_DESCRIPTION',
  SET_NEW_NOTES = 'SET_NEW_NOTES',
  UPDATE_NEW_TITLE = 'UPDATE_NEW_TITLE',
  UPDATE_NEW_DESCRIPTION = 'UPDATE_NEW_DESCRIPTION',
  UPDATE_NOTES = 'UPDATE_NOTES',
  TOGGLE_IS_NEW_ERROR_TITLE = 'TOGGLE_IS_NEW_ERROR_TITLE',
  TOGGLE_IS_NEW_ERROR_DESCRIPTION = 'TOGGLE_IS_NEW_ERROR_DESCRIPTION',
}

export interface ISetNewTitle {
  type: NotesActionTypes.SET_NEW_TITLE;
  payload: string;
}

interface ISetNewDescription {
  type: NotesActionTypes.SET_NEW_DESCRIPTION;
  payload: string;
}

interface ISetNewNotes {
  type: NotesActionTypes.SET_NEW_NOTES;
  payload: INote[];
}

interface IUpdateNewTitle {
  type: NotesActionTypes.UPDATE_NEW_TITLE;
  payload: string;
}

interface IUpdateNewDescription {
  type: NotesActionTypes.UPDATE_NEW_DESCRIPTION;
  payload: string;
}

interface IUpdateNotes {
  type: NotesActionTypes.UPDATE_NOTES;
  payload: INote[];
}

interface IToggleIsNewErrorTitle {
  type: NotesActionTypes.TOGGLE_IS_NEW_ERROR_TITLE;
  payload: boolean;
}

interface IToggleIsNewErrorDescription {
  type: NotesActionTypes.TOGGLE_IS_NEW_ERROR_DESCRIPTION;
  payload: boolean;
}

export type NotesActions =
  | ISetNewTitle
  | ISetNewDescription
  | ISetNewNotes
  | IUpdateNewTitle
  | IUpdateNewDescription
  | IUpdateNotes
  | IToggleIsNewErrorTitle
  | IToggleIsNewErrorDescription;
