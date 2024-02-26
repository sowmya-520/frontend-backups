import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userid: null,
};

export const CustomerIdSlice = createSlice({
  name: "userid",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.userid = action.payload;
      console.log(state.userid)
    },
  },
});

export const fetchUserId = (username) => async (dispatch) => {
  try {
    const response = await fetch(`http://localhost:8000/username/${username}`, {
      method: "GET",
    });

    if (response.ok) {
      const userids = await response.json();
      dispatch(setUserId(userids.id));
      console.log(userids.id)
    }
  } catch (error) {
    console.log("An error occurred:", error);
  }
};

export const {setUserId}=CustomerIdSlice.actions;
export const CustomerIdReducer=CustomerIdSlice.reducer;
