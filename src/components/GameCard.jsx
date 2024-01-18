import React, { useContext } from "react";
import "./gameCard.css";
import GameRating from "./GameRating";
import { AppContext } from "../App";

function GameCard({ game }) {
  const { library, setLibrary, bag, setBag } = useContext(AppContext);

  const handleAddToLibrary = (game) => {
    setLibrary([...library, game]);
  };

  const handleRemoveFromLibrary = (game) => {
    setLibrary(library.filter((item) => item.id !== game.id));
  };

  const handleAddToBag = (game) => {
    if (bag.includes(game)) return;
    setBag([...bag, game]);
  };

  return (
    <div className="col-xl-3 col-lg-4 col-md-6">
      <div className="gameCard">
        <img src={game.img} alt={game.title} className="img-fluid" />
        <a
          href="#"
          className={`like ${library.includes(game) ? "active" : undefined}`}
          onClick={
            library.includes(game)
              ? () => handleRemoveFromLibrary(game)
              : () => handleAddToLibrary(game)
          }
        >
          <i className="bi bi-heart-fill"></i>
        </a>
        <div className="game-feature">
          <span className="gameLevel">{game.level}</span>
          <GameRating rating={game.rating} />
        </div>
        <div className="game-title mt-4 mb-3">{game.title}</div>
        <div className="game-price">
          {game.discount !== 0 && (
            <>
              <span className="discount">
                <i>{game.discount * 100}%</i>
              </span>
              <span className="prev-price">${game.price.toFixed(2)}</span>
            </>
          )}
          <span className="current-price">
            ${((1 - game.discount) * game.price).toFixed(2)}
          </span>
        </div>
        <a
          href="#"
          className={`addBag ${bag.includes(game) ? "active" : undefined}`}
          onClick={() => handleAddToBag(game)}
        >
          <i className="bi bi-bag-plus-fill"></i>
        </a>
      </div>
    </div>
  );
}

export default GameCard;
