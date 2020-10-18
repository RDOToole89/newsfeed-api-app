import React, { useState, useEffect } from "react";
import "./Newsfeed.css";
import Article from "../Article/Article";
import axios from "axios";

function Newsfeed() {
  const [articles, setArticles] = useState({ status: "idle", data: [] });
  const [sortBy, setSortBy] = useState("us");

  useEffect(() => {
    console.log("USE EFFECT FIRED");

    const fetchArticles = async () => {
      setArticles({ status: "loading", data: [] });
      try {
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=${sortBy}&apiKey=d3ba2532ef6b4992af2d66fc03a7074f`
        );
        setArticles({ status: "success", data: response.data.articles });
      } catch (error) {
        console.log("ERROR:", error.message);
      }
    };
    fetchArticles();
  }, [sortBy]);

  console.log(articles);

  const createArticleMap = articles.data.map((article, index) => {
    return (
      <Article
        key={index + 1}
        title={article.title}
        author={article.author}
        source={article.source.name}
        description={article.description}
        url={article.url}
        image={article.urlToImage}
        publishedAt={article.publishedAt}
        content={article.content}
      />
    );
  });

  const changeSort = (event) => {
    console.log("new sort order:", event.target.value);
    setSortBy(event.target.value);
  };

  console.log(createArticleMap);

  return (
    <div>
      <div className="Sorting-bar">
        <h1 className="Newsfeed-header">NEWSFEED</h1>
        <select className="Newsfeed-selector" onChange={changeSort} value={sortBy}>
          <option value="us">USA News</option>
          <option value="nl">Dutch News</option>
          <option value="de">German News</option>
        </select>
      </div>
      <div className="Newsfeed-container">
        {articles.data ? createArticleMap : <h1>Loading...</h1>}
      </div>
    </div>
  );
}

export default Newsfeed;
