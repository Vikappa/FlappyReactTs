import { configureStore, combineReducers } from '@reduxjs/toolkit';
import optionsReducer, { InitialStateInterface } from '../reducers/optionsSlice'; 
import birdReducer, { InitialBirdPositionState } from '../reducers/birdSlice';
import flapReducer, { InitialFlapState } from '../reducers/flapReducer';

const rootReducer = combineReducers({
  options: optionsReducer,
  bird: birdReducer,
  flapflap: flapReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export type AppDispatch = typeof store.dispatch;
export type RootState = {
  options: InitialStateInterface,
  bird: InitialBirdPositionState,
  flapflap: InitialFlapState
};

export default store;
