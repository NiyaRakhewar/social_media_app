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
import { AnyProfile } from "./components/Profile/AnyProfile";
import { Explore } from "./components/pages/Explore";
import { useEffect, useState } from "react";
import { Loader } from "./components/Loader";
import { ToastContainer } from "react-toastify";
function App() {
  const [isLoader, setIsLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoader(false);
    }, 1000);
  });

  return (
    <div className="App">
      {isLoader && <Loader />}
      <ToastContainer toastClassName="custom-toast" />
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
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/profile/:username" element={<AnyProfile />} />
        <Route path="/explore" element={<Explore />} />
      </Routes>
    </div>
  );
}

export default App;
