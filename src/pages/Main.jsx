import React, { useEffect, useState } from "react";
import "./main.css";
import SlideMenu from "../components/SlideMenu";
import Header from "./Header";
import Home from "./Home";

function Main() {
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

  const handleToggleActive = () => {
    setActive(!active);
  };

  const fetchData = () => {
    fetch("http://localhost:3000/api/gamesData.json")
      .then((res) => res.json())
      .then((data) => setGames(data))
      .catch((e) => console.log(e.message));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <main>
      <SlideMenu active={active} />
      <div className={`banner ${active ? "active" : undefined}`}>
        <Header toggleHandle={handleToggleActive} />
        <div className="container-fluid">
          <Home games={games} />
        </div>
      </div>
    </main>
  );
}

export default Main;
