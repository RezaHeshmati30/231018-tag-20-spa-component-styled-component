import styled from "styled-components";
//import "./App.css";

function App() {
  const Paragraph = styled.p`
    padding: 2rem;
    background-color: ${(props) => props.backgroundColor};
    color: ${({ textColor }) => textColor};
  `;

  const GuineaPigImg = styled.img.attrs((props) => ({
    src: props.src,
  }))`
    width: ${(props) => props.width};
    margin: 2rem;
    border: 2px solid grey;
  `;

  return (
    <>
      <Paragraph textColor="white" backgroundColor="blueviolet">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore, aut
        suscipit sunt modi alias perspiciatis voluptate amet iusto, nihil eius
        fugiat esse impedit ea repellat facilis odit eos. Laboriosam, aliquam.
      </Paragraph>
      <Paragraph textColor="white" backgroundColor="black">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque sapiente
        nesciunt nam natus quasi nemo culpa animi ipsum voluptate eaque.
        Cupiditate praesentium porro dolorum omnis dolores sint esse magnam
        libero?
      </Paragraph>
      <GuineaPigImg
        src="https://stkittsvet.co.uk/wp-content/uploads/2019/06/images-guinea-pig-768x647.jpg"
        width="250px"
      />
    </>
  );
}

export default App;
