import { useState } from 'react';

export default function Counter() {
  const [value, setValue] = useState(0);

  console.log('susikure');

  function plus2() {
    // setValue(value + 2);

    setTimeout(() => {
      setValue(value + 2);
    }, 3000);
  }
  // negalima komponento viduje kviesti state keiciancios
  // funkcijos nes bus infinite loop
  plus2();

  function plusValue() {
    setValue(value + 1);
  }

  return (
    <div>
      <h2>Label</h2>
      <p>{value}</p>
      <button onClick={plusValue}>UP</button>
    </div>
  );
}
