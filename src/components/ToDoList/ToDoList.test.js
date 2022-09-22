import { render, screen } from '@testing-library/react';
import ToDoList from './ToDoList';
import { ToDoProvider } from '../../contexts/ToDoProvider';

it('should adding to do input exist', () => {
  render(
    <ToDoProvider>
      <ToDoList />
    </ToDoProvider>
  );

  expect(screen.getByTestId('add-todo')).toBeInTheDocument();
});
