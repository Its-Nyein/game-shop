import React from "react";
import "./home.css";
import GameSwiper from "../components/GameSwiper";

function Home({ games }) {
  return (
    <section id="home" className="home active">
      <div className="container-fluid">
        <div className="row">
          <GameSwiper games={games} />
        </div>
      </div>
    </section>
  );
}

export default Home;
