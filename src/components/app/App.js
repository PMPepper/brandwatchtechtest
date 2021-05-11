import {useEffect} from 'react';

import Centered from 'components/layout/Centered';
import Pending from 'components/pending/Pending';


function App() {
  useEffect(
    () => {
      //TODO initiate loading of topics data
    },
    []
  )

  return (<Centered>
    <Pending size="large" />
  </Centered>);
}

export default App;
