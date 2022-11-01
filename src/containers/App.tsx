import { useEffect } from 'react';
import { useDispatch } from '../common/hooks/useDispatch';
import { fetchAllLaunches } from '../features/launch/actions';

const App: React.FC = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllLaunches())
      .then(() => console.log('success'))
      .catch(() => console.log('fail'));
  }, []);

  return <div className="App">New application</div>;
};

export default App;
