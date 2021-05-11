import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

//Components
import TransitionBetween from 'components/transitions/TransitionBetween';
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

  return (<TransitionBetween show={status === 'idle' ? 'loading' : status}>
    <Centered key="loading">
      <Pending size="large" />
    </Centered>

    <div key="succeeded">TODO success</div>

    <div key="error">TODO error</div>
  </TransitionBetween>);
}

export default App;
