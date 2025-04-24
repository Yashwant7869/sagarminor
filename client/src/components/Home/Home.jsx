
import React,{useState, useEffect} from "react";
import Navbar from "../Navbar/Navbar.jsx";
import Hero from "../Hero/Hero.jsx";
import HeroCard from "../HeroCard/HeroCard.jsx";
import BgVideo from '../../assets/yoga.mp4';
import wave from "../../assets/wave Gif.gif";
import Rapidscat from "../RapidScat/Rapidscat.jsx";
import Satelite from "../Satellite/Satellite.jsx";
import Footer from "../Footer/Footer.jsx";
import Footer5 from "../Footer/Footer5.jsx";
import AOS from "aos";
import "aos/dist/aos.css";

const Home = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <div className=""> 
        <Navbar />
        <Hero />
      <HeroCard />
      <Rapidscat />
      <Satelite />
      <Footer5 />
    </div>
  );
};

export default Home;
