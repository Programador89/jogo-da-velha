import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edite <code>src/App.js</code> e salve para realizar o reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Aprendendo React
        </a>
        <p>Continuar aprendizado na <code>aula 007</code> do curso de vídeos do Marco Bruno no Youtube!</p>
      </header>
    </div>
  );
}

export default App;
