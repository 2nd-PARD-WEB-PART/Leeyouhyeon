import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MyPage from "./MyPage";
import EditProfile from "./EditProfile";
import Home from "./Home";
import { ProfileProvider } from './ProfileContext';


function App() {

  return (
    <ProfileProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MyPage />} />
          <Route path="/EditProfile" element={<EditProfile />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </Router>
    </ProfileProvider>
  );
}

export default App;
