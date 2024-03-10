import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import UserManagement from "./Pages/UserManagement";
import ArtistManagement from "./Pages/ArtistManagement";
import Home from "./Pages/Home";
import MusicPlayer from "./Pages/MusicPlayer";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/user_management" element={<UserManagement />} />
        <Route path="/artist_management" element={<ArtistManagement />} />

        <Route path="/home" element={<Home />} />
        <Route path="/music-player" element={<MusicPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
