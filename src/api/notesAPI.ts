import LocalKeys from '../types/enums/localKeys';

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
};
