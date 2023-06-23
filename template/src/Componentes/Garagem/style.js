import styled from "styled-components";

export const Botao = styled.button`
  background: orange;
  border: 0;
  padding: 10px 15px;
  border-radius: 4px;
  transition: all 0.3s ease-in-out;
  margin: 20px 0;

  &:hover {
    background: black;
    color: white;
  }
`;

export const GaragemContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
  }
`;

export const Estacionamento = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;

  /* display: flex;
  justify-content: center;
  flex-wrap: wrap; */
`;
