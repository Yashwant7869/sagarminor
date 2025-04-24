import React, { useState } from 'react';

const Ocd = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://www.therecoveryvillage.com/wp-content/uploads/2022/04/1-OCD-Statistics.webp',
    'https://www.kff.org/wp-content/uploads/2023/03/share-of-adults-reporting-symptoms-of-anxiety-and-or-depressive-disorder-february-2023-Feature-image-v2-2.png',
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-800">Obsessive-Compulsive Disorder (OCD)</h1>

      {/* Image Carousel */}
      <div className="mb-10 bg-gray-50 p-4 rounded-lg">
        <div className="relative">
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src={images[currentImage]} 
              alt="OCD Statistics" 
              className="w-full h-auto object-contain"
            />
          </div>

          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            onClick={previousImage}
            aria-label="Previous image"
          >
            &larr;
          </button>

          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            onClick={nextImage}
            aria-label="Next image"
          >
            &rarr;
          </button>
        </div>

        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-8 mx-1 rounded-full ${
                currentImage === index ? 'bg-purple-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentImage(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="mb-6 text-gray-700">
        <p className="mb-4">
          Obsessive-Compulsive Disorder (OCD) is a mental health condition characterized by obsessions and compulsions.
          Obsessions are intrusive, distressing thoughts, images, or urges that cause anxiety. Compulsions are repetitive
          behaviors or mental acts performed to reduce that anxiety.
        </p>
      </div>

      {/* Symptoms */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Symptoms of OCD</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Obsessions:</strong> Fears of contamination, harm, symmetry, or intrusive taboo thoughts.
          </li>
          <li>
            <strong>Compulsions:</strong> Excessive handwashing, checking, counting, or repeating phrases mentally.
          </li>
        </ul>
      </div>

      {/* Treatment */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Treatment for OCD</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>
            <strong>Cognitive-Behavioral Therapy (CBT):</strong> Especially Exposure and Response Prevention (ERP).
          </li>
          <li>
            <strong>Medications:</strong> SSRIs can help reduce the severity of symptoms.
          </li>
          <li>
            <strong>Combination Therapy:</strong> Using both CBT and medication.
          </li>
          <li>
            <strong>Mindfulness-Based Therapies:</strong> Such as MBCT or MBSR.
          </li>
          <li>
            <strong>Support Groups:</strong> Sharing experiences and coping strategies with others.
          </li>
          <li>
            <strong>Deep Brain Stimulation (DBS):</strong> For severe, treatment-resistant OCD.
          </li>
          <li>
            <strong>Lifestyle Changes:</strong> Regular exercise, balanced diet, and stress management.
          </li>
        </ol>
      </div>

      {/* Conclusion */}
      <div className="bg-purple-100 p-6 rounded-lg border border-purple-300 text-center">
        <p className="text-purple-800 font-medium mb-2">
          Treatment plans should be personalized for each individual.
        </p>
        <p className="text-gray-700">
          Early intervention and guidance from mental health professionals can lead to significant improvement in managing OCD.
        </p>
      </div>
    </div>
  );
};

export default Ocd;
