import React, { useState } from "react";
import "./LikeButton.css";

function LikeButton({ setLikes }) {
  const [likeArticle, setLikeArticle] = useState(0);

  return (
    <div className="LikeButton">
      <button
        className="LikeButton-btn"
        onClick={() => {
          setLikeArticle(likeArticle + 1);
          setLikes(likeArticle);
        }}
      >
        <span className="LikeButton-icon">👍</span>
      </button>
      <div className="LikeButton-counter">{likeArticle}</div>
    </div>
  );
}

export default LikeButton;
