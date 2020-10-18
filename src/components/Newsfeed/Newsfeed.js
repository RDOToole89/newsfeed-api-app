import React, { useState, useEffect } from "react";
import "./Newsfeed.css";
import Article from "../Article/Article";
import axios from "axios";
import Navbar from "../Navbar/Navbar";

function Newsfeed() {
  const [articles, setArticles] = useState({ status: "idle", data: [] });
  const [sortBy, setSortBy] = useState("us");
  const [sortPreferences, setSortPreferences] = useState("");

  const setLikes = (likes) => {
    const updatedArticles = articles.data.map((article) => {
      return {
        ...article,
        likes: !likes ? 0 : likes,
      };
    });

    console.log(updatedArticles);
    setArticles({ status: "success", data: updatedArticles });
  };

  const submitArticles = (searchQuery) => {
    const fetchArticles = async () => {
      const response = await axios.get(
        `https://newsapi.org/v2/everything?q=${searchQuery}&apiKey=d3ba2532ef6b4992af2d66fc03a7074f`
      );
      setArticles({ status: "success", data: response.data.articles });
    };
    fetchArticles();
  };

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

  console.log("ARTICLES:", articles);
  console.log("SORT PREFERENCES", sortPreferences);

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
        setLikes={setLikes}
      />
    );
  });

  const articlesSortedByLikes = [...articles.data].sort((a, b) => b.likes - a.likes);

  // if (sortPreferences === "likes") {
  //   setArticles({ status: "success", data: articlesSortedByLikes });
  // }
  console.log("ARTICLES SORTED BY LIKES:", articlesSortedByLikes);

  console.log("ARTICLES:", articles);

  return (
    <div>
      <Navbar submitArticles={submitArticles} />
      <div className="container">
        <div className="Sorting-bar">
          <h1 className="Newsfeed-header">NEWSFEED</h1>
          <select
            className="Newsfeed-selector"
            onChange={(e) => {
              setSortBy(e.target.value);
            }}
            value={sortBy}
          >
            <option value="us">USA News</option>
            <option value="nl">Dutch News</option>
            <option value="de">German News</option>
          </select>
          <select
            className="Newsfeed-selector"
            onChange={(e) => {
              setSortPreferences(e.target.value);
            }}
            value={sortPreferences}
          >
            <option value="null"> Sort By: </option>
            <option value="likes">Likes</option>
          </select>
        </div>
        <div className="Newsfeed-container">
          {articles.data ? createArticleMap : <h1>Loading...</h1>}
        </div>
      </div>
    </div>
  );
}

export default Newsfeed;
