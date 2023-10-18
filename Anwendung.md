# Anwendung bei den Komponenten

1. Component: `Container` erstellen:

```js
...
const Container = styled.div`
  text-align: center;
  padding: 5rem;
  background: #f5f5dc;
  height: 100vh;
`;
return(
   <Container><Container>

)
...
```

2. Componente: `Title`

```js
...
const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: blue;
`;
 return(
   <Container>
   <Title>Hallo Styled Component! </Title>
   <Container>
)
...
```

4. Component: `Button` erstellen:

```js
...
const StyledButton = styled.button`
  background: #a52a2a;
  padding: 1rem 2rem;
  border: none;
  color: white;
  border-radius: 15px;
  margin-top: 1rem;
`;

const App = () => {
  return (
    <Container>
      <Title>Hello Word</Title>
      <StyledButton>Send me</StyledButton>
    </Container>
  );
};
```

5. Components & `props :`

```js
const StyledButton = styled.button`
  background: #a52a2a;
  padding: 1rem 2rem;
  border: none;
  color: white;
  border-radius: 15px;
  margin-top: 1rem;

  ${(props) =>
    props.myColor &&
    css`
      background: blueviolet;
    `};
`;

const App = () => {
  return (
    <Container>
      <Title>Hello Word</Title>
      <StyledButton>Send me</StyledButton>
      <StyledButton myColor>Send me</StyledButton>
      <StyledButtonWithPadding> with Padding</StyledButtonWithPadding>
      <StyledButtonWithPadding myColor> with Padding</StyledButtonWithPadding>
      <Interpolieren />
    </Container>
  );
};
```

6. Components Überschreiben:

```js
...
const StyledButton = styled.button`
  background: #a52a2a;
  padding: 1rem 2rem;
  border: none;
  color: white;
  border-radius: 15px;
  margin-top: 1rem;


  ${(props) =>
    props.myColor &&
    css`
      background: blueviolet;
    `};
`;

const StyledButtonWithPadding = styled(StyledButton)`
  padding: 2rem 3rem;
`;

const App = () => {
  return (
    <Container>
      <Title>Hello Word</Title>
      <StyledButton>Send me</StyledButton>
      <StyledButton myColor>Send me</StyledButton>
      <StyledButtonWithPadding> with Padding</StyledButtonWithPadding>
      <StyledButtonWithPadding myColor> with Padding</StyledButtonWithPadding>
    </Container>
  );
};
```

7. `Interpolieren`
   Man kann eine Funktion interpolieren, indem man an das Vorlageliteral einer Komponente übergeben und diese basierend auf seinen Requisiten anzupassen.

**Beispiel**

```js
import React from "react";
import styled from "styled-components";

const Button = styled.button`
  background: ${props => props.$primary ? "#BF4F74" : "white"};
  color: ${props => props.$primary ? "white" : "#BF4F74"};
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid #BF4F74;
  border-radius: 3px;
`;

render(
  <div>
    <Button>Normal</Button>
    <Button $primary>Primary</Button>
  </div>
);
```
