import { createSlice } from '@reduxjs/toolkit';

export interface flapInterface {
  flap: boolean;
  flapPower: number;
  gameover:boolean
}

export interface InitialFlapState {
  flap: boolean;
  flapPower: number;
  gameover:boolean  
}

const initialWingPosition: InitialFlapState = {
    flap:false,
    flapPower:0,
    gameover:false
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
    },
    setGameover(state){
        state.gameover = true;
    },
    setRestart(state){
        state.gameover = false;
    }
  }
})

export const { doFlap, flapDown, flapUp, setGameover, setRestart} = birdSlice.actions;

export default birdSlice.reducer;
