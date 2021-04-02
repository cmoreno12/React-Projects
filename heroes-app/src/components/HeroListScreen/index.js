import React, { useMemo } from "react";
import { getHeroesByPublisher } from "../../selectors";
import { HeroCard } from "../HeroCard";

export const HeroListScreen = ({ publisher }) => {
  const heroes = useMemo(() => getHeroesByPublisher(publisher), [publisher]);
  return (
    <div className="d-flex flex-wrap animate__animated animate__fadeIn">
      {heroes.map((hero) => (
        <HeroCard key={hero.id} {...hero} />
      ))}
    </div>
  );
};
