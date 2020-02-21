import React from "react";
import styled from "styled-components";

const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 2rem;
  width: 800px;
  background: linear-gradient(to right, #108dc7, #ef8e38);
  color:  "#FF0000";
  font-size: 1.5rem;

  h2 {
    color: white;
    font-size: 2rem;
    margin-bottom: 1rem;
    text-decoration: underline;
  }
  .character {
    margin-bottom: 5px;
  }
  h3 {
    color: gold;
  }
`;

function CharacterCard(props) {
  console.log(props);
  return (
    <section className="character-card">
      <StyledCard>
        <h2>Name: {props.name}</h2>
        <h3 className="character">Height: {props.height}</h3>
        <h3 className="character">Mass: {props.mass}</h3>
        <h3 className="character">Eye Color: {props.eye_color}</h3>
        <h3 className="character">Hair Color: {props.hair_color}</h3>
        <h3 className="character">Skin Color: {props.skin_color}</h3>
        <h3 className="character">Birth Year: {props.birth_year}</h3>
        <h3 className="character">Gender: {props.gender}</h3>
        <h3 className="character">Homeworld: {props.homeworld}</h3>
      </StyledCard>
    </section>
  );
}

export default CharacterCard;
