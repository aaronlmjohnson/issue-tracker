import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <div className="pages">
          <Routes>
            <Route
              path="/"
              element={<Dashboard />}
            />
            <Route
              path="/projects"
              element={<Projects />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
