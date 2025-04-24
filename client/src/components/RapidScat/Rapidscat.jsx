// import React from 'react';
// import Talk from '../../assets/talk.avif';

// const Rapidscat = () => {
//   return (
//     <section className="bg-blue-500 text-white py-12">
//       <div className="container mx-auto px-4">
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
//           {/* Image Container */}
//           <div data-aos="zoom-in" className="order-2 md:order-1">
//             <img 
//               src={Talk}
//               alt="Talk to Therapist"
//               className="w-full max-w-md mx-auto rounded-lg shadow-lg h-auto max-h-[350px] object-cover"
//             />
//           </div>

//           {/* Content Container */}
//           <div 
//             className="space-y-4 p-6 border-r-2 border-b-2 border-r-sky-800 border-b-sky-800 rounded-br-xl bg-blue-600/50 shadow-md order-1 md:order-2"
//           >
//             <p 
//               data-aos="fade-up"
//               data-aos-delay="300"
//               className="text-sky-200 font-semibold uppercase tracking-wider"
//             >
//               Talk to Therapist
//             </p>

//             <h1
//               data-aos="fade-up"
//               data-aos-delay="500"
//               className="uppercase text-4xl md:text-5xl font-bold leading-tight"
//             >
//               To Release Stress
//             </h1>

//             <p 
//               data-aos="fade-up" 
//               data-aos-delay="700"
//               className="text-blue-50 leading-relaxed"
//             >
//               Engaging with a therapist provides a compassionate, judgment-free space where individuals can openly discuss their emotions, challenges, and personal experiences. Therapy promotes self-discovery, emotional resilience, and practical coping strategies, helping people navigate stress, anxiety, and other mental health concerns. Through therapeutic support, individuals gain clarity, improve relationships, and work towards healthier, more fulfilling lives.
//             </p>
            
//             <button
//               data-aos="fade-up"
//               data-aos-delay="900"
//               className="bg-blue-400 hover:bg-blue-700 text-white font-medium px-6 py-2 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
//             >
//               View All
//             </button>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Rapidscat;



import React from 'react';
import Talk from '../../assets/talk.avif';

const Rapidscat = () => {
  return (
    <section className="bg-red-700 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Image Container */}
          <div data-aos="zoom-in" className="order-2 md:order-1">
            <img 
              src={Talk}
              alt="Talk to Therapist"
              className="w-full max-w-md mx-auto rounded-lg shadow-lg h-auto max-h-[350px] object-cover border-2 border-red-300"
            />
          </div>

          {/* Content Container */}
          <div 
            className="space-y-4 p-6 border-r-2 border-b-2 border-r-red-900 border-b-red-900 rounded-br-xl bg-red-800/70 shadow-md order-1 md:order-2"
          >
            <p 
              data-aos="fade-up"
              data-aos-delay="300"
              className="text-red-200 font-semibold uppercase tracking-wider font-serif"
            >
              Talk to Therapist
            </p>

            <h1
              data-aos="fade-up"
              data-aos-delay="500"
              className="uppercase text-4xl md:text-5xl font-bold leading-tight font-serif"
            >
              To Release Stress
            </h1>

            <p 
              data-aos="fade-up" 
              data-aos-delay="700"
              className="text-red-50 leading-relaxed font-sans"
            >
              Engaging with a therapist provides a compassionate, judgment-free space where individuals can openly discuss their emotions, challenges, and personal experiences. Therapy promotes self-discovery, emotional resilience, and practical coping strategies, helping people navigate stress, anxiety, and other mental health concerns. Through therapeutic support, individuals gain clarity, improve relationships, and work towards healthier, more fulfilling lives.
            </p>
            
            <button
              data-aos="fade-up"
              data-aos-delay="900"
              className="bg-red-500 hover:bg-red-600 text-white font-medium px-6 py-2 rounded-md transition-all duration-300 shadow-md hover:shadow-lg font-sans"
            >
              View All
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rapidscat;