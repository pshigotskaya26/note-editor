import LocalKeys from '../types/enums/localKeys';

export const notesAPI = {
  getNewTitle() {
    return localStorage.getItem(`${LocalKeys.KEY_NEW_TITLE}`) ?? '';
  },
};
