import { useState } from 'react';

export default function Login() {
  const [emailVal, setEmailVal] = useState('');
  const [passwVal, setPasswVal] = useState('');
  /**
   * @param {InputEvent} event
   */
  function emailInput(event) {
    setEmailVal(event.target.value);
  }
  function paswInput(event) {
    setPasswVal(event.target.value);
  }
  return (
    <div>
      <form>
        <div>
          <label>Email:</label>
          <input
            onChange={emailInput}
            value={emailVal}
            type='text'
            name='email'
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            onChange={paswInput}
            value={passwVal}
            type='password'
            name='password'
          />
        </div>
        <button type='submit'>Login</button>
      </form>
      <h3>Email: {emailVal}</h3>
      <h3>Password: {passwVal}</h3>
    </div>
  );
}
// sukurti komponenta
// importuoti ji i App.jsx
// jame buts forma
// 2 input email ir password
// submit mygtukas
// susieti email su state (onChange value)
// susieti password su state
