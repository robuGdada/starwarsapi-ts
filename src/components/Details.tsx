import { Character } from "@/types/Character";
import React from "react";

interface DetailsProps {
  character: Character;
  onBack: () => void;
}
const Details = ({ character, onBack }: DetailsProps) => {
  return (
    <div>
      <h1>{character.name}</h1>
      <div>Gender: {character.gender}</div>
      <div>Mass: {character.mass}</div>
      <div>Hair Color: {character.hair_color}</div>
      <div>HomeWorld: {character.homeworld}</div>
      <button onClick={onBack}>Back</button>
    </div>
  );
};

export default Details;
