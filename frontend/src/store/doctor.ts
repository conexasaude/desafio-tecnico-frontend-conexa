import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { doctorLogin, DoctorLoginRequest } from 'infrastructure/conexaApi';
import { updateStateHelper } from 'utils/helpers';

export interface DoctorState {
  loading: boolean;
  success: boolean | null;
  name: string;
  token: string;
}

const initialState: DoctorState = {
  loading: false,
  success: null,
  name: sessionStorage.getItem('doctorName') || '',
  token: sessionStorage.getItem('doctorToken') || '',
};

export const login = createAsyncThunk(
  'doctor/login',
  async (data: DoctorLoginRequest) => {
    const response = await doctorLogin(data);
    return response;
  }
);

const doctorSlice = createSlice({
  name: 'doctor',
  initialState,
  reducers: {
    setDoctor: (state, action) => action.payload,
    clearDoctor: () => {
      sessionStorage.clear();
      return { ...initialState, name: '', token: '' };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(login.pending, (state) => {
      updateStateHelper(state, { ...initialState, loading: true });
    });
    builder.addCase(login.fulfilled, (state, action) => {
      const { name, token } = action.payload;
      sessionStorage.setItem('doctorName', name);
      sessionStorage.setItem('doctorToken', token);
      updateStateHelper(state, { ...initialState, success: true, name, token });
    });
    builder.addCase(login.rejected, (state) => {
      updateStateHelper(state, { ...initialState, success: false });
    });
  },
});

export const { setDoctor, clearDoctor } = doctorSlice.actions;
export default doctorSlice.reducer;
