export default function Login() {
  return (
    <form>
      <div>
        <label>Email:</label>
        <input type='email' name='email' />
      </div>
      <div>
        <label>Password:</label>
        <input type='password' name='password' />
      </div>
      <button type='submit'>Login</button>
    </form>
  );
}
// sukurti komponenta
// importuoti ji i App.jsx
// jame buts forma
// 2 input email ir password
// submit mygtukas
// susieti email su state (onChange value)
// susieti password su state
