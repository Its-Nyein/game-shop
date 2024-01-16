import React from "react";
import "./library.css";

function Library({ games, reference }) {
  return (
    <section id="library" className="library" ref={reference}>
      <h1>My Library</h1>
    </section>
  );
}

export default Library;
