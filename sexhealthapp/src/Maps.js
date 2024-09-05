let map;
let center;

async function initMap() {
    const { Map } = await google.maps.importLibrary("maps");

    center = { lat: 42.34991004468345, lng: -71.10293536014423};
    map = new Map(document.getElementById('map'), {
        center: center,
        zoom: 11,
        mapId: '4504f8b37365c3d0',
    });

    findPlaces();
}

async function findPlaces() {
    const { Place } = await google.maps.importLibrary("places");
    const { AdvancedMarkerElement } = await google.maps.importLibrary("marker");
    const request = {
        textQuery: 'Clinic in Boston, MA',
        fields: ['displayName', 'location', 'businessStatus'],
        locationBias: { lat: 42.34991004468345, lng: -71.10293536014423 },
        isOpenNow: true,
        language: 'en-US',
        maxResultCount: 15,
        minRating: 3.2,
        region: 'us',
    };
    
    const { places } = await Place.searchByText(request);

    if (places.length) {
        console.log(places);
        
        const { LatLngBounds } = await google.maps.importLibrary("core");
        const bounds = new LatLngBounds();
        
        places.forEach((place) => {
            if (place.location) {
                const markerView = new AdvancedMarkerElement({
                    map,
                    position: place.location,
                    title: place.displayName,
                });

                bounds.extend(place.location);
                console.log(place);
            }
        });

        map.fitBounds(bounds);

    } else {
        console.log('No results');
    }
}

initMap();

export { };