import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import Dashboard from './Pages/Dashboard';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/dashboard"
          element={<Dashboard />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
