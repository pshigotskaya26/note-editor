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
};
