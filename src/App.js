import API from "./API";
import Effect from "./Effect";
import Input from "./Input";
import Todo from "./Todo";
import NavBar from "./NavBar";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    // <Input />
    // <Todo />
    // <Effect />
    // <API />
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Todo />} />
        <Route path="/input" element={<Input />} />
        <Route path="/api" element={<API />} />
        <Route path="/effect" element={<Effect />} />
      </Routes>
    </Router>
  );
}

export default App;
