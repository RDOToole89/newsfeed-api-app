import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { isCompositeComponent } from "react-dom/test-utils";

function ArticleDetails() {
  const params = useParams();
  const { articleId } = params;
  console.log(articleId);

  const [retrievedArticle, setRetrievedArticle] = useState({ status: "idle", data: [] });

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
    <div>
      {retrievedArticle.data ? (
        retrievedArticle.data.map((article) => {
          return (
            <div>
              <h1>{article.title}</h1>
            </div>
          );
        })
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
}

export default ArticleDetails;
