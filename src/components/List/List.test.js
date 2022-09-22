import { render, screen } from '@testing-library/react';
import List from './List';
import ListItem from '../ListItem';
import { ToDoProvider } from '../../contexts/ToDoProvider';

it('should list to do items', () => {
  const toDoItem = {
    id: 'kjabsd61283',
    title: 'Task1',
    timeStamp: '34567890892',
    isSolved: false,
  };

  const handleSolveTodo = (id) => {
    dispatch({ type: 'SOLVE_TODO', payload: id });
  };
  render(
    <ToDoProvider>
      <ListItem
        key={toDoItem.id}
        listItem={toDoItem}
        solveToDoItem={handleSolveTodo}
      />
    </ToDoProvider>
  );
});
