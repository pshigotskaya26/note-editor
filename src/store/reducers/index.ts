import { combineReducers } from 'redux';
import notesReducer from './notes-reducer';

export const rootReducer = combineReducers({
  notesPage: notesReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
