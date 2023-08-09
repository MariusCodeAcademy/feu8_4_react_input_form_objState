import { useState } from 'react';

export default function InputBlock() {
  const [inputVal, setInputVal] = useState('James Bond');
  const [showText, setShowText] = useState(false);
  console.log('inputVal ===', inputVal);
  function enterInput(event) {
    // console.log('change', event);
    // event - yra ivykis kuris ivyko ir informacijos objektas
    // evet.target - yra elementas kuriame ivyko ivykis
    const inputEl = event.target;
    const valueInInput = inputEl.value;
    setInputVal(valueInInput);
  }

  function makeClick() {
    console.log('event ===');
    setShowText(true);
  }

  return (
    <div>
      <label htmlFor='input'>Input</label>
      <input
        onChange={enterInput}
        value={inputVal}
        id='input'
        type='text'
        placeholder='enter here'
      />
      <button onClick={makeClick}>Show Output</button>
      {showText && <h2>I input buvo ivesta: {inputVal}</h2>}
    </div>
  );
}
// naujas komponentas

// jame turi buti inputas ir mygtukas
// ir tuscias h2 elementas isvedimui

// importuoti i App.jsx
