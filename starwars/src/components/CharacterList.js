import React, { useState, useEffect } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";

function CharacterList() {
  const [people, setPeople] = useState([]);

  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(res => {
        console.log( res.data.results);
        setPeople(res.data.results);
        console.log(res.data)
      })
      .catch(err => {
        console.log("err", err);
      });
  }, []);

  return (
    <div className="character-list">
      {people.map(people => {
          
       return (

          <CharacterCard
            key={people.index}
            name={people.name}
            height={people.height}
            mass={people.mass}
            eye_color={people.eye_color}
            hair_color={people.hair_color}
            skin_color={people.skin_color}
            birth_year={people.birth_year}
            gender={people.gender}
            homeworld={people.homeworld}
          />
        );
      })}
    </div>
  );
}

export default CharacterList;
