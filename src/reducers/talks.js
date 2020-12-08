import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

export const talks = createSlice({
  name: 'talks',
  initialState: {
    talks: [],
  },
  reducers: {
    setTalksData: (state, action) => {
      console.log('hej!');
      state.talks = action.payload;
    },
  },
});

export const fetchTalksData = () => {
  console.log('initialized!');
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch('https://tedtalks-by-karin.herokuapp.com/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        console.log('data fetched!');
        dispatch(talks.actions.setTalksData(json));
      });
    dispatch(ui.actions.setLoading(false));
  };
};
