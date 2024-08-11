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
  Y: 220,
};

const birdSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setPosition: (state, action: PayloadAction<positionPayload>) => {
        state.X = action.payload.X;
        state.Y = action.payload.Y;
    }
  },
});

export const { setPosition } = birdSlice.actions;

export default birdSlice.reducer;
