/* Original code for the JavaScript implementation of Infermedica Symptom Checker API was obtained from Infermedica. 
Updated to use React Hooks and modernized packages for the purposes of the project.
Original code may be found at: https://github.com/infermedica/js-symptom-checker-example
*/
import React, { useEffect, useRef } from 'react';
import DemoApp from '../Components/sympComponents/app';

const Symptom = () => {
  const appRef = useRef(null);

  useEffect(() => {
    const app = new DemoApp(appRef.current);
    app.render();
    app.startInterview();
  }, []);

  return (
    <div id="app" ref={appRef}>
      <p>App not loaded.</p>
    </div>
  );
};

export default Symptom;