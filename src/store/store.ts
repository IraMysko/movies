import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { moviesReducer } from './movies/reducer';
import { filtersReducer } from './filters/reducer';
import { authReducer } from './auth/reducer';

const rootReducer = combineReducers({
  movies: moviesReducer,
  filters: filtersReducer,
  auth: authReducer,
});

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk)),
);

export type RootState = ReturnType<typeof rootReducer>;
