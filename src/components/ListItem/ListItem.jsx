import React from 'react';
import {
  Container,
  CreatedAt,
  SolveButton,
  ToDoTitle,
} from './ListItem.styled';

const ListItem = ({ listItem }) => {
  return (
    <Container key={listItem.id} id={listItem.id}>
      <ToDoTitle>{listItem.title}</ToDoTitle>
      <CreatedAt>{listItem.timeStamp}</CreatedAt>
      <SolveButton>Solve</SolveButton>
    </Container>
  );
};

export default ListItem;
