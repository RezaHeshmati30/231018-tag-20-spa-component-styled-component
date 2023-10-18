import React from "react";
import styled from "styled-components";
import { css } from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  background-color: gray;
  width: 450px;
  height: 500px;
`;

const Title = styled.h1`
  color: white;
  font-size: 2rem;
  text-align: center;
`;

const MyButton = styled.button`
  background-color: blue;
  color: orange;
  border: none;
  padding: 1.5 rem 2rem;
//props festlegen
${(props) =>
  props.color &&
  css`
    background: green;
  `};
}
`;

// Überschreiben
const ColorMyButton = styled(MyButton)`
  color: white;
`;

const Style = () => {
  return (
    <Container>
      <Title>Hallo Styled!</Title>
      <MyButton>Click me</MyButton>
      <MyButton color>send me</MyButton>
      <ColorMyButton> Hallo</ColorMyButton>
    </Container>
  );
};

export default Style;
