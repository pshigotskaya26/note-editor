import { INotesState, NotesActions, NotesActionTypes } from '../types/notes';

const initialState: INotesState = {
  newTitleBody: '',
  newDescriptionBody: '',
  newTags: [],
  isNewErrorTitle: false,
  isNewErrorDescription: false,
  notes: [],
  tags: [],
  choosenTags: [],
};

const notesReducer = (state = initialState, action: NotesActions): INotesState => {
  switch (action.type) {
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

    case NotesActionTypes.SET_NEW_NOTES:
    case NotesActionTypes.UPDATE_NOTES:
      return {
        ...state,
        notes: action.payload,
      };

    case NotesActionTypes.SET_NEW_TAGS:
      return {
        ...state,
        newTags: action.payload,
      };

    case NotesActionTypes.SET_TAGS:
      return {
        ...state,
        tags: action.payload,
      };

    default:
      return state;
  }
};

export default notesReducer;
