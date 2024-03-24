import {configureStore} from '@reduxjs/toolkit';
import homeSlice from './Home.Reducer';

const rootStore = configureStore({
  reducer: {
    homeSlice,
  },
});

export default rootStore;
