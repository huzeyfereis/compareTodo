import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 1rem auto;
  padding-left: 0.5rem;
  border: 1px solid #51a000;
  border-radius: 0.5rem;
  box-sizing: border-box;
  gap: 10px;
`;

export const ToDoTitle = styled.div`
  width: 80%;
  display: flex;
  text-decoration: ${(props) =>
    props.textDecoration ? 'line-through' : 'none'};
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

export const SolveButton = styled.button`
  width: 20%;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0 0.4rem 0.4rem 0;
  cursor: pointer;
  color: #fff;
  background-color: #84d300;
  font-size: 16px;
  font-weight: 600;
  border: none;

  :hover {
    background-color: #6bba00;
  }
`;
