import logo from './logo.svg';
import './App.css';
import axios from 'axios';

function App() {

  const handleTestClick = () => {
    axios.get('/api/test').then(response => {
      console.log('response in handleTestClick = ', response);
    }).catch(error => {
      console.log(error)
    })
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <button onClick={handleTestClick}>CLICK ME</button>
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
  );
}

export default App;