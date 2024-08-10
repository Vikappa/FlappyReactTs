import { createSlice } from '@reduxjs/toolkit';

export interface flapInterface {
  flap: boolean;
}

export interface InitialFlapState {
  flap: boolean;
}

const initialWingPosition: InitialFlapState = {
    flap:false,
};

const birdSlice = createSlice({
  name: 'flapState',
  initialState: initialWingPosition,
  reducers: {
    doFlap(state){
        const flapping = state.flap;
        state.flap = !flapping;
    },
    flapUp(state){
        state.flap = true;
    },
    flapDown(state){
        state.flap = false;
    }
  },
});

export const { doFlap, flapDown, flapUp } = birdSlice.actions;

export default birdSlice.reducer;
