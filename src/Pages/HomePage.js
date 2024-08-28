import React from "react";
import Banner from "../components/Banner/Banner";
import CoinsTable from "../components/CoinsTable";
import Cryptonews from "../components/News";
import Footer from "../components/Footer";

const Homepage = () => {
  return (
    <>
      <Banner />
      <CoinsTable />
      <Cryptonews/>
      <Footer/>
    </>
  );
};

export default Homepage;
