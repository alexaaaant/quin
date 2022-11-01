import React, { useEffect, useRef, useState } from 'react';

interface MapProps extends google.maps.MapOptions {
  style: { [key: string]: string };
  onClick?: (e: google.maps.MapMouseEvent) => void;
  onIdle?: (map: google.maps.Map) => void;
  children: React.ReactNode[];
}

export const Map: React.FC<MapProps> = ({ onClick, onIdle, style, children, ...options }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map>();

  useEffect(() => {
    console.log('window.google.maps.Map before');
    if (ref.current !== null && map === undefined) {
      console.log('window.google.maps.Map');
      setMap(
        new window.google.maps.Map(ref.current, {
          center: { lat: -39.262833, lng: 177.864469 },
          zoom: 4
        })
      );
    }
  }, [ref, map]);

  return (
    <div style={style} ref={ref} id="map">
      {children.map((child) => {
        if (React.isValidElement(child)) {
          // @ts-expect-error
          return React.cloneElement(child, { map });
        }
        return null;
      })}
    </div>
  );
};
