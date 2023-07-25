import { INotesState, NotesActions, NotesActionTypes } from '../types/notes';

const initialState: INotesState = {
  newTitleBody: 'Enter the title of the note',
  newDescriptionBody: 'Enter the text',
  newTags: [],
  Notes: [],
  Tags: [],
  choosenTags: [],
};

const notesReducer = (state = initialState, action: NotesActions) => {
  switch (action.type) {
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
        Tags: [...new Set(state.Tags.concat(newNote.tags))],
      };
    default:
      return state;
  }
};

export default notesReducer;
