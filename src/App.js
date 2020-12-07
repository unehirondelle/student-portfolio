import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Header from "../src/components/Header";
import Footer from "../src/components/Footer";
import Index from "./pages/index.js";
import Portfolio from "./pages/portfolio.js";
import Contact from "./pages/Contact.js";
import Socials from "./pages/Socials.js";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <Route exact path="/" component={Index} />
      <Route exact path="/index" component={Index} />
      <Route exact path="/react-portfolio" component={Index} />
      <Route exact path="/portfolio" component={Portfolio} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/socials" component={Socials} />
      <Footer />
    </Router>
  );
}

export default App;
