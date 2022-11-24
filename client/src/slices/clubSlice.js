import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import clubService from "./clubService";
const initialState = {
  clubs: [],
  isLoading: false,
  error: null,
  isSuccess: false,
  message: "",
  pageNumber: 1,
  loadMore: false,
  isClubDetailPage: false,
  currentClub: null,
};

// Create new club
export const createClub = createAsyncThunk(
  "club/create",
  async (clubData, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.accessToken;
      const { data } = await clubService.createClub(clubData, token);
      return data;
    } catch (error) {
      const message =
        (error && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

//Checkin a Club

export const checkIn = createAsyncThunk(
  "club/checkIn",
  async (clubId, thunkAPI) => {
    try {
      const token = thunkAPI.getState().auth.user.accessToken;
      const { data, message } = await clubService.checkIn(clubId, token);
      return { data, message };
    } catch (error) {
      const message =
        (error && error.response.data && error.response.data.message) ||
        error.message ||
        error.toString();
      return thunkAPI.rejectWithValue(message);
    }
  }
);

const clubSlice = createSlice({
  name: "club",
  initialState,
  reducers: {
    setIsClubDetailPage: (state, action) => {
      return { ...state, isClubDetailPage: action.payload };
    },

    resetIsSuccess: (state) => {
      return { ...state, isSuccess: false, message: "" };
    },
    resetError: (state) => {
      return { ...state, error: null, message: "" };
    },
    resetCurrentClub: (state) => {
      state.currentClub = null;
    },
    setLoadMore: (state) => {
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
      };
    },
    reset: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      .addCase(createClub.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(createClub.fulfilled, (state) => {
        return {
          ...state,
          isLoading: false,
          isSuccess: true,
          message: "Congrats! Your club has been created successfully",
        };
      })
      .addCase(createClub.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.message = action.payload;
      })

      .addCase(checkIn.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(checkIn.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.message = "Thank you! You have checked in successfully!";

        state.currentClub = action.payload.data;
      })
      .addCase(checkIn.rejected, (state, action) => {
        state.isLoading = false;
        state.isSuccess = false;
        state.error = action.payload;
        state.message = "Oops! Sorry. You could not checked in!";
      });
  },
});

export const {
  reset,
  setLoadMore,
  resetIsSuccess,
  resetError,
  setIsClubDetailPage,
  resetCurrentClub,
} = clubSlice.actions;

export default clubSlice.reducer;
