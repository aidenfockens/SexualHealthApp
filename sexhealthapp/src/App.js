import React from 'react';
import { Routes, Route, Outlet }  from 'react-router-dom';
// Layout
import Layout from './Layout/Layout.jsx';

// Pages
import Home from './Pages/Home.jsx';

const App = () => {
  return (
    <div className="App">
      <Routes>
          <Route element={<Layout> <Outlet/> </Layout>}>
            <Route exact path="/" element={<Home />} />
          </Route>
       </Routes>
    </div>
  );
}

export default App; 