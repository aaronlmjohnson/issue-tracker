import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Root from "./routes/Root";
import { AuthContextProvider } from './context/AuthContext';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import ErrorPage from './pages/errorPages/ErrorPage';
import SignUp from './pages/SignUp';
import GuestLoginPage from './pages/GuestLoginPage';
import UsersPage from './pages/UsersPage';
import UserDetail from './components/UserDetail';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "/sign-up",
    element: <SignUp page={"signup"}/>,
  },
  {
    path: "/login",
    element: <SignUp page={"login"}/>,
  },
  {
    path: "/guest-login",
    element: <GuestLoginPage />,
  },
  {
    path:"/users",
    element: <UsersPage />
  },
  {
    path:"/users/:userId",
    element: <UserDetail />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>

);

