import logo from './logo.svg';
import './App.css';
import MyComponent from "./components/MyComponent";

function App() {
  return (
    <div className="App">
      {/* CSS global */}
      <h1>React com css</h1>
      {/* CSS de componente */}
      <MyComponent/>
      <p>Este parágrafo é do App.js</p>
    </div>
  );
}

export default App;
