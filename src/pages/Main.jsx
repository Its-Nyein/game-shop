import React, { useEffect, useRef, useState, useContext } from "react";
import "./main.css";
import SlideMenu from "../components/SlideMenu";
import Header from "./Header";
import Home from "./Home";
import Categories from "./Categories";
import Library from "./Library";
import Bag from "./Bag";
import { AppContext } from "../App";

function Main() {
  const { library, bag } = useContext(AppContext);
  const [active, setActive] = useState(false);
  const [games, setGames] = useState([]);

  const homeRef = useRef();
  const categoriesRef = useRef();
  const libraryRef = useRef();
  const bagRef = useRef();

  const sections = [
    {
      name: "home",
      ref: homeRef,
      active: true,
    },
    {
      name: "categories",
      ref: categoriesRef,
      active: false,
    },
    {
      name: "library",
      ref: libraryRef,
      active: false,
    },
    {
      name: "bag",
      ref: bagRef,
      active: false,
    },
  ];

  const handleToggleActive = () => {
    setActive(!active);
  };

  const handleSectionActive = (target) => {
    sections.map((section) => {
      section.ref.current.classList.remove("active");
      if (section.ref.current.id === target) {
        section.ref.current.classList.add("active");
      }
      return section;
    });
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
      <SlideMenu active={active} sectionActive={handleSectionActive} />
      <div className={`banner ${active ? "active" : undefined}`}>
        <Header toggleHandle={handleToggleActive} />
        <div className="container-fluid">
          {games && games.length > 0 && (
            <>
              <Home games={games} reference={homeRef} />
              <Categories games={games} reference={categoriesRef} />
              <Library games={library} reference={libraryRef} />
              <Bag games={bag} reference={bagRef} />
            </>
          )}
          {/* loading data ->
              called protection checking when we loading the data and pass it to the 
              sub component it can be empty array so we checked the protection.          
          */}
        </div>
      </div>
    </main>
  );
}

export default Main;
