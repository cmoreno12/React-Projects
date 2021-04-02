import React from "react";
import { heroes } from "../../data";
import { HeroCard } from "../HeroCard";
import { useForm } from "../../hooks/useForm";

export const SearchScreen = () => {
  const heroesFiltered = heroes;
  const [formValues, handleInputChange] = useForm({ searchText: "" });
  const { searchText } = formValues;
  const handleSearch = (e) => {
    e.preventDefault();
    console.log(searchText);
  };

  return (
    <>
      <h1>Hero Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Search Form:</h4>
          <hr />
          <form onSubmit={handleSearch}>
            <input
              type="text"
              placeholder="Find your hero"
              className="form-control"
              autoComplete="off"
              name="searchText"
              value={searchText}
              onChange={handleInputChange}
            />
            <button
              type="submit"
              className="btn w-100 mt-2 btn-block btn-outline-primary"
            >
              Search...
            </button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {heroesFiltered.map((hero) => (
            <HeroCard key={hero.id} {...hero} />
          ))}
        </div>
      </div>
    </>
  );
};
