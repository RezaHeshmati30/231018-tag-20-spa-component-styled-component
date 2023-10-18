import React, { useState } from "react";
import styled from "styled-components";
import { css } from "styled-components";
//import "../App.css";

const Count = () => {
  const [count, setCount] = useState(0);

  const Title = styled.h1`
    color: red;
  `;

  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    aligns-items: center;

    background: whitesmoke;
    width: 400px;
    height: 400px;
  `;
  const ButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
  `;
  const Button = styled.button`
    color: white;
    font-size: 2rem;
    ${(props) =>
      props.color &&
      css`
        background: blueviolet;
      `}
  `;
  const MyButton = styled(Button)`
    /* background: black; */
    ${(props) =>
      props.changeColor &&
      css`
        background: black;
      `}
  `;
  const handleeIncrease = () => setCount((count) => count + 1);
  const handleDecrease = () => {
    count > 0 ? setCount((count) => count - 1) : setCount(0);
  };

  return (
    <Container>
      <Title>{count}</Title>
      <ButtonContainer>
        <Button onClick={handleeIncrease}> + </Button>
        <Button onClick={handleDecrease} color>
          {" "}
          -{" "}
        </Button>
        <MyButton onClick={() => setCount(0)} changeColor>
          {" "}
          reset{" "}
        </MyButton>
      </ButtonContainer>
    </Container>
  );
};

export default Count;
