import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';
import UserManagement from './Pages/UserManagement';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
        <Route
          path="/user_management"
          element={<UserManagement />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
