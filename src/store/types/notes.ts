import { INote } from '../../types/interfaces/INote';

export interface INotesState {
  newTitleBody: string;
  newDescriptionBody: string;
  newTags: string[];
  isNewErrorTitle: boolean;
  isNewErrorDescription: boolean;
  Notes: INote[];
  Tags: string[];
  choosenTags: string[];
}

export enum NotesActionTypes {
  //ADD_NOTE = 'ADD_NOTE',
  SET_NEW_TITLE = 'SET_NEW_TITLE',
  SET_NEW_DESCRIPTION = 'SET_NEW_DESCRIPTION',
  /*
  SET_NEW_TAGS = 'SET_NEW_TAGS',
  SET_IS_NEW_ERROR_TITLE = 'SET_IS_NEW_ERROR_TITLE',
  SET_IS_NEW_ERROR_DESCRIPTION = 'SET_IS_NEW_ERROR_DESCRIPTION',
  SET_NOTES = 'SET_NOTES',
  SET_TAGS = 'SET_TAGS',
  SET_CHOOSEN_TAGS = 'SET_CHOOSEN_TAGS',*/
}

/*
interface IAddNoteAction {
  type: NotesActionTypes.ADD_NOTE;
}
*/
export interface ISetNewTitle {
  type: NotesActionTypes.SET_NEW_TITLE;
  payload: string;
}

interface ISetNewDescription {
  type: NotesActionTypes.SET_NEW_DESCRIPTION;
  payload: string;
}

/*
interface ISetNewTags {
  type: NotesActionTypes.SET_NEW_TAGS;
  payload: string[];
}

interface ISetIsNewErrorTitle {
  type: NotesActionTypes.SET_IS_NEW_ERROR_TITLE;
  payload: boolean;
}

interface ISetIsNewErrorDescription {
  type: NotesActionTypes.SET_IS_NEW_ERROR_DESCRIPTION;
  payload: boolean;
}

interface ISetNotes {
  type: NotesActionTypes.SET_NOTES;
  payload: INote[];
}

interface ISetTags {
  type: NotesActionTypes.SET_TAGS;
  payload: string[];
}

interface ISetChoosenTags {
  type: NotesActionTypes.SET_CHOOSEN_TAGS;
  payload: string[];
}
*/
export type NotesActions = ISetNewTitle | ISetNewDescription;
