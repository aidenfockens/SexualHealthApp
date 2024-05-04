import {useEffect} from 'react';
import React from 'react';

// function that calls the script supplied by google
const GooglePlatformScript = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/platform.js';
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null;
};

export default GooglePlatformScript;