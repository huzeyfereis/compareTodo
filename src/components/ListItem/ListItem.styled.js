import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 90%;
  margin: 1rem auto;
  padding-left: 0.5rem;
  border: 1px solid red;
  border-radius: 0.4rem;
  box-sizing: border-box;
  gap: 10px;
`;

export const ToDoTitle = styled.div`
  width: 50%;
  display: flex;
`;

export const CreatedAt = styled.div`
  width: 30%;
  display: flex;
`;

export const SolveButton = styled.button`
  width: 20%;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.4rem;
  cursor: pointer;
`;
