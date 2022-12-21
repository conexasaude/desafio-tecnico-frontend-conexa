import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

import doctorReducer from './doctor'

const reducer = combineReducers({
    doctor: doctorReducer
});
  
const store = configureStore({ reducer });

export default store;
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch