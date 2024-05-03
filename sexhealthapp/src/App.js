import React from 'react';
import { Routes, Route, Outlet }  from 'react-router-dom';
// Layout
import Layout from './Layout/Layout.jsx';

// Pages
import Home from './Pages/Home.jsx';
import LogIn from './Pages/LogIn.jsx';
import Status from './Pages/Status.jsx';
import WriteConnections from './Pages/WriteConnections.jsx';
import ViewConnections from './Pages/ViewConnections.jsx';
import Symptom from './Pages/Symptom.jsx';
import Map from './Pages/Map.jsx';



const App = () => {
  return (
    <div className="App">
      <Routes>
          <Route element={<Layout> <Outlet/> </Layout>}>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/login" element={<LogIn />}/>
            <Route exact path="/Status" element = {<Status/>}/>
            <Route exact path="/viewConnections" element = {<ViewConnections/>}/>
            <Route exact path="/writeConnections" element = {<WriteConnections/>}/>
            <Route exact path ="/Symptom" element = {<Symptom/>}/>
            <Route exact path ="/Map" element = {<Map/>}/>
          </Route>
       </Routes>
    </div>
  );
}

export default App; 