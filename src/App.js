// import logo from "./logo.svg";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Mockman from "mockman-js";
import { Landing } from "./components/pages/Landing";
import { Login } from "./components/pages/Login";
import { Signup } from "./components/pages/Signup";
import { Home } from "./components/pages/Home.jsx";
import { PrivateRoute } from "./components/PrivateRoute";
// import { BookmarkPage } from "./components/pages/BookmarkPage";
import { ProfilePage } from "./components/Profile/ProfilePage";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/mockman" element={<Mockman />} />
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        {/* <Route path="/bookmarkpage" element={<BookmarkPage />} /> */}
        <Route
          path="/home"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/profilepage" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
