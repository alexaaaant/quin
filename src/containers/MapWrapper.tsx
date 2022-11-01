import { Status, Wrapper } from '@googlemaps/react-wrapper';
import { Alert, CircularProgress } from '@mui/material';
import { useSelector } from '../common/hooks/useSelector';
import { Map } from '../components/Map';
import { Marker } from '../components/Marker';

export const MapWrapper: React.FC = () => {
  const { launches } = useSelector((state) => state.launches);
  const render = (status: Status): JSX.Element => {
    if (status === Status.FAILURE) return <Alert severity="error">Something bad happend :(</Alert>;
    return <CircularProgress />;
  };

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Wrapper apiKey={'AIzaSyBZ6Hukip8lDWbFRA0LS_8-vSB4btNJmnA'} render={render}>
        <Map style={{ flexGrow: '1', height: '100%', width: '100%' }}>
          {Object.values(launches).map((launch) => {
            return (
              <Marker
                key={launch.id}
                position={{ lat: +launch.latitude, lng: +launch.longitude }}
              />
            );
          })}
        </Map>
      </Wrapper>
    </div>
  );
};
