import { createContext, useState } from 'react';

export const ToDoContext = createContext();

export const ToDoProvider = (props) => {
  const [toDoItems, setToDoItems] = useState([
    { id: '567890', title: 'xxx', timeStamp: '1234567', isSolved: false },
  ]);

  return (
    <ToDoContext.Provider value={[toDoItems, setToDoItems]}>
      {props.children}
    </ToDoContext.Provider>
  );
};
