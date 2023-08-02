import LocalKeys from '../types/enums/localKeys';
import { INote } from '../types/interfaces/INote';

export const notesAPI = {
  getNewTitle() {
    return localStorage.getItem(`${LocalKeys.KEY_NEW_TITLE}`) ?? '';
  },

  setNewTitle(value: string) {
    localStorage.setItem(`${LocalKeys.KEY_NEW_TITLE}`, value);
  },

  getNewDescription() {
    return localStorage.getItem(`${LocalKeys.KEY_NEW_DESCRIPTION}`) ?? '';
  },

  setNewDescription(value: string) {
    localStorage.setItem(`${LocalKeys.KEY_NEW_DESCRIPTION}`, value);
  },

  getIsNewErrorTitle() {
    const isNewErrorTitle = localStorage.getItem(`${LocalKeys.KEY_IS_NEW_ERROR_TITLE}`) ?? '';
    if (isNewErrorTitle === 'true') {
      return true;
    }
    if (isNewErrorTitle === 'false' || isNewErrorTitle === '') {
      return false;
    }
  },

  setIsNewErrorTitle(value: boolean) {
    localStorage.setItem(`${LocalKeys.KEY_IS_NEW_ERROR_TITLE}`, `${value}`);
  },

  toggleIsNewErrorTitle(value: boolean) {
    this.setIsNewErrorTitle(value);
    const isNewErrorTitle = this.getIsNewErrorTitle();
    return isNewErrorTitle;
  },

  getIsNewErrorDescription() {
    const isNewErrorDescription =
      localStorage.getItem(`${LocalKeys.KEY_IS_NEW_ERROR_DESCRIPTION}`) ?? '';
    if (isNewErrorDescription === 'true') {
      return true;
    }
    if (isNewErrorDescription === 'false' || isNewErrorDescription === '') {
      return false;
    }
  },

  setIsNewErrorDescription(value: boolean) {
    localStorage.setItem(`${LocalKeys.KEY_IS_NEW_ERROR_DESCRIPTION}`, `${value}`);
  },

  toggleIsNewErrorDescription(value: boolean) {
    this.setIsNewErrorDescription(value);
    const isNewErrorDescription = this.getIsNewErrorDescription();
    return isNewErrorDescription;
  },

  getNewNotes() {
    const notes: INote[] = JSON.parse(localStorage.getItem(`${LocalKeys.KEY_NOTES}`) ?? '[]');
    return notes;
  },

  setNewNotes(notes: INote[]) {
    localStorage.setItem(`${LocalKeys.KEY_NOTES}`, JSON.stringify(notes));
  },

  addNewNote(newNote: INote): INote[] {
    const notes = this.getNewNotes();
    newNote.id = notes.push(newNote);
    this.setNewNotes(notes);
    return notes;
  },

  toggleIsEditNote(id: number, status: boolean): INote[] {
    const notes: INote[] = this.getNewNotes();
    notes.map((item) => {
      if (item.id === id) {
        item.isEdit = status;
      }
      return item;
    });
    this.setNewNotes(notes);
    return notes;
  },

  toggleIsNewErrorNoteTitle(id: number, status: boolean): INote[] {
    const notes: INote[] = this.getNewNotes();
    notes.map((item) => {
      if (item.id === id) {
        item.isNewErrorNoteTitle = status;
      }
      return item;
    });
    this.setNewNotes(notes);
    return notes;
  },

  toggleIsNewErrorNoteDescription(id: number, status: boolean): INote[] {
    const notes: INote[] = this.getNewNotes();
    notes.map((item) => {
      if (item.id === id) {
        item.isNewErrorNoteDescription = status;
      }
      return item;
    });
    this.setNewNotes(notes);
    return notes;
  },

  deleteNoteItem(id: number): INote[] {
    const notes: INote[] = this.getNewNotes();
    const updatedNotes = notes.filter((item) => item.id !== id);
    this.setNewNotes(updatedNotes);
    return updatedNotes;
  },

  updateNoteTitle(id: number, newTtile: string): INote[] {
    const notes: INote[] = this.getNewNotes();
    notes.map((item) => {
      if (item.id === id) {
        item.title = newTtile;
      }
      return item;
    });
    this.setNewNotes(notes);
    return notes;
  },

  updateNoteDescription(id: number, newDescription: string): INote[] {
    const notes: INote[] = this.getNewNotes();
    notes.map((item) => {
      if (item.id === id) {
        item.description = newDescription;
      }
      return item;
    });
    this.setNewNotes(notes);
    return notes;
  },

  getNewTags() {
    const newTags: string[] = JSON.parse(localStorage.getItem(`${LocalKeys.KEY_NEW_TAGS}`) ?? '[]');
    return newTags;
  },

  getTags() {
    const tags: string[] = JSON.parse(localStorage.getItem(`${LocalKeys.KEY_TAGS}`) ?? '[]');
    return tags;
  },
};
