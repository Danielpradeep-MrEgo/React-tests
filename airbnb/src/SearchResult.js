import React from "react";
import "./SearchResult.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";

function SearchResult({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
}) {
  return (
    <div className="searchResult">
      <img src={img} alt="" />
      <FavoriteBorderIcon className="searchResult__heart" />
      <div className="searchResult__info">
        <div className="searchResult__infoTop">
          <p>{location}</p>
          <h4>{title}</h4>
          <p>______</p>
          <p>{description}</p>
        </div>
        <div className="searchResult__infoBottom">
          <div className="searchResult__price">
            <h2>{price}</h2>
            <p>{total}</p>
            </div>
            <div className="searchResult__stars">
              <StarIcon />
              <div className="searchResult__star">
                <p>
                  <strong>{star}</strong>
                </p>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchResult;
