import styled from 'styled-components';

export const Container = styled.form`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: auto;
`;

export const CreateToDoInput = styled.input`
  border-radius: 0.4rem 0 0 0.4rem;
  padding: 1rem;
  box-sizing: border-box;
  width: 80%;
  font-size: 16px;
  font-weight: 600;
  border: none;

  :focus {
    outline: none;
  }
`;

export const CreateButton = styled.button`
  width: 20%;
  font-family: 'Exo 2', sans-serif;
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
