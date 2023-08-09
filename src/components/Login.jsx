import { useState } from 'react';

const correctEmail = 'James@bond.com';
const correctPass = 'secret123';

export default function Login() {
  const [emailVal, setEmailVal] = useState('');
  const [passwVal, setPasswVal] = useState('');
  const [formSuccess, setFormSuccess] = useState(false);

  /**
   * @param {InputEvent} event
   */
  function emailInput(event) {
    setEmailVal(event.target.value);
  }
  function paswInput(event) {
    setPasswVal(event.target.value);
  }
  /**
   * @param {SubmitEvent} event
   */
  function handleSubmit(event) {
    // sustabdom puslapi nuo perkrovimo
    event.preventDefault();
    console.log('submit');
    // daryti ka reikia
    // atspausdinti ivestas reikmes:
    console.log('ivesta email:', emailVal);
    console.log('ivesta password:', passwVal);
    // validuoti ar ne tusti laukai
    if (emailVal.trim() === '' || passwVal.trim() === '') {
      console.log('Abu laukai privalomi');
      return;
    }
    // patikrinti ar sutampa email
    // patikrinti ar sutampa password
    // jei viskas gerai - sekmes atvejis
    console.log('---Sekme---');
    setFormSuccess(true);
  }
  console.log('formSuccess ===', formSuccess);
  return (
    <div>
      {!formSuccess && (
        <form onSubmit={handleSubmit}>
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
      )}
      {formSuccess && (
        <div className='success'>
          <h2>You have logged in succesfuly</h2>
          <p>Welcome back to the website</p>
        </div>
      )}
      <hr />
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
