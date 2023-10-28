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
import GuestLogin from './pages/GuestLogin';

function App() {
  return (
    <div className="App ">
      <Navbar />
      <BrowserRouter>
        <div className="">
          <Routes>
            <Route
              path="/"
              element={<Dashboard />}
            />
            <Route
              path="/projects"
              element={<Projects />}
            />
            <Route
              path="/projects/:projectId"
              element={<ProjectPage />}
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
              element={<GuestLogin />}
            />
            <Route
              path="/tickets"
              element={<AllTickets  />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
