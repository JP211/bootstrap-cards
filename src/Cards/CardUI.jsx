import React from "react";
import "./card-style.css";

const Card = props => {
  return (
    <div className="card text-center shadow">
      <div className="overflow">
        <img
          className="card-img-top"
          src="https://images.unsplash.com/photo-1556690171-9f6645f4455e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=80"
          alt="pink pineapple"
        />
      </div>
      <div className="card-body text-dark">
        <h4 className="card-title">A pink pineapple</h4>
        <p className="card-text text-secondary">
          A bunch of people would say this is a pink pineapple and they would be
          right. This is indeed a very pink pineapple.
        </p>
        <a href="#" className="btn btn-outline-success">
          Buy Now
        </a>
      </div>
    </div>
  );
};

export default Card;
