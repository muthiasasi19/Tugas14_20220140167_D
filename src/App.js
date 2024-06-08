import './App.css';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Create by: Muthia Sasi
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
      <div className="container custom-container">
        <h1 className="custom-title">˗ˏˋ ★ ˎˊ˗ welcome to My React App !!</h1>
        <p className="custom-paragraph">"Technology refers to the use of tools, machines, and systems to solve problems, enhance efficiency, and improve quality of life."</p>
        
      </div>
      
    </div>
    
    

    
  );
}

export default App;
