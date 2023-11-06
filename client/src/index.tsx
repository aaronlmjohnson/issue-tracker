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
import AllTickets from './pages/AllTickets';

/* make sure to embed forms as children under respective parents ex. project form under project route */
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index:true,
        path:"/",
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
      },
      {
        path:"/tickets",
        element: <AllTickets />
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

