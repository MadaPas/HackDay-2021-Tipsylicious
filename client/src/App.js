import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Fetcher from './components/Fetcher/index';

function App() {
  return (
    <Router>
      <Fetcher />
    </Router>
  );
}

export default App;
