// import logo from './logo.svg';
import './App.css';
 import Greet from './Components/Greet';
 import Welcome from './Components/Welcome'; 
// import JSX from './Components/jsx'
// import WOJSX from './Components/withoutJSX'
// import Message from './Components/Message';
// import Counter from './Components/Counter'

function App() {
  return (
    <div className="App">
      
      <Greet name="A" profile="Engineer"> Works Hard </Greet>
      <Welcome name = "X" skill="Batting"></Welcome>

      {/* <Counter/> */}

      {/* <Message/> */}
      
      {/* <Greet name="A" profile="Engineer">
        Creates Design
      </Greet>
      <Greet name="B" profile="Mentor">
        <button>Verify Design</button>
      </Greet>
      <Greet name="C" profile="Manager"/>
      
      
      <Welcome name = "Y" skill="Bowling"></Welcome>
      <Welcome name = "Z" skill="Fielding"></Welcome>
      
      <JSX/>
      
      <WOJSX/> */}

{/*       
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello World !!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
       */}
    </div>
  );
}

export default App;
