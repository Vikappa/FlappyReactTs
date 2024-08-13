import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InitialStateInterface {
  speed: number;
  gravity: number;
  points: number;
  pointsEditable: boolean;
}

const initialState: InitialStateInterface = {
  speed: 6,
  gravity: 1,
  points: 0,
  pointsEditable: false,
};

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setSpeed: (state, action: PayloadAction<number>) => {
      state.speed = action.payload;
      if (state.speed < 3) {
        state.speed = 3;
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
      state.pointsEditable = true;
    },
    addPoints: (state, action: PayloadAction<number>) => {
      if (state.pointsEditable) {
        state.points += action.payload;
      }
    },
    resetPoints: (state) => {
      state.points = 0;
      state.pointsEditable = true
    },
    setPointsEditable: (state, action: PayloadAction<boolean>) => {
      state.pointsEditable = action.payload;
    }
  },
});

export const { setSpeed, setGravity, reset, addPoints, resetPoints, setPointsEditable } = optionsSlice.actions;

export default optionsSlice.reducer;
