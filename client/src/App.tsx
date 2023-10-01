import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Navbar />
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
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
