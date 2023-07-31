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
  SET_NEW_TITLE = 'SET_NEW_TITLE',
  SET_NEW_DESCRIPTION = 'SET_NEW_DESCRIPTION',
  UPDATE_NEW_TITLE = 'UPDATE_NEW_TITLE',
  UPDATE_NEW_DESCRIPTION = 'UPDATE_NEW_DESCRIPTION',
}

export interface ISetNewTitle {
  type: NotesActionTypes.SET_NEW_TITLE;
  payload: string;
}

interface ISetNewDescription {
  type: NotesActionTypes.SET_NEW_DESCRIPTION;
  payload: string;
}

interface IUpdateNewTitle {
  type: NotesActionTypes.UPDATE_NEW_TITLE;
  payload: string;
}

interface IUpdateNewDescription {
  type: NotesActionTypes.UPDATE_NEW_DESCRIPTION;
  payload: string;
}

export type NotesActions =
  | ISetNewTitle
  | ISetNewDescription
  | IUpdateNewTitle
  | IUpdateNewDescription;
