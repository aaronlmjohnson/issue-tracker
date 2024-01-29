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
import ProjectsPage from './pages/ProjectsPage';
import ProjectDetail from './pages/ProjectDetail';
import TicketsPage from './pages/TicketsPage';
import Page401 from './pages/errorPages/401';
import { ActiveFormContextProvider } from './context/ActiveFormContext';
import TicketDetail from './components/TicketDetail';
import ActivityFeed from './components/ActivityFeed';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index:true,
        path:"/",
        element: <ActivityFeed />
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
        element: <ProjectDetail />,
        children:[
          {
            element: <TicketDetail />,
            path:"/projects/:projectId/tickets/:ticketId"
          }
        ]
      },
      {
        path:"/tickets",
        element: <TicketsPage />,
        children: [
          {
            element: <TicketDetail />,
            path:"/tickets/:ticketId"
          }
        ]
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
  {
    path: "/401",
    element: <Page401 />,
  }
])

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  // <React.StrictMode>

    <AuthContextProvider>
      <ActiveFormContextProvider>
        <RouterProvider router={router} />
      </ActiveFormContextProvider>
    </AuthContextProvider>

);