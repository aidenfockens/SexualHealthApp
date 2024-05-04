import React from 'react';
import { Routes, Route, Outlet }  from 'react-router-dom';
// Layout
import Layout from './Layout/Layout.jsx';

// Pages
import LogIn from './Pages/LogIn.jsx';
import Status from './Pages/Status.jsx';
import WriteConnections from './Pages/WriteConnections.jsx';
import ViewConnections from './Pages/ViewConnections.jsx';
import Symptom from './Pages/Symptom.jsx';
import Map from './Pages/Map.jsx';

// The Google oAuth Script
import GooglePlatformScript from './scripts/oAuthGoogle.jsx';



const App = () => {
  return (
    <div className="App">
      <meta name="google-signin-client_id" content="478647196527-opl81qpcmmhif09dr8g61ja08grjoj5h.apps.googleusercontent.com"></meta>
      <GooglePlatformScript/>
      <Routes>
        <Route exact path="/" element={<LogIn/>} />
          <Route element={<Layout> <Outlet/> </Layout>}>
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