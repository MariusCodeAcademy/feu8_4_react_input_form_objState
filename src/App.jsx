import InputBlock from './components/InputBlock';
import Login from './components/Login';
import './style/App.css';

export default function App() {
  return (
    <div className='container'>
      <h1>I am new App</h1>
      {false && <InputBlock />}
      <Login />
    </div>
  );
}
