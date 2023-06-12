// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Landing } from "./components/pages/Landing";
import { Login } from "./components/pages/Login";
import { Signup } from "./components/pages/Signup";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </div>
  );
}

export default App;
