// By Jianqi Jin

import { useState } from 'react';
import { createContainer } from 'unstated-next';

const useGlobalState = () => {
  const [count, setCount] = useState(0);
  return {
    count,
    setCount,
  };
};

const GlobalState = createContainer(useGlobalState);
export default GlobalState;
