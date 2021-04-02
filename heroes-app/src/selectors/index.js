import { heroes } from "../data";

const VALIDPUBLISHER = ["DC Comics", "Marvel Comics"];

export const getHeroesByPublisher = (publisher) => {
  if (!VALIDPUBLISHER.includes(publisher)) {
    throw new Error(`Publisher ${publisher} incorrect.`);
  }
  return heroes.filter((hero) => hero.publisher === publisher);
};

export const getHeroesById = (id) => {
  return heroes.find((hero) => hero.id === id);
};
