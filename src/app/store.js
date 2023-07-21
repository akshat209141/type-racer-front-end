import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import authReducer from "../features/auth/authSlice"
import playerReducer from "../features/game/playerSlice"
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
    player:playerReducer,
  },
});
