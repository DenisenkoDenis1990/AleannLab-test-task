import { GoogleMap, MarkerF } from '@react-google-maps/api';
import { useRef, useCallback } from 'react';
import { defaultOptions, containerStyle } from 'services/mapUtils';
export const Map = ({ center }) => {
  // const containerStyle = {
  //   width: '100%',
  //   height: '100%',
  //   borderBottomRightRadius: '6px',
  //   borderBottomLeftRadius: '6px',
  // };

  // const defaultOptions = {
  //   disableDefaultUI: true,
  //   styles: [
  //     {
  //       featureType: 'all',
  //       elementType: 'geometry',
  //       stylers: [
  //         {
  //           color: '#202c3e',
  //         },
  //       ],
  //     },
  //     {
  //       featureType: 'all',
  //       elementType: 'labels.text.fill',
  //       stylers: [
  //         {
  //           gamma: 0.01,
  //         },
  //         {
  //           lightness: 20,
  //         },
  //         {
  //           weight: '1.39',
  //         },
  //         {
  //           color: '#ffffff',
  //         },
  //       ],
  //     },
  //     {
  //       featureType: 'all',
  //       elementType: 'labels.text.stroke',
  //       stylers: [
  //         {
  //           weight: '0.96',
  //         },
  //         {
  //           saturation: '9',
  //         },
  //         {
  //           visibility: 'on',
  //         },
  //         {
  //           color: '#000000',
  //         },
  //       ],
  //     },
  //     {
  //       featureType: 'all',
  //       elementType: 'labels.icon',
  //       stylers: [
  //         {
  //           visibility: 'off',
  //         },
  //       ],
  //     },
  //     {
  //       featureType: 'landscape',
  //       elementType: 'geometry',
  //       stylers: [
  //         {
  //           lightness: 30,
  //         },
  //         {
  //           saturation: '9',
  //         },
  //         {
  //           color: '#29446b',
  //         },
  //       ],
  //     },
  //     {
  //       featureType: 'poi',
  //       elementType: 'geometry',
  //       stylers: [
  //         {
  //           saturation: 20,
  //         },
  //       ],
  //     },
  //     {
  //       featureType: 'poi.park',
  //       elementType: 'geometry',
  //       stylers: [
  //         {
  //           lightness: 20,
  //         },
  //         {
  //           saturation: -20,
  //         },
  //       ],
  //     },
  //     {
  //       featureType: 'road',
  //       elementType: 'geometry',
  //       stylers: [
  //         {
  //           lightness: 10,
  //         },
  //         {
  //           saturation: -30,
  //         },
  //       ],
  //     },
  //     {
  //       featureType: 'road',
  //       elementType: 'geometry.fill',
  //       stylers: [
  //         {
  //           color: '#193a55',
  //         },
  //       ],
  //     },
  //     {
  //       featureType: 'road',
  //       elementType: 'geometry.stroke',
  //       stylers: [
  //         {
  //           saturation: 25,
  //         },
  //         {
  //           lightness: 25,
  //         },
  //         {
  //           weight: '0.01',
  //         },
  //       ],
  //     },
  //     {
  //       featureType: 'water',
  //       elementType: 'all',
  //       stylers: [
  //         {
  //           lightness: -20,
  //         },
  //       ],
  //     },
  //   ],
  // };

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
