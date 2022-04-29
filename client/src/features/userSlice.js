import { createSlice } from "@reduxjs/toolkit";
import appApi from "../services/appApi";

export const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
      addNoitifications: (state, { payload }) => { },
      resetNoitifications: (state, { payload }) => {},
    },
  
    extraReducers: (builder) => {
      // saves user during signup
        builder.addMatcher(appApi.endpoints.signupUser.matchFulfilled, (state, { payload }) => payload)
        // saves user after loguin
        builder.addMatcher(appApi.endpoints.loginUser.matchFulfilled, (state, { payload }) => payload)
        // logout user
        builder.addMatcher(appApi.endpoints.logoutUser.matchFulfilled, () => null)
  }
});

export const { addNoitifications, resetNoitifications } = userSlice.actions
export default userSlice.reducer;