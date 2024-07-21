import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InitialStateInterface {
  speed: number;
  gravity: number;
}

const initialState: InitialStateInterface = {
  speed: 8,
  gravity: 1,
};

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setSpeed: (state, action: PayloadAction<number>) => {
      state.speed = action.payload;
      if (state.speed < 2) {
        state.speed = 2;
      }
      if (state.speed > 10) {
        state.speed = 10;
      }
    },
    setGravity: (state, action: PayloadAction<number>) => {
      if(action.payload < 0.5){
        state.gravity = 0.5;
        return;
      }
      if(action.payload > 3){
        state.gravity = 3;
        return;
      }
      state.gravity = action.payload;
    },
    reset: (state) => {
      state.speed = 6;
      state.gravity = 1;
    },
  },
});

export const { setSpeed, setGravity, reset } = optionsSlice.actions;

export default optionsSlice.reducer;
