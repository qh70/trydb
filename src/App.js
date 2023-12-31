import logo from './logo.svg';
import './App.css';
import { useEffect } from 'react';

function App() {

  useEffect(()=>{
    fetch("http://localhost:3000/Joe/")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    }).catch(err=>{console.error(err)})

    fetch("http://44.212.9.178:3000/Joe/")
    .then(res => res.json())
    .then(data => {
        console.log(data);
    }).catch(err=>{console.error(err)})
}, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
