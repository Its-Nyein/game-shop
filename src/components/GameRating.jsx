import React, { useEffect, useState } from "react";
import "./gameRating.css";

function GameRating({ rating }) {
  const [stars, setStars] = useState([]);

  const generateRating = () => {
    let stars = [];
    if (rating > 5 || rating < 1) {
      return;
    }
    for (let i = 0; i < rating; i++) {
      stars.push(i);
    }
    return stars;
  };

  useEffect(() => {
    setStars(generateRating());
  }, []);

  return (
    <div className="game-rating">
      {stars.map((star, index) => (
        <i key={index} className="bi bi-star-fill"></i>
      ))}
    </div>
  );
}

export default GameRating;
