import { createSlice } from '@reduxjs/toolkit';

export interface flapInterface {
  flap: boolean;
  flapPower: number;
}

export interface InitialFlapState {
  flap: boolean;
  flapPower: number;
}

const initialWingPosition: InitialFlapState = {
    flap:false,
    flapPower:0
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
        state.flapPower += 10
    },
    flapDown(state, action: { payload: number }) {
      state.flapPower -= action.payload;
      if (state.flapPower < -10) {
            state.flapPower = -10;
        }
        if(state.flapPower == 0){
        state.flap = false
        }
    }
  }
})

export const { doFlap, flapDown, flapUp } = birdSlice.actions;

export default birdSlice.reducer;
