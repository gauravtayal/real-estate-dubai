import { createSlice } from "@reduxjs/toolkit";

interface initialState {
  user: {
    email: string;
    accountType: string;
    token: string;
  };
}

const initialState: initialState = {
  user: {
    email: "",
    accountType: "",
    token: "",
  },
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
});

export default userSlice.reducer;
