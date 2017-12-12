import React from "react";
const style = {
  background: `url(${require('../img/reynier-carl-440180.jpg')}) no-repeat 50% 75%`,
  backgroundSize: `100%`,
  height: `100%`
}
const Hero = () => {
  return (
    <section className="hero is-info" style={style}>
      <div className="hero-body">
        <div className="container">
          <h1 className="title">NYT Article Finder</h1>
          <h2 className="subtitle">Search and save articles like a winner.</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;
