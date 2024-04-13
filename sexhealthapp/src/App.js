import React from 'react';
import {Route, Routes} from 'react-router-dom';

// Pages go here
import Home from './Pages/Home.jsx';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />}/>
      </Routes>
    </div>
  )
}

export default App;
