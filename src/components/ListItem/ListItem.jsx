import React from 'react';
import {
  Container,
  CreatedAt,
  SolveButton,
  ToDoTitle,
} from './ListItem.styled';

const ListItem = () => {
  return (
    <Container>
      <ToDoTitle>To Do Item</ToDoTitle>
      <CreatedAt>123t4212</CreatedAt>
      <SolveButton>Solve</SolveButton>
    </Container>
  );
};

export default ListItem;
