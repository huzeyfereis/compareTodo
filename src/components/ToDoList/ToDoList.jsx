import CreateToDo from '../CreateToDo';
import List from '../List';
import Logo from '../Logo/Logo';
import { Container, Title } from './ToDoList.styled';

const ToDoList = () => {
  return (
    <Container>
      <Logo />
      <Title>To Do List App</Title>
      <CreateToDo />
      <List />
    </Container>
  );
};

export default ToDoList;
