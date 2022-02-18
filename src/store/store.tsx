import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import joksSlice from './joksReducer/joksSlice';

const reducer = combineReducers({
  joks: joksSlice,
})

const store = configureStore({
  reducer,
})

export default store;
