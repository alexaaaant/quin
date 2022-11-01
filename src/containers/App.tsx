import { useEffect } from 'react';
import { useDispatch } from '../common/hooks/useDispatch';
import { fetchAllLaunches } from '../features/launch/actions';
import { MapWrapper } from './MapWrapper';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllLaunches())
      .then(() => console.log())
      .catch(() => console.log());
  }, []);

  return (
    <div className="App">
      <MapWrapper />
    </div>
  );
};

export default App;
