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
      return {
        ...state,
        newTitleBody: action.payload,
      };

    case NotesActionTypes.SET_NEW_DESCRIPTION:
      return {
        ...state,
        newDescriptionBody: action.payload,
      };
    default:
      return state;
  }
};

export default notesReducer;
