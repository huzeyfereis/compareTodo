import React, { useRef, useContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

import { ToDoContext } from '../../contexts/ToDoProvider';
import { Container, CreateButton, CreateToDoInput } from './CreateToDo.styled';

const CreateToDo = () => {
  const toDoRef = useRef('');
  const { dispatch } = useContext(ToDoContext);

  const handleCreateToDo = (e) => {
    const toDoId = uuidv4();
    const timeStamp = Date.now();
    e.preventDefault();
    if (toDoRef.current.value === '') return;
    dispatch({
      type: 'CREATE_TODO',
      payload: {
        id: toDoId,
        title: toDoRef.current.value,
        timeStamp,
        isSolved: false,
      },
    });
    toDoRef.current.value = '';
  };

  return (
    <Container onSubmit={handleCreateToDo}>
      <CreateToDoInput data-testid='add-todo' ref={toDoRef} />
      <CreateButton>Add</CreateButton>
    </Container>
  );
};

export default CreateToDo;
