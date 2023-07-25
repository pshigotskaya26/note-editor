import { INote } from '../../types/interfaces/INote';

export interface INotesState {
  newTitleBody: string;
  newDescriptionBody: string;
  newTags: string[];
  Notes: INote[];
  Tags: string[];
  choosenTags: string[];
}

export enum NotesActionTypes {
  ADD_NOTE = 'ADD_NOTE',
}

interface IAddNoteAction {
  type: NotesActionTypes.ADD_NOTE;
}

export type NotesActions = IAddNoteAction;
