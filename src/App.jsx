import Counter from './components/Counter';
import InputBlock from './components/InputBlock';
import Login from './components/Login';
import Todo from './components/Todo';
import './style/App.css';

export default function App() {
  return (
    <div className='container'>
      <h1>I am new App</h1>
      {false && <InputBlock />}
      {false && <Login />}
      {false && <Todo />}
      <Counter />
    </div>
  );
}
