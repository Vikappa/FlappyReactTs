import { configureStore, combineReducers } from '@reduxjs/toolkit';
import optionsReducer, { InitialStateInterface } from '../reducers/optionsSlice'; 

const rootReducer = combineReducers({
  options: optionsReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = {
  options: InitialStateInterface;
};

export default store;
