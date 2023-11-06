import './App.css';
import styles from './index.module.scss';
import GlobalState from './store/global';
import { useContainer } from 'unstated-next';

function App() {
  const { count, setCount } = useContainer(GlobalState);
  return (
    <>
      <div className={`${styles.App} h-[100vh]`}>
        Demo
        <div>
          <div>{count}</div>
          <div>
            <button onClick={() => setCount((val) => val + 1)}>+1</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
