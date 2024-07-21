import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface positionPayload {
  X: number;
  Y: number;
}

export interface InitialStateInterface {
  X: number;
  Y: number;
}

const initialState: InitialStateInterface = {
  X: 8,
  Y: 1,
};

const birdSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setPosition: (state, action: PayloadAction<positionPayload>) => {
        state.Y = action.payload.X;
        state.X = action.payload.Y;
    }
  },
});

export const { setPosition } = birdSlice.actions;

export default birdSlice.reducer;
