import { createSlice } from "@reduxjs/toolkit";

export const multiFormSlice = createSlice({
    name:"form",
    initialState: {
        step: 1,
        patientDetails: {
          basicDetails: {},
          legalDocuments: {},
          demographics: {},
        },
        assignedResources: {},
        doctorTestReport: {},
      },
      reducers: {
        updateStep: (state, action) => {
          state.step = action.payload;
        },
        updatePatientDetails: (state, action) => {
          state.patientDetails = { ...state.patientDetails, ...action.payload };
        },
        updateAssignedResources: (state, action) => {
          state.assignedResources = action.payload;
        },
        updateDoctorTestReport: (state, action) => {
          state.doctorTestReport = action.payload;
        },
      },
    });


export const {
    updateStep,
    updatePatientDetails,
    updateAssignedResources,
    updateDoctorTestReport,
  } = multiFormSlice.actions;

export default multiFormSlice.reducer