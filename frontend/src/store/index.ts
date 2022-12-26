import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import doctorReducer from './doctor';
import consultationsReducer from './consultations';

const reducer = combineReducers({
  doctor: doctorReducer,
  consultations: consultationsReducer,
});

const store = configureStore({ reducer });

export default store;
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
