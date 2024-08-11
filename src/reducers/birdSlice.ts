import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface positionPayload {
  X: number;
  Y: number;
}

export interface InitialBirdPositionState {
  X: number;
  Y: number;
}

const initialState: InitialBirdPositionState = {
  X: 0,
  Y: 80,
};

const birdSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setPosition: (state, action: PayloadAction<positionPayload>) => {
      if(action.payload.Y < 0){
        state.Y = 0
        state.X = action.payload.X;     
      } else {
        state.X = action.payload.X;
        state.Y = action.payload.Y;
      }
        
    }
  },
});

export const { setPosition } = birdSlice.actions;

export default birdSlice.reducer;
