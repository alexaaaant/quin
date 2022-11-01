import { useEffect, useState } from 'react';

export const Marker: React.FC<google.maps.MarkerOptions> = (options) => {
  const [marker, setMarker] = useState<google.maps.Marker>();

  useEffect(() => {
    if (marker === undefined) {
      setMarker(new google.maps.Marker());
    }

    return () => {
      if (marker !== undefined) {
        marker.setMap(null);
      }
    };
  }, [marker]);

  useEffect(() => {
    if (marker !== undefined) {
      marker.setOptions(options);
    }
  }, [marker, options]);

  return null;
};
