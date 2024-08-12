import { createSlice } from '@reduxjs/toolkit';

export interface flapInterface {
  flap: boolean;
  flapPower: number;
  gameover:boolean | null
}

export interface InitialFlapState {
  flap: boolean;
  flapPower: number;
  gameover:boolean | null 
}

const initialWingPosition: InitialFlapState = {
    flap:false,
    flapPower:0,
    gameover: null
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

      if (state.flapPower > 5) {
        state.flapPower = 5;
      }
        if(state.flapPower <= 0){
        state.flap = false
        }
    },
    setGameover(state){
        state.gameover = true;
    },
    setRestart(state){
        state.gameover = false;
        state.flap = false;
        state.flapPower = 0;
    }
  }
})

export const { doFlap, flapDown, flapUp, setGameover, setRestart} = birdSlice.actions;

export default birdSlice.reducer;
