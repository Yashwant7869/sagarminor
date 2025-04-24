// import React from 'react';
// import { Link } from 'react-router-dom';

// // SVG Icon components to replace images
// const MeditationIcon = () => (
//   <svg viewBox="0 0 24 24" className="w-16 h-16 mb-2 text-blue-300">
//     <path fill="currentColor" d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4M12,6C10.9,6 10,6.9 10,8C10,9.1 10.9,10 12,10C13.1,10 14,9.1 14,8C14,6.9 13.1,6 12,6M12,15L9,12L7.5,13.5L12,18L16.5,13.5L15,12L12,15Z" />
//   </svg>
// );

// const ExerciseIcon = () => (
//   <svg viewBox="0 0 24 24" className="w-16 h-16 mb-2 text-blue-300">
//     <path fill="currentColor" d="M20.57,14.86L22,13.43L20.57,12L17,15.57L8.43,7L12,3.43L10.57,2L9.14,3.43L7.71,2L5.57,4.14L4.14,2.71L2.71,4.14L4.14,5.57L2,7.71L3.43,9.14L2,10.57L3.43,12L7,8.43L15.57,17L12,20.57L13.43,22L14.86,20.57L16.29,22L18.43,19.86L19.86,21.29L21.29,19.86L19.86,18.43L22,16.29L20.57,14.86Z" />
//   </svg>
// );

// const GamesIcon = () => (
//   <svg viewBox="0 0 24 24" className="w-16 h-16 mb-2 text-blue-300">
//     <path fill="currentColor" d="M7,6H17A6,6 0 0,1 23,12A6,6 0 0,1 17,18C15.22,18 13.63,17.23 12.53,16H11.47C10.37,17.23 8.78,18 7,18A6,6 0 0,1 1,12A6,6 0 0,1 7,6M6,9V11H4V13H6V15H8V13H10V11H8V9H6M15.5,12A1.5,1.5 0 0,0 14,13.5A1.5,1.5 0 0,0 15.5,15A1.5,1.5 0 0,0 17,13.5A1.5,1.5 0 0,0 15.5,12M18.5,9A1.5,1.5 0 0,0 17,10.5A1.5,1.5 0 0,0 18.5,12A1.5,1.5 0 0,0 20,10.5A1.5,1.5 0 0,0 18.5,9Z" />
//   </svg>
// );

// const BooksIcon = () => (
//   <svg viewBox="0 0 24 24" className="w-16 h-16 mb-2 text-blue-300">
//     <path fill="currentColor" d="M19 2L14 6.5V17.5L19 13V2M6.5 5C4.55 5 2.45 5.4 1 6.5V21.16C1 21.41 1.25 21.66 1.5 21.66C1.6 21.66 1.65 21.59 1.75 21.59C3.1 20.94 5.05 20.5 6.5 20.5C8.45 20.5 10.55 20.9 12 22C13.35 21.15 15.8 20.5 17.5 20.5C19.15 20.5 20.85 20.81 22.25 21.56C22.35 21.61 22.4 21.59 22.5 21.59C22.75 21.59 23 21.34 23 21.09V6.5C22.4 6.05 21.75 5.75 21 5.5V19C19.9 18.65 18.7 18.5 17.5 18.5C15.8 18.5 13.35 19.15 12 20V6.5C10.55 5.4 8.45 5 6.5 5Z" />
//   </svg>
// );

// const CommunityIcon = () => (
//   <svg viewBox="0 0 24 24" className="w-16 h-16 mb-2 text-blue-300">
//     <path fill="currentColor" d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
//   </svg>
// );

// const VideoIcon = () => (
//   <svg viewBox="0 0 24 24" className="w-16 h-16 mb-2 text-blue-300">
//     <path fill="currentColor" d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z" />
//   </svg>
// );

// // Wave SVG for the bottom effect
// const WaveEffect = () => (
//   <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[200px] text-blue-400 opacity-50 -translate-y-24 relative z-0">
//     <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
//     <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
//     <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
//   </svg>
// );

// const ServiceData = [
//     {
//         title: "Breathing and Meditation",
//         content: "Breathing techniques",
//         description: "Practicing mindful breathing and meditation helps reduce stress, enhance focus, and bring a sense of calm to daily life.",
//         icon: <MeditationIcon />,
//         aosDelay: "300",
//         link: "/breathing",
//         bgColor: "from-blue-800 to-purple-700"
//     },
//     {
//         title: "Exercise Videos",
//         content: "Watch exercise videos for physical well-being",
//         description: "Boost your fitness with a variety of exercises designed to improve your mental and physical health.",
//         icon: <ExerciseIcon />,
//         aosDelay: "400",
//         link: "/relax",
//         bgColor: "from-green-700 to-blue-700"
//     },
//     {
//         title: "Games for Fun",
//         content: "Play games to release your stress",
//         description: "Engaging in short, fun games offers a quick mental break and boosts creativity.",
//         icon: <GamesIcon />,
//         aosDelay: "500",
//         link: "/Bubble",
//         bgColor: "from-pink-700 to-purple-700"
//     },
//     {
//         title: "Books and Thoughts",
//         content: "Read books to gain knowledge",
//         description: "Reading expands perspectives and inspires thoughtful reflection.",
//         icon: <BooksIcon />,
//         aosDelay: "600",
//         link: "/books",
//         bgColor: "from-yellow-700 to-orange-700"
//     },
//     {
//         title: "Community and Blogs",
//         content: "Community to share experiences",
//         description: "Writing in a blog provides a space to express emotions and connect with others on similar journeys.",
//         icon: <CommunityIcon />,
//         aosDelay: "700",
//         link: "/articles",
//         bgColor: "from-indigo-700 to-blue-700"
//     },
//     {
//         title: "Videos for Relief",
//         content: "Watch videos to release stress",
//         description: "Discover stress-relief techniques through curated videos designed to bring calm and balance.",
//         icon: <VideoIcon />,
//         aosDelay: "800",
//         link: "https://youtube.com/playlist?list=PLi7xA3cpIGd3p6E-YKRVozq2l51H0AE9S&si=rBPAVRzp2CP9_Aob",
//         bgColor: "from-red-700 to-pink-700"
//     },
// ];

// const ServiceCard = ({ data, onCardClick }) => {
//   return (
//     <Link
//       to={data.link}
//       onClick={onCardClick}
//       data-aos="fade-up"
//       data-aos-delay={data.aosDelay}
//       className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] bg-gradient-to-br ${data.bgColor} backdrop-blur-sm`}
//       target={data.link.includes("http") ? "_blank" : "_self"}
//     >
//       <div className="absolute inset-0 bg-gradient-to-br from-black/30 to-black/5 z-10"></div>
      
//       {/* Card content */}
//       <div className="relative z-20 p-6 flex flex-col items-center text-center h-full">
//         <div className="mb-2 transform transition-transform duration-300 group-hover:scale-110">
//           {data.icon}
//         </div>
        
//         <h3 className="text-xl font-bold text-white mb-2">{data.title}</h3>
//         <p className="text-blue-200 text-sm mb-3">{data.content}</p>
//         <p className="text-gray-200 text-sm flex-grow">{data.description}</p>
        
//         <div className="mt-4 bg-white/20 rounded-full py-1 px-4 text-sm font-medium text-white backdrop-blur-sm transform opacity-0 translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
//           {data.link.includes("http") ? "Visit" : "Explore"} →
//         </div>
//       </div>
      
//       {/* Decorative circles */}
//       <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-white/10 backdrop-blur-sm"></div>
//       <div className="absolute -bottom-12 -left-12 w-24 h-24 rounded-full bg-white/5 backdrop-blur-sm"></div>
//     </Link>
//   );
// };

// const HeroCard = ({ onCardClick }) => {
//   return (
//     <section className="relative bg-gradient-to-b from-blue-900 to-blue-700 overflow-hidden pt-12 pb-32">
//       {/* Background particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         {Array(10).fill().map((_, i) => (
//           <div 
//             key={i}
//             className="absolute rounded-full bg-blue-300/10"
//             style={{
//               width: `${20 + Math.random() * 40}px`,
//               height: `${20 + Math.random() * 40}px`,
//               top: `${Math.random() * 100}%`,
//               left: `${Math.random() * 100}%`,
//               animationDuration: `${10 + Math.random() * 20}s`,
//               animation: 'float linear infinite',
//               animationDelay: `${Math.random() * 5}s`
//             }}
//           />
//         ))}
//       </div>
      
//       <div className="container mx-auto px-4 relative z-10">
//         <h2 className="text-3xl font-bold text-center text-white mb-12">
//           <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-200 to-white">
//             Nurture Your Mental Wellbeing
//           </span>
//         </h2>
        
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {ServiceData.map((data, index) => (
//             <ServiceCard 
//               key={index} 
//               data={data} 
//               onCardClick={onCardClick} 
//             />
//           ))}
//         </div>
//       </div>
      
//       {/* Wave effect at the bottom */}
//       <div className="absolute bottom-0 left-0 right-0">
//         <WaveEffect />
//       </div>
//     </section>
//   );
// };

// export default HeroCard;



import React from 'react';
import { Link } from 'react-router-dom';

// SVG Icon components with reddish theme
const MeditationIcon = () => (
  <svg viewBox="0 0 24 24" className="w-16 h-16 mb-2 text-red-300">
    <path fill="currentColor" d="M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4M12,6C10.9,6 10,6.9 10,8C10,9.1 10.9,10 12,10C13.1,10 14,9.1 14,8C14,6.9 13.1,6 12,6M12,15L9,12L7.5,13.5L12,18L16.5,13.5L15,12L12,15Z" />
  </svg>
);

const ExerciseIcon = () => (
  <svg viewBox="0 0 24 24" className="w-16 h-16 mb-2 text-red-300">
    <path fill="currentColor" d="M20.57,14.86L22,13.43L20.57,12L17,15.57L8.43,7L12,3.43L10.57,2L9.14,3.43L7.71,2L5.57,4.14L4.14,2.71L2.71,4.14L4.14,5.57L2,7.71L3.43,9.14L2,10.57L3.43,12L7,8.43L15.57,17L12,20.57L13.43,22L14.86,20.57L16.29,22L18.43,19.86L19.86,21.29L21.29,19.86L19.86,18.43L22,16.29L20.57,14.86Z" />
  </svg>
);

const GamesIcon = () => (
  <svg viewBox="0 0 24 24" className="w-16 h-16 mb-2 text-red-300">
    <path fill="currentColor" d="M7,6H17A6,6 0 0,1 23,12A6,6 0 0,1 17,18C15.22,18 13.63,17.23 12.53,16H11.47C10.37,17.23 8.78,18 7,18A6,6 0 0,1 1,12A6,6 0 0,1 7,6M6,9V11H4V13H6V15H8V13H10V11H8V9H6M15.5,12A1.5,1.5 0 0,0 14,13.5A1.5,1.5 0 0,0 15.5,15A1.5,1.5 0 0,0 17,13.5A1.5,1.5 0 0,0 15.5,12M18.5,9A1.5,1.5 0 0,0 17,10.5A1.5,1.5 0 0,0 18.5,12A1.5,1.5 0 0,0 20,10.5A1.5,1.5 0 0,0 18.5,9Z" />
  </svg>
);

const BooksIcon = () => (
  <svg viewBox="0 0 24 24" className="w-16 h-16 mb-2 text-red-300">
    <path fill="currentColor" d="M19 2L14 6.5V17.5L19 13V2M6.5 5C4.55 5 2.45 5.4 1 6.5V21.16C1 21.41 1.25 21.66 1.5 21.66C1.6 21.66 1.65 21.59 1.75 21.59C3.1 20.94 5.05 20.5 6.5 20.5C8.45 20.5 10.55 20.9 12 22C13.35 21.15 15.8 20.5 17.5 20.5C19.15 20.5 20.85 20.81 22.25 21.56C22.35 21.61 22.4 21.59 22.5 21.59C22.75 21.59 23 21.34 23 21.09V6.5C22.4 6.05 21.75 5.75 21 5.5V19C19.9 18.65 18.7 18.5 17.5 18.5C15.8 18.5 13.35 19.15 12 20V6.5C10.55 5.4 8.45 5 6.5 5Z" />
  </svg>
);

const CommunityIcon = () => (
  <svg viewBox="0 0 24 24" className="w-16 h-16 mb-2 text-red-300">
    <path fill="currentColor" d="M12,5.5A3.5,3.5 0 0,1 15.5,9A3.5,3.5 0 0,1 12,12.5A3.5,3.5 0 0,1 8.5,9A3.5,3.5 0 0,1 12,5.5M5,8C5.56,8 6.08,8.15 6.53,8.42C6.38,9.85 6.8,11.27 7.66,12.38C7.16,13.34 6.16,14 5,14A3,3 0 0,1 2,11A3,3 0 0,1 5,8M19,8A3,3 0 0,1 22,11A3,3 0 0,1 19,14C17.84,14 16.84,13.34 16.34,12.38C17.2,11.27 17.62,9.85 17.47,8.42C17.92,8.15 18.44,8 19,8M5.5,18.25C5.5,16.18 8.41,14.5 12,14.5C15.59,14.5 18.5,16.18 18.5,18.25V20H5.5V18.25M0,20V18.5C0,17.11 1.89,15.94 4.45,15.6C3.86,16.28 3.5,17.22 3.5,18.25V20H0M24,20H20.5V18.25C20.5,17.22 20.14,16.28 19.55,15.6C22.11,15.94 24,17.11 24,18.5V20Z" />
  </svg>
);

const VideoIcon = () => (
  <svg viewBox="0 0 24 24" className="w-16 h-16 mb-2 text-red-300">
    <path fill="currentColor" d="M17,10.5V7A1,1 0 0,0 16,6H4A1,1 0 0,0 3,7V17A1,1 0 0,0 4,18H16A1,1 0 0,0 17,17V13.5L21,17.5V6.5L17,10.5Z" />
  </svg>
);

// Enhanced Wave SVG for the bottom effect with reddish theme
const WaveEffect = () => (
  <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-[200px] text-red-700 opacity-50 -translate-y-24 relative z-0">
    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
  </svg>
);

// Floating hearts animation component
const FloatingHearts = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {Array(12).fill().map((_, i) => (
        <div 
          key={i}
          className="absolute text-red-400/30 animate-float"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            fontSize: `${10 + Math.random() * 30}px`,
            animationDuration: `${15 + Math.random() * 20}s`,
            animationDelay: `${Math.random() * 5}s`
          }}
        >
          ♥
        </div>
      ))}
    </div>
  );
};

// Enhanced service data with reddish theme colors
const ServiceData = [
    {
        title: "Breathing and Meditation",
        content: "Breathing techniques",
        description: "Practicing mindful breathing and meditation helps reduce stress, enhance focus, and bring a sense of calm to daily life.",
        icon: <MeditationIcon />,
        aosDelay: "300",
        link: "/breathing",
        bgColor: "from-red-800 to-red-700"
    },
    {
        title: "Exercise Videos",
        content: "Watch exercise videos for physical well-being",
        description: "Boost your fitness with a variety of exercises designed to improve your mental and physical health.",
        icon: <ExerciseIcon />,
        aosDelay: "400",
        link: "/relax",
        bgColor: "from-rose-800 to-red-700"
    },
    {
        title: "Games for Fun",
        content: "Play games to release your stress",
        description: "Engaging in short, fun games offers a quick mental break and boosts creativity.",
        icon: <GamesIcon />,
        aosDelay: "500",
        link: "/Bubble",
        bgColor: "from-pink-800 to-rose-700"
    },
    {
        title: "Books and Thoughts",
        content: "Read books to gain knowledge",
        description: "Reading expands perspectives and inspires thoughtful reflection.",
        icon: <BooksIcon />,
        aosDelay: "600",
        link: "/books",
        bgColor: "from-red-900 to-red-800"
    },
    {
        title: "Community and Blogs",
        content: "Community to share experiences",
        description: "Writing in a blog provides a space to express emotions and connect with others on similar journeys.",
        icon: <CommunityIcon />,
        aosDelay: "700",
        link: "/articles",
        bgColor: "from-rose-900 to-red-800"
    },
    {
        title: "Videos for Relief",
        content: "Watch videos to release stress",
        description: "Discover stress-relief techniques through curated videos designed to bring calm and balance.",
        icon: <VideoIcon />,
        aosDelay: "800",
        link: "https://youtube.com/playlist?list=PLi7xA3cpIGd3p6E-YKRVozq2l51H0AE9S&si=rBPAVRzp2CP9_Aob",
        bgColor: "from-pink-900 to-rose-800"
    },
];

// Enhanced Service Card with hover effects and animations
const ServiceCard = ({ data, onCardClick }) => {
  return (
    <Link
      to={data.link}
      onClick={onCardClick}
      data-aos="fade-up"
      data-aos-delay={data.aosDelay}
      className={`group relative overflow-hidden rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl hover:shadow-red-500/20 hover:translate-y-[-8px] bg-gradient-to-br ${data.bgColor} backdrop-blur-sm`}
      target={data.link.includes("http") ? "_blank" : "_self"}
    >
      {/* Shimmering effect overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10"></div>
      
      {/* Animated border */}
      <div className="absolute inset-0 border border-red-300/20 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      
      {/* Card content */}
      <div className="relative z-20 p-6 flex flex-col items-center text-center h-full">
        <div className="mb-4 transform transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3">
          {data.icon}
        </div>
        
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-red-200 transition-colors duration-300">{data.title}</h3>
        <p className="text-red-200 text-sm mb-3">{data.content}</p>
        <p className="text-gray-200 text-sm flex-grow">{data.description}</p>
        
        <div className="mt-4 bg-white/10 border border-red-300/30 rounded-full py-1.5 px-5 text-sm font-medium text-white backdrop-blur-sm transform opacity-0 translate-y-4 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0 flex items-center gap-2">
          <span>{data.link.includes("http") ? "Visit" : "Explore"}</span>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </div>
      </div>
      
      {/* Decorative elements */}
      <div className="absolute -top-12 -right-12 w-24 h-24 rounded-full bg-red-500/10 backdrop-blur-sm group-hover:bg-red-500/20 transition-colors duration-300"></div>
      <div className="absolute -bottom-12 -left-12 w-24 h-24 rounded-full bg-red-500/5 backdrop-blur-sm group-hover:bg-red-500/15 transition-colors duration-300"></div>
      
      {/* Pulsing dot */}
      <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-red-400 animate-ping opacity-70"></div>
    </Link>
  );
};

// Enhanced HeroCard with reddish theme and animations
const HeroCard = ({ onCardClick }) => {
  return (
    <section className="relative bg-gradient-to-b from-red-900 via-red-800 to-red-700 overflow-hidden pt-16 pb-32">
      {/* Background texture */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array(15).fill().map((_, i) => (
          <div 
            key={i}
            className="absolute rounded-full bg-red-300/10"
            style={{
              width: `${20 + Math.random() * 40}px`,
              height: `${20 + Math.random() * 40}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${10 + Math.random() * 20}s`,
              animation: 'float linear infinite',
              animationDelay: `${Math.random() * 5}s`
            }}
          />
        ))}
      </div>
      
      {/* Floating hearts animation */}
      <FloatingHearts />
      
      {/* Subtle animated glow */}
      <div className="absolute top-0 left-1/4 w-1/2 h-40 bg-red-500/20 rounded-full filter blur-3xl animate-pulse opacity-30" style={{animationDuration: '4s'}}></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="relative mb-14">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            <span className="relative inline-block">
              <span className="relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-red-200 to-white">
                Nurture Your Mental Wellbeing
              </span>
              <span className="absolute left-0 right-0 bottom-0 h-3 bg-gradient-to-r from-red-500/40 to-red-400/20 rounded-full blur-sm"></span>
            </span>
          </h2>
          <p className="text-red-200 text-center mx-auto max-w-2xl">
            Discover tools and practices to help foster a healthier mindset and emotional balance in your daily life.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {ServiceData.map((data, index) => (
            <ServiceCard 
              key={index} 
              data={data} 
              onCardClick={onCardClick} 
            />
          ))}
        </div>
        
        {/* Additional call to action button */}
        <div className="mt-12 text-center">
          <button className="relative overflow-hidden px-8 py-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-medium rounded-full shadow-lg shadow-red-700/30 hover:shadow-red-600/40 transition-all duration-300 group">
            <span className="relative z-10 flex items-center justify-center gap-2">
              <span>Explore All Resources</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-red-700 to-red-600 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></span>
          </button>
        </div>
      </div>
      
      {/* Enhanced wave effect at the bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <WaveEffect />
      </div>
      
      {/* Add subtle animated dots pattern */}
      <div className="absolute inset-0 pointer-events-none">
        {Array(20).fill().map((_, i) => (
          <div 
            key={`dot-${i}`}
            className="absolute w-1 h-1 rounded-full bg-red-300/30"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              opacity: 0.1 + Math.random() * 0.3
            }}
          ></div>
        ))}
      </div>
    </section>
  );
};

// Add css class for background pattern
const style = document.createElement('style');
style.innerHTML = `
  .bg-grid-pattern {
    background-image: radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px);
    background-size: 20px 20px;
  }
  
  @keyframes float {
    0% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(10deg); }
    100% { transform: translateY(0) rotate(0deg); }
  }
  
  .animate-float {
    animation: float 15s ease-in-out infinite;
  }
`;
document.head.appendChild(style);

export default HeroCard;