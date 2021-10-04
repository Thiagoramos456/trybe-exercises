import logo from './logo.svg';
import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tasks = ['Regar plantas', 'Almoçar', 'Fazer projeto']

function App() {
  return (
    <div className="App">
      <ul>{ tasks.map((value) => Task(value)) }</ul>
    </div>
  );
}

export default App;
