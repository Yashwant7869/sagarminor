// import React,{useState, useEffect} from "react";
// import Navbar2 from "../Navbar/Navbar2.jsx";
// import Hero3 from "../Hero/Hero3.jsx";

// // import BgVideo from '../../assets/earth-bg.mp4';
// import BgVideo from '../../assets/bailvideo.mp4';
// import AOS from "aos";
// import "aos/dist/aos.css";

// const FAQ = () => {
//   React.useEffect(() => {
//     AOS.init({
//       duration: 1200,
//       easing: "ease-in-out",
//     });
//   });
//   return (
//     <div className="">
//       <div className="h-[700px] relative">
//         <Navbar2 />
//         <Hero3 />
//       </div>
      
//     </div>
//   );
// };

// export default FAQ;



import React, {useState, useEffect} from "react";
import Navbar2 from "../Navbar/Navbar2.jsx";
import Hero3 from "../Hero/Hero3.jsx";

// import BgVideo from '../../assets/earth-bg.mp4';
import BgVideo from '../../assets/bailvideo.mp4';
import AOS from "aos";
import "aos/dist/aos.css";

const FAQ = () => {
  React.useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: "ease-in-out",
    });
  });
  return (
    <div className="bg-red-50">
      <div className="h-[700px] relative bg-gradient-to-b from-red-800 to-red-900">
        <Navbar2 />
        <Hero3 />
      </div>
    </div>
  );
};

export default FAQ;