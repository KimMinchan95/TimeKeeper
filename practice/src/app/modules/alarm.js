import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  info: {
    day: '',
    hour: '',
    minute: '',
    sound: ''
  }
};

export const alarmSlice = createSlice({
  name: 'alarm',
  initialState,
  reducers: {
    insertAlarm: (state, action) => {
      const alarm = {
        day: action.payload.day,
        hour: action.payload.hour,
        minute: action.payload.minute,
        sound: action.payload.sound
      };
      state.info = alarm;
    }
  }
});

export const { insertAlarm } = alarmSlice.actions;

export default alarmSlice.reducer;
