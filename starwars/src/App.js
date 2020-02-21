import React from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";
import CharacterCard from "./components/CharacterCard";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  // Fetch characters from the star wars api in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <StyledHeader>
        {" "}
        <h1 className="Header">React Wars</h1>
        <CharacterList />
        <CharacterCard />
      </StyledHeader>
    </div>
  );
};

const StyledHeader = styled.h1`
  text-align: center;
  margin: 0 auto;
  font-size: 2rem;
`;
export default App;
