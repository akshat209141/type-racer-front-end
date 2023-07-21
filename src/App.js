import React from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import AboutUsPage from './pages/AboutUsPage';
import SinglePlayerPage from './pages/singlePlayerPage';
import singlePlayer from"./features/game/singlePlayer"
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element:<HomePage></HomePage>,
  },
  {
    path: "/login",
    element: <LoginPage></LoginPage>,
  },
  {
    path: "/signup",
    element: <SignupPage></SignupPage>,
  },
  {
    path: "/about",
    element: <AboutUsPage></AboutUsPage>,
  },
  {
    path: "/singleplayer",
    element: <singlePlayer></singlePlayer>,
  },
]);
function App() {
  return (
    <div className="App">
    <RouterProvider router={router} />
    </div>
  );
}

export default App;
