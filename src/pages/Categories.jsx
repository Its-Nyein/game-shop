import React from "react";
import "./categories.css";

function Categories({ games, reference }) {
  return (
    <section className="categories" id="categories" ref={reference}>
      <h1>Categories</h1>
    </section>
  );
}

export default Categories;
