import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { useRef, useCallback } from 'react';
import { defaultOptions, containerStyle } from 'services/mapUtils';
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
        <MarkerF position={center} />
      </GoogleMap>
    </div>
  );
};
