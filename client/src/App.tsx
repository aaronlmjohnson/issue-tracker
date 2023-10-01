import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import CreateProject from './pages/CreateProject';

function App() {
  return (
    <div className="App ">
      <Navbar />
      <BrowserRouter>
        <div className="pages flex ">
          <Sidebar links={[{name:"All Projects", url:"/projects"}, {name: "Create Project", url:"/projects/create"}]}/>
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
              path="/sign-up"
              element={<SignUp  page={"signup"}/>}
            />
            <Route
              path="/login"
              element={<SignUp  page={"login"}/>}
            />
            <Route 
              path="/projects/create"
              element={<CreateProject />}
              />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
