
import React from 'react';
import { Link } from 'react-router-dom';
import wave from '../../assets/wave Gif.gif';
import Yoga from '../../assets/meditation.jpg';
import Exercise from '../../assets/exercise.jpg';
import Games from '../../assets/games.jpg';
import Books from '../../assets/books.avif';
import Diary from '../../assets/diary.jpg';
import Video from '../../assets/videos.png';
import Navbar2 from '../../components/Navbar/Navbar2.jsx';

// Service data array containing the details of each service
const ServiceData = [
    {
        title: "Breathing and Meditation",
        content: "Breathing technique",
        description: "Practicing mindful breathing and meditation helps reduce stress, enhance focus, and bring a sense of calm to daily life.",
        img: Yoga, // Image for the service
        aosDelay: "300", // Animation delay
        link: "/breathing", // Link to navigate
    },
    {
        title: "Exercises",
        content: "Physical exercises",
        description: "Regular physical activity strengthens the body, improves flexibility, and supports mental well-being.",
        img: Exercise,
        aosDelay: "700",
        link: "/exercises",
    },
    {
        title: "Games for Fun",
        content: "Play games to release your stress",
        description: "Engaging in short, fun games offers a quick mental break and boosts creativity.",
        img: Games,
        aosDelay: "700",
        link: "/Bubble", // Link to game component
    },
    {
        title: "Books and Thoughts",
        content: "Read books to gain knowledge",
        description: "Reading expands perspectives and inspires thoughtful reflection.",
        img: Books,
        aosDelay: "700",
        link: "/books", // Link to books section
    },
    {
        title: "Diary",
        content: "Diary for mental health",
        description: "Writing in a diary provides a private space to express emotions and reflect.",
        img: Diary,
        aosDelay: "700",
        link: "https://repo-frontend-0ixl.onrender.com/", // External link for diary
    },
    {
        title: "Videos for Relief",
        content: "Watch videos to release stress",
        description: "Discover stress-relief techniques to bring calm and balance.",
        img: Video,
        aosDelay: "700",
        link: "https://youtube.com/playlist?list=PLWlTX25IDqIz4Ad4_ZvTQ_rM07Lkr7g-4&si=tEy9dzygmcYuXWM0", // YouTube playlist link
    },
];

// HeroCard component to render the service cards
const HeroCard = ({ onCardClick }) => {
    return (
        <section className="bg-blue-500">
            <Navbar2 /> {/* Navbar component */}
            <div className="container">
                <div className="min-h-[400px]">
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 relative z-10">
                        {ServiceData.map((data, index) => (
                            <Link
                                key={index}
                                to={data.link} // Navigate to the link
                                onClick={onCardClick} // Trigger the custom event on click
                                data-aos="fade-up" // AOS animation
                                data-aos-delay={data.aosDelay} // Animation delay
                                className="cursor-pointer min-h-[180px] flex flex-col justify-center items-center rounded-xl gap-2 bg-sky-900/60 backdrop-blur-sm text-white text-center text-2xl py-8 px-3 w-full lg:w-[300px] mx-auto"
                            >
                                <img src={data.img} alt={data.title} className="text-7xl" />
                                <h1>{data.title}</h1>
                                <p>{data.content}</p>
                                <p className="text-sm">{data.description}</p>
                            </Link>
                        ))}
                    </div>

                    <img
                        src={wave}
                        alt="Wave effect"
                        className="h-[200px] w-full object-cover mix-blend-screen -translate-y-24 relative z-[0]"
                    />
                </div>
            </div>
        </section>
    );
};

export default HeroCard;
