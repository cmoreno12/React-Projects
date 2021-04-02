import React from "react";
import { Redirect, useParams } from "react-router";
import { getHeroById } from "../../selectors";

export const HeroScreen = () => {
  const { heroId } = useParams();

  const hero = getHeroById(heroId);

  if (!hero) {
    return <Redirect to="/" />;
  }
  const {
    superhero,
    publisher,
    alter_ego,
    first_appearance,
    characters,
  } = hero;
  return (
    <div>
      <h1>Hero Screen</h1>
    </div>
  );
};
