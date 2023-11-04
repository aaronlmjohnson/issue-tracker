import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import ProjectPage from './pages/ProjectPage';
import AllTickets from './pages/AllTickets';
import UserDetail from './components/UserDetail';
import UsersPage from './pages/UsersPage';
import GuestLoginPage from './pages/GuestLoginPage';
import Page401 from './pages/errorPages/401';

function App() {
  return (
    <div className="App ">
      <Navbar />

    </div>
  );
}


/*
      <BrowserRouter>
        <div className="">
          <Routes>
            <Route
              path="/"
              element={<Dashboard />}
            />
            <Route
              path="/401"
              element={<Page401 />}
            />
            <Route
              path="/users"
              element={<UsersPage />}
            />
            <Route
              path="/users/:userId"
              element={<UserDetail />}
            />
            <Route
              path="/sign-up"
              element={<SignUp  page={"signup"}/>}
            />
            <Route
              path="/login"
              element={<SignUp  page={"login"}/>}
            />
            <Route
              path="/guest-login"
              element={<GuestLoginPage />}
            />
            <Route
              path="/tickets"
              element={<AllTickets  />}
            />
            <Route
              path="/projects"
              element={<Projects />}
            />
            <Route
              path="/projects/:projectId"
              element={<ProjectPage />}
            />
            
          </Routes>
        </div>
      </BrowserRouter>
*/
export default App;
