import React from "react";
import TEST_ID from "./Home.testid";
import Header from "../../components/header/Header";
import Footer from "../../components/Footer/Footer";
const Home = () => {
  return (
    <div data-testid={TEST_ID.container}>
      <Header />
      <h1>This is the homepage</h1>
      <p>Good luck with the project!</p>
      <Footer />
    </div>
  );
};

export default Home;
