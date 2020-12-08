import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';

// Reducers
import { talks } from './reducers/talks';
import { ui } from './reducers/ui';

// Components
import { TalksList } from './components/TalksList';

// ----------------------------------------------------------------

const reducer = combineReducers({
  talks: talks.reducer,
  ui: ui.reducer,
});

const store = configureStore({ reducer });

// ----------------------------------------------------------------

export const App = () => {
  return (
    <Provider store={store}>
      <TalksList />
    </Provider>
  );
};
