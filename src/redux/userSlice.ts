import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface UserSLice {
  id: number;
  email: string;
  password: string;
  isLogged: boolean;
}
export type UsersFromSlice = {
  user: UserSLice[];
};

const initialState: UserSLice[] = [
  { id: 1, email: "matekmatek@pl", password: "matek", isLogged: false },
  { id: 2, email: "dsmatekmatek@pl", password: "maafdwatek", isLogged: true },
  {
    id: 3,
    email: "dadsamatekmatek@pl",
    password: "matdsadsaek",
    isLogged: false,
  },
  {
    id: 4,
    email: "madsadsatekmatek@pl",
    password: "madsadastek",
    isLogged: false,
  },
];

export const userSlice = createSlice({
  initialState,
  name: "userSlice",
  reducers: {
    registerUser: (state, action) => {
      return [
        ...state,
        {
          email: action.payload.email,
          password: action.payload.password,
          isLogged: false,
          id: state.length + 1,
        },
      ];
    },
    loginUser: (
      state,
      action: PayloadAction<{ password: string; email: string }>
    ) => {
      const newArray = state.filter((el) => {
        return (
          el.password === action.payload.password &&
          el.email === action.payload.email
        );
      });

      if (newArray.length === 0) {
        return state;
      } else {
        const newArrayHelper = newArray.forEach((el) => (el.isLogged = true));
        return newArrayHelper;
      }
    },

    logoutUser: (state) => {
      state.map((el) => (el.isLogged = false));
      return state;
    },
  },
});

export const { registerUser, loginUser, logoutUser } = userSlice.actions;

export default userSlice.reducer;
