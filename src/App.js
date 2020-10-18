import { Switch, Route } from "react-router-dom";
import React from "react";
import "./App.css";
import Newsfeed from "./components/Newsfeed/Newsfeed";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Home from "./components/pages/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import ArticleDetails from "./components/ArticleDetails/ArticleDetails";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/newsfeed" component={Newsfeed} />
          <Route exact path="/article/:articleId?" component={ArticleDetails} />
        </Switch>
      </div>
      <Footer />
    </div>
  );
}

export default App;
