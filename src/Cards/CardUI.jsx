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
        <div className="card-img-overlay">
          <img
            className="heart"
            src="https://i.imgur.com/z6Seu1T.png"
            alt="favorite-heart"
          />
        </div>
      </div>

      <div className="card-body text-dark">
        <div className="top-section">
          <h4 className="card-title">A pink pineapple</h4>
          <p className="price card-text text-dark">$29.99</p>
        </div>
        <div className="middle-section">
          <div className="star-score">
            <img
              className="star"
              src="https://i.imgur.com/7CAZ8cT.png"
              alt="stars"
            />
            <img
              className="star"
              src="https://i.imgur.com/7CAZ8cT.png"
              alt="stars"
            />
            <img
              className="star"
              src="https://i.imgur.com/7CAZ8cT.png"
              alt="stars"
            />
            <img
              className="star"
              src="https://i.imgur.com/7CAZ8cT.png"
              alt="stars"
            />
            <img
              className="star"
              src="https://i.imgur.com/7CAZ8cT.png"
              alt="stars"
            />
          </div>
          <div className="retailers">
            <img
              className="amazon"
              src="https://i.imgur.com/B5vpfpp.png"
              alt="amazon"
            />
            <img
              className="walmart"
              src="https://i.imgur.com/rb4QyCq.png"
              alt="walmart"
            />
            <img
              className="target"
              src="https://i.imgur.com/yRoHsnv.png"
              alt="target"
            />
            <img
              className="ebay"
              src="https://i.imgur.com/LdH3t8M.png"
              alt="ebay"
            />
            <img
              className="facebook"
              src="https://i.imgur.com/Qr8TePZ.png"
              alt="facebook-marketplace"
            />
          </div>
          <div className="chevron" />
        </div>
        <div className="bottom-section">
          <a href="#" id="read" className="btn btn-outline-primary">
            Read the Reviews
          </a>
          <a href="#" id="review" className="btn btn-outline-success">
            Buy Now
          </a>
        </div>
      </div>
    </div>
  );
};

export default Card;
