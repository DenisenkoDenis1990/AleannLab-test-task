import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { useRef, useCallback } from 'react';
import { defaultOptions, containerStyle } from 'components/Map/mapUtils';
export const Map = ({ center }) => {
  const mapRef = useRef(null);
  const onLoad = useCallback(function callback(map) {
    mapRef.current = map;
  }, []);

  const onUnmount = useCallback(function callback(map) {
    mapRef.current = null;
  }, []);

  return (
    <div className="w-[352px] h-[218px] rounded-b-md">
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={3}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={defaultOptions}
      >
        <MarkerF
          position={center}
          icon={{
            path: 'M28 12.7C28 6.23827 22.1797 1 15 1C7.8203 1 2 6.23827 2 12.7C2 16.8164 5.95671 24.3953 13.8701 35.4368L15 37L16.6756 34.6721L17.2347 33.8813C24.4116 23.6805 28 16.6201 28 12.7ZM8.5 13.5217C8.5 10.064 11.4101 7.26087 15 7.26087C18.5899 7.26087 21.5 10.064 21.5 13.5217C21.5 16.9795 18.5899 19.7826 15 19.7826C11.4101 19.7826 8.5 16.9795 8.5 13.5217Z',
            fillColor: 'gray',
            strokeColor: 'white',
          }}
        />
      </GoogleMap>
    </div>
  );
};
