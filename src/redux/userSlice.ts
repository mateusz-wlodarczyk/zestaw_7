import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserSLice {
  email: string;
}
export type UsersFromSlice = {
  user: UserSLice[];
};

const initialState: UserSLice[] = [{ email: "matekmatek@pl" }];

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    loginUser: (state, action: PayloadAction<{ email: string }>) => {
      return [...state, action.payload];
    },

    logoutUser: () => {
      return initialState;
    },
  },
});

export const { loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
