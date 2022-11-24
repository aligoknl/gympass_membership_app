import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { url } from "./api";

const initialState = {
  isLoading: false,
  myClubs: [],
  myCheckIns: [],
  error: null,
};

// get all clubs created by the admin
export const getClubsByUser = createAsyncThunk(
  "userData/myClubs",
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.user.accessToken;
      const res = await axios.get(`${url}/api/club/myClubs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.data;
    } catch (error) {
      const message =
        "Oops... Something went wrong. We cannot show the clubs now.";
      return rejectWithValue(message);
    }
  }
);

// get all checkins done by the current member
export const getCheckInsByUser = createAsyncThunk(
  "userData/myCheckIns",
  async (_, { rejectWithValue, getState }) => {
    try {
      const token = getState().auth.user.accessToken;
      const res = await axios.get(`${url}/api/club/checkIns`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      return res.data.data;
    } catch (error) {
      const message =
        "Oops... Something went wrong. We cannot show the clubs now.";
      return rejectWithValue(message);
    }
  }
);

const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder.addCase(getClubsByUser.pending, (state) => {
      return { ...state, isLoading: true, error: null };
    });
    builder.addCase(getClubsByUser.rejected, (state, action) => {
      return { ...state, isLoading: false, error: action.payload };
    });
    builder.addCase(getClubsByUser.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        myCheckIns: [],
        myClubs: action.payload,
      };
    });
    builder.addCase(getCheckInsByUser.pending, (state) => {
      return { ...state, isLoading: true, error: null };
    });
    builder.addCase(getCheckInsByUser.rejected, (state, action) => {
      return { ...state, isLoading: false, error: action.payload };
    });
    builder.addCase(getCheckInsByUser.fulfilled, (state, action) => {
      return {
        ...state,
        isLoading: false,
        myClubs: [],
        myCheckIns: action.payload,
      };
    });
  },
});

export const { reset } = userDataSlice.actions;
export default userDataSlice.reducer;
