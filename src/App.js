import React from 'react';
import './App.css';
import Home from './components/Home';
import AddTask from './components/pages/AddTask/AddTask';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Navbar from './components/pages/Nav/Navbar';
import EditTask from './components/pages/EditTask/EditTask';
import LwsTaks from './components/pages/SideTasks/LwsTaks';
function App() {
  return (

    <Router>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/tasks" element={<LwsTaks />} />
        <Route path="/tasks/:taskId" element={<LwsTaks />} />

        <Route path="/addtask" element={<AddTask />} />
        <Route path="/editTask/:taskId" element={<EditTask />} />

      </Routes>

    </Router>
  );
}

export default App;
