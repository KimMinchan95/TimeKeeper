import { configureStore } from '@reduxjs/toolkit';
import alarm from './modules/alarm';

export default configureStore({
  reducer: {
    alarm
  }
});
