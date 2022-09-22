import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
  gap: 10px;
`;

export const CreateToDoInput = styled.input`
  border-radius: 0.4rem;
  padding: 1rem;
  box-sizing: border-box;
  width: 80%;
`;

export const CreateButton = styled.button`
  width: 20%;
  padding: 1rem;
  box-sizing: border-box;
  border-radius: 0.4rem;
  cursor: pointer;
`;
