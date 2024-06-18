import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
     
        <Routes>
          <Route path="/" element={<Home />} />

        </Routes>
     
      </div>
    </Router>
  );
}

export default App;
