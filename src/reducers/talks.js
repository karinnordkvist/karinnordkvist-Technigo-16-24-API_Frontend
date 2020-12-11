import { createSlice } from '@reduxjs/toolkit';
import { ui } from './ui';

export const talks = createSlice({
  name: 'talks',
  initialState: {
    talks: [],
  },
  reducers: {
    setTalksData: (state, action) => {
      state.talks = action.payload.data;
    },
  },
});

export const fetchTalksData = (url) => {
  return (dispatch) => {
    dispatch(ui.actions.setLoading(true));
    fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((res) => res.json())
      .then((json) => {
        dispatch(talks.actions.setTalksData(json));
      });
    dispatch(ui.actions.setLoading(false));
  };
};
