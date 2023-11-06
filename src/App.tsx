import { useContainer } from 'unstated-next';
import GlobalState from './store/global';
import RoutesIndex from './Route';
import { Button } from 'antd';

export default function App() {
  const { count, setCount } = useContainer(GlobalState);
  return (
    <div className="flex justify-center items-center w-[100vh] h-[100vh]">
      <div>
        <h1>Vite</h1>
        <Button type="primary" onClick={() => setCount((val) => val + 1)}>
          {count}
        </Button>
        <RoutesIndex />
      </div>
    </div>
  );
}
