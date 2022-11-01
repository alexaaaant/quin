import { useEffect, useState } from 'react';
import { dateHelper } from '../common/dateHelper';
import { useDispatch } from '../common/hooks/useDispatch';
import { fetchAllLaunches } from '../features/launch/actions';
import { MapWrapper } from './MapWrapper';

const MONTHS_OFFSET = 3;

const App: React.FC = () => {
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      return;
    }
    setIsLoading(true);
    dispatch(fetchAllLaunches({ window_start__gte: dateHelper.getEdgeDate(MONTHS_OFFSET) }))
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
