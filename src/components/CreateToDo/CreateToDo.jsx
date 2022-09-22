import React from 'react';
import { Container, CreateButton, CreateToDoInput } from './CreateToDo.styled';

const CreateToDo = () => {
  return (
    <Container>
      <CreateToDoInput />
      <CreateButton>Add</CreateButton>
    </Container>
  );
};

export default CreateToDo;
