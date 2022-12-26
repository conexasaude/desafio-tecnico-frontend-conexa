import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import {
  Consultation,
  createPatientAndConsultation,
  CreatePatientAndConsultationRequest,
  fetchConsultationList,
} from '../infrastructure/conexaApi';
import { updateStateHelper } from 'utils/helpers';

export interface ConsultationsState {
  loading: boolean;
  success: boolean | null;
  createError: boolean;
  consultationList: Consultation[];
}

const initialState: ConsultationsState = {
  loading: false,
  success: null,
  createError: false,
  consultationList: [],
};

export const fetch = createAsyncThunk(
  'consultations/fetch',
  (_, thunkAPI: any) => {
    return fetchConsultationList(thunkAPI.getState().doctor.token);
  }
);

export const create = createAsyncThunk(
  'consultations/create',
  (data: CreatePatientAndConsultationRequest, thunkAPI: any) => {
    return createPatientAndConsultation(data, thunkAPI.getState().doctor.token);
  }
);

const consultationsSlice = createSlice({
  name: 'consultations',
  initialState,
  reducers: {
    setConsultations: (state, action) => action.payload,
    clearError: (state) => ({
      ...initialState,
      consultationList: state.consultationList,
    }),
  },
  extraReducers: (builder) => {
    builder.addCase(fetch.pending, (state) => {
      updateStateHelper(state, { ...initialState, loading: true });
    });
    builder.addCase(fetch.fulfilled, (state, action) => {
      updateStateHelper(state, {
        ...initialState,
        success: true,
        consultationList: action.payload,
      });
    });
    builder.addCase(fetch.rejected, (state) => {
      updateStateHelper(state, { ...initialState, success: false });
    });

    builder.addCase(create.pending, (state) => {
      updateStateHelper(state, { ...initialState, loading: true });
    });
    builder.addCase(create.fulfilled, (state) => {
      updateStateHelper(state, { ...initialState, loading: false });
    });
    builder.addCase(create.rejected, (state) => {
      updateStateHelper(state, {
        ...initialState,
        success: false,
        createError: true,
      });
    });
  },
});

export const { setConsultations, clearError } = consultationsSlice.actions;
export default consultationsSlice.reducer;
