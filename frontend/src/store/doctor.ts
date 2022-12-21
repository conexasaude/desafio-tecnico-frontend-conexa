import { createSlice } from '@reduxjs/toolkit';

export interface DoctorState {
  name: string;
  token: string;
}

const initialState: DoctorState = {
  name: '',
  token: 'simple-token-example',
};

const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
    setDoctor: (state, action) => action.payload,
  },
});

export const { setDoctor } = doctorSlice.actions;
export default doctorSlice.reducer;
