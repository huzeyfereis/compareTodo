import React, { useContext } from 'react';
import { ToDoContext } from '../../contexts/ToDoProvider';
import CreateToDo from '../CreateToDo';
import ListItem from '../ListItem';
import { Container } from './ToDoList.styled';

const ToDoList = () => {
  const [toDoItems, setToDoItems] = useContext(ToDoContext);
  console.log(toDoItems);
  return (
    <Container>
      <CreateToDo />
      {toDoItems.map((item) => (
        <ListItem key={item.id} listItem={item} />
      ))}
    </Container>
  );
};

export default ToDoList;
