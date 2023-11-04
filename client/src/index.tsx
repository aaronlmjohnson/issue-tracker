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
import Dashboard from './pages/Dashboard';
import ProjectsPage from './pages/ProjectsPage';
import ProjectPage from './pages/ProjectPage';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path:"/dashboard",
        element: <Dashboard />
      },
      {
        path:"/users",
        element: <UsersPage />
      },
      {
        path:"/users/:userId",
        element: <UserDetail />
      },
      {
        path:"/projects",
        element: <ProjectsPage />
      },
      {
        path:"/projects/:projectId",
        element: <ProjectPage />
      }
    ]
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
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <React.StrictMode>
    <AuthContextProvider>
      <RouterProvider router={router} />
    </AuthContextProvider>

);

