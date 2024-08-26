import { createSlice } from "@reduxjs/toolkit"
import {toast} from 'react-toastify'


const initialState = {
  user : {username : 'codict addict'},
  theme : 'dracula',
}


const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    loginUser: (state) => {
      console.log("log in");
    },
    logoutUser: (state) => {
      console.log("log in");
    },
    toggleTheme : (state) => {
      console.log('theme')
    }
  },
});

export const {loginUser,logoutUser,toggleTheme} = userSlice.actions

export default userSlice.reducer;

