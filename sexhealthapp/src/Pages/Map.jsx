/* Modified sample provided by Google
Rewrote the code from the original sample from typescript to use React hooks and functional components
Original sample can be found here: https://github.com/googlemaps/js-samples */

import React, { useEffect, useRef } from 'react';

const Map = () => {
  const mapRef = useRef(null);
  let map;
  let center;

  const initMap = async () => {
    center = { lat: 42.34991004468345, lng: -71.10293536014423};
    map = new window.google.maps.Map(mapRef.current, {
        center: center,
        zoom: 11,
        mapId: '4504f8b37365c3d0',
    });

    findPlaces();
  }

  const findPlaces = async () => {
    const request = {
        location: center,
        radius: '500',
        query: 'Clinic in Boston, MA'
    };

    const service = new window.google.maps.places.PlacesService(map);
    service.textSearch(request, (results, status) => {
      if (status === window.google.maps.places.PlacesServiceStatus.OK) {
        for (let i = 0; i < results.length; i++) {
          new window.google.maps.Marker({
            position: results[i].geometry.location,
            map: map
          });
        }
        map.setCenter(results[0].geometry.location);
      }
    });
  }

  useEffect(() => {
    const script = 
    document.createElement('script');
    script.src = `https://maps.googleapis.com/maps/api/js?key=AIzaSyCVuKvWi3zu9w6FaE_4SGzRcjDXpAABN44&libraries=places`;
    script.async = true;
    script.onload = () => {
      initMap();
    };
    document.body.appendChild(script);
  }, []);

  return <div id="map" ref={mapRef} style={{ height: "100vh", width: "100%" }}></div>;
}

export default Map ;
