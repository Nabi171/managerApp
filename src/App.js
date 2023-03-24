import React from 'react';
import './App.css';
import Home from './components/Home';
import AddTask from './components/pages/AddTask/AddTask';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/pages/Nav/Navbar';
import EditTask from './components/pages/EditTask/EditTask';
function App() {
  return (

    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tasks/:taskId" element={<Home />} />

        <Route path="/addtask" element={<AddTask />} />
        <Route path="/editTask" element={<EditTask />} />

      </Routes>

    </Router>
  );
}

export default App;
