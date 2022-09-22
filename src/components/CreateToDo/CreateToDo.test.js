import { fireEvent, render } from '@testing-library/react';
import CreateToDo from './CreateToDo';
import { ToDoProvider } from '../../contexts/ToDoProvider';

it('add new todo item', () => {
  const onSubmit = jest.fn();
  const { getByTestId, getByText } = render(
    <ToDoProvider>
      <CreateToDo onSubmit={onSubmit} />
    </ToDoProvider>
  );

  const inputValue = 'Task1';

  fireEvent.change(getByTestId('add-todo'), { target: { value: inputValue } });
  fireEvent.click(getByText(/Add/i));
});
