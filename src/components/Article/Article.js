/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { NavLink } from "react-router-dom";
import LikeButton from "../LikeButton/LikeButton";
import "./Article.css";

function Article(props) {
  const { title, author, description, image, source, setLikes } = props;

  const article = encodeURIComponent(title);

  return (
    <div className="Article-container">
      <h2 className="Article-header">{title}</h2>
      <div className="Article">
        <div className="Article-content">
          <p className="Article-author">
            Author: {!author || author === "" ? "Unknown author" : author}
          </p>
          <p className="Article-description">{description}</p>

          <p className="Article-readmore">
            <NavLink to={`/Article/${article}`}>Read more...</NavLink>
          </p>
        </div>
        <div className="Article-imgbox">
          <img
            className="Article-img"
            src={image ? image : "https://icon-library.com/images/found-icon/found-icon-7.jpg"}
            alt="News Image"
          />
          <p className="Article-source">source: {source}</p>
          <LikeButton setLikes={setLikes} />
        </div>
      </div>
    </div>
  );
}

export default Article;
