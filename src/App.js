import logo from './logo.svg';
import './App.css';

const App = () => {

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className='Parrafo'>
          Próximamente todo lo que necesitas para cocinar<br></br> 
          lo encontraras en este sitio
        </p>
        <a
          className="App-link"
          href="https://google.com.ar"
          target="_blank"
          rel="noopener noreferrer"
        >
          COCINANDO
        </a>
      </header>
    </div>
  );
}

export default App;
