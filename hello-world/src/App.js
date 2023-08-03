import logo from './logo.svg';
import './App.css';
import './components/FirstComponent'
import FirstComponent from './components/FirstComponent';
import TemplateExpressions from './components/TemplateExpressions'
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 id="titulo">Hello World React</h1>
        <FirstComponent/>
        <TemplateExpressions/>
        <MyComponent/>
        <Events/>
        <Challenge/>
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
