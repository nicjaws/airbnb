import { useState } from 'react';
import ReactMapGL, { Marker, Popup} from 'react-map-gl';
import geoCenter from 'geolib/es/getCenter';

function Map({ searchResults}) {
  const [selectedLocation, setSelectedLocation] = useState({});

  // Transform the search results object into latitude and longitude
  const coordinates = searchResults.map(result => ({
    longitude: searchResults.long,
    latitude: result.lat,
  }));
  // The latitude and longitude of the center of location coordinates
  const center = getCenter(coordinates);
  const [viewport, setViewPort] = useState({
    width: '100%',
    heigth: '100%',
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });
  return <ReactMapGL
    mapStyle="mapbox://styles/nicjaws/ckt5zbj8j0nt119pid6yftcqh"
    mapboxApiAccessToken={process.env.mapbox_key}
    {...viewport}
    onViewportChange={(newViewport) => setViewPort(nextViewport)}
  >
    {searchResults.map(result => (
      <div key={result.long}>
        <Marker
        longitude={result.long}
          latitude={result.lat}
          offsetLeft={-20}
          offsetRight={-10}
          >
          <p
            role="img"
            onClick={() => setSelectedLocation(result)}
            className="cursor-pointer text-2xl animate-bounce"
            >
              📌
            </p>
        </Marker>
        {/* The popup that should show if we click on a Marker */}
        {selectedLocation.long === result.long ? (
          <Popup
          onClose={() => setSelectedLocation({})}
          closeOnClick={true}
          latitude={result.lat}
          longitude={result.long}>
            {result.title}
          </Popup>
        ) : (

        )}
      </div>
    ))}
  </ReactMapGL>
}

export default Map
