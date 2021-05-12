import {useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';

//Components
import TransitionBetween from 'components/transitions/TransitionBetween';
import Centered from 'components/layout/Centered';
import Pending from 'components/pending/Pending';
import Topics from 'components/topics/Topics';
import Error from 'components/error/Error';

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

  return (<TransitionBetween show={status === 'idle' ? 'loading' : status}>
    <Centered key="loading">
      <Pending size="large" />
    </Centered>

    <Topics key="succeeded" topics={topics} />

    <Error key="failed" message="Unable to load topics. Please check your internet connection." error={error} retry={() => dispatch(fetchTopics())} />
  </TransitionBetween>);
}

export default App;
