import styled from "styled-components";

export const Button = () => {
  return <ButtonStyled>Submit2</ButtonStyled>;
};

const ButtonStyled = styled.button`
  text-align: center;
  width: 200px;
  padding: none;
  margin: 10px auto;
  display: block;
  font-size: 20px;
  background: #c2c2c2;
  border-radius: 5px;
`;
