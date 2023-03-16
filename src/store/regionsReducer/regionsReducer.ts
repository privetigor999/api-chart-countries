//@ts-nocheck

import { createSlice } from "@reduxjs/toolkit";
import { IRegions } from "../../types/country";
import { fetchRegions } from "./actionReducer";

interface IStateProps {
  status: "idle" | "loading" | "success" | "error";
  errorMessage: string;
  regions: IRegions[];
}

const initialState: IStateProps = {
  status: "idle",
  errorMessage: "",
  regions: [],
};

const regionsSlice = createSlice({
  name: "regions",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchRegions.pending, (state) => {
      state.errorMessage = "";
      state.status = "loading";
    });
    builder.addCase(fetchRegions.fulfilled, (state, action) => {
      state.status = "success";
      state.regions = action.payload;
    });

    builder.addCase(fetchRegions.rejected, (state, action) => {
      state.regions = [];
      state.errorMessage = action.payload;
      state.status = "error";
    });
  },
});

export default regionsSlice.reducer;
