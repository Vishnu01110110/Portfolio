import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Portfolio from './Portfolio';

function App() {
  return (
    <div className="App">
      <Router>
        <Portfolio />
      </Router>
    </div>
  );
}

export default App;