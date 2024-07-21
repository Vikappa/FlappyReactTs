import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface InitialStateInterface {
  speed: number;
  gravity: number;
}

const initialState: InitialStateInterface = {
  speed: 6,
  gravity: 1,
};

const optionsSlice = createSlice({
  name: 'options',
  initialState,
  reducers: {
    setSpeed: (state, action: PayloadAction<number>) => {
      state.speed = action.payload;
    },
    setGravity: (state, action: PayloadAction<number>) => {
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
