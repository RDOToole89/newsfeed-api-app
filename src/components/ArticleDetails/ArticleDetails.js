import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import "./ArticleDetails.css";
import Navbar from "../Navbar/Navbar";
import Comments from "../Comments/Comments";

function ArticleDetails() {
  const params = useParams();
  const { articleId } = params;
  console.log(articleId);

  const [retrievedArticle, setRetrievedArticle] = useState({ status: "idle", data: [] });
  const [comments, setComments] = useState([{ name: "Roibin", body: "Blabla" }]);

  const addComment = (name, body) => {
    console.log("Adding comment: name, body", name, body);
    const newComment = {
      name,
      body,
    };
    setComments([...comments, newComment]);
  };

  // const mapComments = comments.map((comment) => <Comment name={name} body={body} />);

  useEffect(() => {
    console.log("useEffect fired in article details");
    setRetrievedArticle({ status: "loading", data: [] });
    const fetchArticle = async () => {
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/everything?q=${params.articleId}&apiKey=d3ba2532ef6b4992af2d66fc03a7074f`
        );
        console.log("RESPONSE ARTICLES", response.data.articles);

        setRetrievedArticle({ status: "success", data: response.data.articles });
      } catch (error) {
        console.log("ERROR:", error.message);
      }
    };
    fetchArticle();
  }, [params.articleId]);

  console.log("RETRIEVED ARTICLE", retrievedArticle.data);

  return (
    <div className="Article-details">
      <Navbar />
      {retrievedArticle.data ? (
        retrievedArticle.data.map((article) => {
          return (
            <div>
              <h1>{article.title}</h1>
              <p>{article.publishedAt}</p>
              <img
                className="Article-details-img"
                alt={article.title}
                src={
                  article.urlToImage
                    ? article.urlToImage
                    : "https://icon-library.com/images/found-icon/found-icon-7.jpg"
                }
              />
              <p>{article.content}</p>
              <a href={article.url}>Read the full article...</a>
            </div>
          );
        })[0]
      ) : (
        <h1>Loading...</h1>
      )}
      <Comments addComment={addComment} />
      {comments ? (
        comments.map((comment) => {
          return (
            <div>
              <h4>{comment.name}</h4>
              <p>{comment.body}</p>
            </div>
          );
        })
      ) : (
        <h1>No comments...</h1>
      )}
    </div>
  );
}

export default ArticleDetails;
