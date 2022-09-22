import React from 'react';
import { Container, SolveButton, ToDoTitle } from './ListItem.styled';

const ListItem = ({ listItem, solveToDoItem }) => {
  return (
    <Container key={listItem.id} id={listItem.id}>
      <ToDoTitle textDecoration={listItem.isSolved}>{listItem.title}</ToDoTitle>
      <SolveButton onClick={() => solveToDoItem(listItem.id)}>
        {listItem.isSolved ? 'Solved' : 'Solve'}
      </SolveButton>
    </Container>
  );
};

export default ListItem;
