import React, { useState } from "react";
import "./Comments.css";

function Comments({ addComment }) {
  const [commentObject, setCommentObject] = useState({});

  const { name, body } = commentObject;

  return (
    <div className="Comment-section">
      <h2>Leave a comment...</h2>
      <label>
        {" "}
        Name:
        <input
          onChange={(e) => {
            setCommentObject({ ...commentObject, name: e.target.value });
          }}
          value={commentObject.name}
        />
      </label>
      <label for="comments">Comment:</label>
      <textarea
        onChange={(e) => {
          setCommentObject({ ...commentObject, body: e.target.value });
        }}
        value={commentObject.body}
        name="coments"
        rows="4"
        cols="40"
      />
      <input
        onClick={() => {
          addComment(name, body);
        }}
        type="submit"
        value="submit"
      ></input>
    </div>
  );
}

export default Comments;
