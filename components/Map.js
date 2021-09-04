import ReactMapGL from 'react-map-gl';

function Map() {
  const [viewport, setViewPort] = useState({
    width: '100%',
    heigth: '100%',
    latitude: ,
    longitude: ,
    zoom: ,
  });
  return <ReactMapGL
    mapStyle="mapbox://styles/nicjaws/ckt5zbj8j0nt119pid6yftcqh"
    mapboxApiAccessToken={process.env.mapbox_key}
    {...viewport}
  ></ReactMapGL>
}

export default Map
