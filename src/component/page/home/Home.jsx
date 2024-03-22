import React from "react";
import Layout from "../../Layout/Layout";
import Hero from "../../Hero/Hero";
import Service from './../../service/Service';
import Gallery from "../../Gallery/Gallery";

const Home = () => {
  return (
    <Layout>
      <div className="h-[100vh]">
        <Hero/>
      </div>
      <Service/>
      <Gallery/>
    </Layout>
  );
};

export default Home;
