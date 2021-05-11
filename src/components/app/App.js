import Centered from 'components/layout/Centered';
import Pending from 'components/pending/Pending';


function App() {
  return <Centered>
    <Pending size="large" />
  </Centered>
  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <Pending />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //     </header>
  //   </div>
  // );
}

export default App;
