import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux'

//Components
import Centered from 'components/layout/Centered';
import Pending from 'components/pending/Pending';

//Redux
import {fetchTopics} from 'redux/slices/topics';


function App() {
  const {topics, status, error} = useSelector(state => state.topics)
  const dispatch = useDispatch();


  useEffect(
    () => {
      dispatch(fetchTopics())//On mount, initiate loading of topics data
    },
    []
  );

  console.log(topics, status);

  return (<Centered>
    <Pending size="large" />
  </Centered>);
}

export default App;
