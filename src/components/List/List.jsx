import { useContext } from 'react';
import ListItem from '../ListItem';
import { ToDoContext } from '../../contexts/ToDoProvider';
import { Notification } from './List.styled';

const List = () => {
  const { state, dispatch } = useContext(ToDoContext);
  const { toDoItems } = state;

  const handleSolveTodo = (id) => {
    dispatch({ type: 'SOLVE_TODO', payload: id });
  };
  return (
    <>
      {toDoItems
        .filter((item) => item.isSolved === false)
        .sort((a, b) => a.timeStamp - b.timeStamp)
        .map((item) => (
          <ListItem
            key={item.id}
            listItem={item}
            solveToDoItem={handleSolveTodo}
          />
        ))}
      {toDoItems
        .filter((item) => item.isSolved)
        .sort((a, b) => a.timeStamp - b.timeStamp)
        .map((item) => (
          <ListItem
            key={item.id}
            listItem={item}
            solveToDoItem={handleSolveTodo}
          />
        ))}
      {toDoItems.length === 0 && (
        <Notification>Please add a to do item.</Notification>
      )}
    </>
  );
};

export default List;
