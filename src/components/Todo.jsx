import { useState } from 'react';

const initTodos = [
  { id: 1, title: 'Do pushups', isDone: false },
  { id: 2, title: 'Buy Milk', isDone: true },
  { id: 3, title: 'Fly a Kite', isDone: false },
  { id: 4, title: 'Go to park', isDone: false },
];

/* 
jei idToDelete === 3 
tai setMainTodoArr funckija turim grazinti masyva kuris atrodo be elemento { id: 3, title: 'Fly a Kite', isDone: false },
Labai svarbu!!! Nemodifikuoti mainTodoArr
[
  { id: 1, title: 'Do pushups', isDone: false },
  { id: 2, title: 'Buy Milk', isDone: true },
  { id: 4, title: 'Go to park', isDone: false },
]
*/

export default function Todo() {
  const [mainTodoArr, setMainTodoArr] = useState(initTodos);

  function handleDelete(idToDelete) {
    console.log('lets delete', idToDelete);
    // filter funkcija grazina nauja masyva reiskia nemodifikuojam orginalo
    const filtered = mainTodoArr.filter((tObj) => tObj.id !== idToDelete);
    // console.table(filtered);
    setMainTodoArr(filtered);
  }

  return (
    <div>
      <h2>Todo list</h2>
      <fieldset>
        <legend>Add Todo</legend>
        <input type='text' placeholder='new todo' />
        <button>Add</button>
      </fieldset>
      <ul>
        {mainTodoArr.map((tObj) => (
          <li key={tObj.id}>
            <span className=''>{tObj.title}</span>
            <button onClick={() => handleDelete(tObj.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
