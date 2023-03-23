import React from 'react';
import './App.css';
import Home from './components/Home';
import AddTask from './components/pages/AddTask/AddTask';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/pages/Nav/Navbar';
function App() {
  return (

    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/addtask" element={<AddTask />} />

      </Routes>

    </Router>
  );
}

export default App;
