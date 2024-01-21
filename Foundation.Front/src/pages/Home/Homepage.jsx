import React from "react";
import Slider from "../../components/Slider/Slider";
import Card from "../../components/Card/Card";
import OurLeadership from "../../components/OurLeadership/OurLeadership";
import { Helmet } from "react-helmet";
import OurBlog from "../../components/OurBlog/OurBlog";

function Homepage() {
  return (
    <>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Slider />
      <Card />
      <OurLeadership />
      <OurBlog />
    </>
  );
}

export default Homepage;
