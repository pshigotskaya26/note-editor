import { INotesState, NotesActions, NotesActionTypes } from '../types/notes';

const initialState: INotesState = {
  newTitleBody: '',
  newDescriptionBody: '',
  newTags: [],
  isNewErrorTitle: false,
  isNewErrorDescription: false,
  Notes: [],
  Tags: [],
  choosenTags: [],
};

const notesReducer = (state = initialState, action: NotesActions): INotesState => {
  switch (action.type) {
    /*
    case NotesActionTypes.ADD_NOTE:
      const newNote = {
        id: state.Notes.length + 1,
        title: state.newTitleBody,
        description: state.newDescriptionBody,
        tags: state.newTags,
        isEdit: false,
      };

      return {
        ...state,
        newTitleBody: '',
        newDescriptionBody: '',
        newTags: [],
        Notes: [...state.Notes, newNote],
        Tags: [...new Set([...state.Tags].concat(newNote.tags))],
      };
*/
    case NotesActionTypes.SET_NEW_TITLE:
    case NotesActionTypes.UPDATE_NEW_TITLE:
      return {
        ...state,
        newTitleBody: action.payload,
      };

    case NotesActionTypes.SET_NEW_DESCRIPTION:
    case NotesActionTypes.UPDATE_NEW_DESCRIPTION:
      return {
        ...state,
        newDescriptionBody: action.payload,
      };

    case NotesActionTypes.TOGGLE_IS_NEW_ERROR_TITLE:
      return {
        ...state,
        isNewErrorTitle: action.payload,
      };

    case NotesActionTypes.TOGGLE_IS_NEW_ERROR_DESCRIPTION:
      return {
        ...state,
        isNewErrorDescription: action.payload,
      };
    default:
      return state;
  }
};

export default notesReducer;
