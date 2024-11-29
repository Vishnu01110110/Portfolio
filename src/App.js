import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Portfolio from './Portfolio';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Portfolio />
      </div>
    </BrowserRouter>
  );
}

export default App;