import React from 'react';
import CreateToDo from '../CreateToDo';
import ListItem from '../ListItem';
import { Container } from './ToDoList.styled';

const ToDoList = () => {
  return (
    <Container>
      <CreateToDo />
      <ListItem />
    </Container>
  );
};

export default ToDoList;
