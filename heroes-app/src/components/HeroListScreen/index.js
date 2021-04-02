import React from "react";
import { getHeroesByPublisher } from "../../selectors";
import { HeroCard } from "../HeroCard";

export const HeroListScreen = ({ publisher }) => {
  const heroes = getHeroesByPublisher(publisher);
  return (
    <div className="d-flex flex-wrap">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
