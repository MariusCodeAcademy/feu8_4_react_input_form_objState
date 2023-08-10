import { useState } from 'react';

export default function Counter() {
  const [value, setValue] = useState(0);

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
