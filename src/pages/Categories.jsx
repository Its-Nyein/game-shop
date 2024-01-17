import React, { useEffect, useState } from "react";
import "./categories.css";
import filterListData from "../data/filterListData";
import GameCard from "../components/GameCard";

function Categories({ games, reference }) {
  const [aGames, setAGames] = useState([]);

  const [filters, setFilters] = useState(filterListData);

  const fetchData = () => {
    fetch("http://localhost:3000/api/gamesData.json")
      .then((res) => res.json())
      .then((data) => setAGames(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleFilterGames = (category) => {
    const newFilter = filters.map((filter) => {
      filter.active = false;
      if (filter.name === category) {
        filter.active = true;
      }
      return filter;
    });
    setFilters(newFilter);
    if (category === "All") {
      setAGames(games);
      return;
    }

    setAGames(games.filter((game) => game.category === category));
  };

  const [text, setText] = useState("");

  const handleSearch = (e) => {
    setAGames(
      games.filter((game) => game.title.toLowerCase().includes(e.target.value))
    );
    setText(e.target.value);
  };

  return (
    <section className="categories" id="categories" ref={reference}>
      <div className="container-fluid mt-2">
        <div className="row">
          <div className="col-lg-8 d-flex align-items-center justify-content-start">
            <ul className="filters">
              {filters.map((filter) => (
                <li
                  key={filter.id}
                  className={`${filter.active ? "active" : undefined}`}
                  onClick={() => handleFilterGames(filter.name)}
                >
                  {filter.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="col-lg-4 d-flex align-items-center justify-content-end">
            <div className="search">
              <i className="bi bi-search"></i>
              <input
                type="text"
                name="search"
                value={text}
                placeholder="Search"
                onChange={handleSearch}
              />
            </div>
          </div>
        </div>
        <div className="row">
          {aGames.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Categories;
