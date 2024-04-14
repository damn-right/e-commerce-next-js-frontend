import React from "react";
import { SectionTitle } from "../components";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <SectionTitle title="About Us" path="Home | About" bg="src/assets/about_banner.jpg"/>
      <div className="about-content text-center max-w-2xl mx-auto mt-5">
        <h2 className="text-6xl text-center mb-10 max-sm:text-3xl text-accent-content">
          We love our customers!
        </h2>
        <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content">
          Welcome to Veggie Delight, your ultimate destination for fresh and
          flavorful vegetables delivered right to your doorstep! At Veggie
          Delight, we're passionate about providing you with the finest
          selection of farm-fresh vegetables that are not only delicious but
          also packed with essential nutrients.
        </p>
        <br></br>
        <h2 className="text-6xl text-center mb-10 max-sm:text-3xl text-accent-content">
          Our Journey
        </h2>
        <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content">
          Veggie Delight started with a simple yet powerful idea – to make fresh
          and healthy vegetables accessible to everyone, while supporting local
          farmers and promoting sustainable agriculture practices. Our journey
          began in 2024, and since then, we have been committed to delivering
          quality produce to our customers across india.
        </p>
        <br></br>
        <h2 className="text-6xl text-center mb-10 max-sm:text-3xl text-accent-content">
          Our Journey
        </h2>
        <p className="text-lg text-center max-sm:text-sm max-sm:px-2 text-accent-content">
          Veggie Delight started with a simple yet powerful idea – to make fresh
          and healthy vegetables accessible to everyone, while supporting local
          farmers and promoting sustainable agriculture practices. Our journey
          began in 2024, and since then, we have been committed to delivering
          quality produce to our customers across india.
        </p>
        <Link
          to="/contact"
          className="btn btn-wide bg-blue-600 hover:bg-blue-500 text-white mt-5"
        >
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default About;
