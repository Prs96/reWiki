import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Component from './Home';
import SearchResults from './SearchResult';
import Navbar from './Navbar';

function App() {
  return (
    
      <Router>
      <Navbar/>
      
        <Routes>
        <Route path="/" element={<Component />}/>
        <Route path="/search" element={<SearchResults />} />
        </Routes>
      </Router>
      
  
  );
}

export default App;
