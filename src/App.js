import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar'; // Adjust the path based on your structure
import Dashboard from './components/Dashboard';
import PostActivity from './components/PostActivity';
import Workout from './components/Workout';
import Goal from './components/goal/Goal';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path='/activity-post' element={<PostActivity/>}/>
            <Route path='/workout' element={<Workout/>}/>
            <Route path='/goal' element={<Goal/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;

