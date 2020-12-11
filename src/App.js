import React from 'react';
import { Provider } from 'react-redux';
import { combineReducers, configureStore } from '@reduxjs/toolkit';
import styled from 'styled-components';

// Reducers
import { talks } from './reducers/talks';
import { ui } from './reducers/ui';

// Components
import { Header } from './components/Header';
import { Navigation } from './components/Navigation';
import { TalksList } from './components/TalksList';
import { Loading } from './components/Loading';
import { FlexWrapper } from './styling/GlobalStyling';

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
      <Header />
      <TalksWrapper>
        <Loading />
        <TalksList />
      </TalksWrapper>
    </Provider>
  );
};

// ----------------------------------------------------------------

const TalksWrapper = styled.div`
  margin: 0px auto;
  width: 60vw;
  max-width: 600px;
  border-left: 1px solid #000;
`;

const MainWrapper = styled(FlexWrapper)`
  align-items: flex-start;
  margin-left: 30px;
`;
