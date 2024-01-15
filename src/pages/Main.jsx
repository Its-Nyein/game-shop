import React, { useState } from "react";
import "./main.css";
import SlideMenu from "../components/SlideMenu";
import Header from "./Header";

function Main() {
  const [active, setActive] = useState(false);

  const handleToggleActive = () => {
    setActive(!active);
  };

  return (
    <main>
      <SlideMenu active={active} />
      <div className={`banner ${active ? "active" : undefined}`}>
        <Header toggleHandle={handleToggleActive} />
      </div>
    </main>
  );
}

export default Main;
