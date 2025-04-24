import React, { useState } from 'react';

const Depression = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://assets-global.website-files.com/60b79f6742e9397ba3ee0357/640b4ccc0771bdf381e60449_depression%20by%20demographic-1.png',
    'https://www.cdc.gov/nchs/images/databriefs/351-400/db379-fig2.gif',
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-800">Depression</h1>

      {/* Image Carousel */}
      <div className="mb-10 bg-gray-50 p-4 rounded-lg">
        <div className="relative">
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src={images[currentImage]} 
              alt="Depression statistics" 
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
                currentImage === index ? 'bg-red-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentImage(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Symptoms */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Symptoms of Depression</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li>Persistent sadness or low mood</li>
          <li>Loss of interest or pleasure in activities</li>
          <li>Fatigue and decreased energy</li>
          <li>Changes in appetite or weight</li>
          <li>Sleep disturbances (insomnia or oversleeping)</li>
          <li>Feelings of worthlessness or guilt</li>
          <li>Difficulty concentrating or making decisions</li>
          <li>Recurrent thoughts of death or suicide</li>
        </ul>
      </div>

      {/* Types */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Types of Depression</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Major Depressive Disorder (MDD):</strong> Severe and persistent symptoms.</li>
          <li><strong>Persistent Depressive Disorder (Dysthymia):</strong> A milder but chronic form.</li>
          <li><strong>Bipolar Disorder:</strong> Alternating periods of depression and mania.</li>
          <li><strong>Seasonal Affective Disorder (SAD):</strong> Occurs during specific seasons.</li>
          <li><strong>Postpartum Depression:</strong> Affects new mothers after childbirth.</li>
          <li><strong>Atypical Depression:</strong> Includes increased appetite and hypersomnia.</li>
        </ul>
      </div>

      {/* Treatment */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-red-700 mb-4">Treatment for Depression</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Psychotherapy:</strong> CBT or IPT can help manage thoughts and emotions.</li>
          <li><strong>Medication:</strong> SSRIs and SNRIs prescribed by a psychiatrist.</li>
          <li><strong>Lifestyle Changes:</strong> Exercise, balanced diet, sleep, stress management.</li>
          <li><strong>Support Networks:</strong> Friends and family support is crucial.</li>
          <li><strong>ECT and TMS:</strong> For severe, treatment-resistant depression.</li>
        </ul>
      </div>

      {/* Conclusion */}
      <div className="bg-red-100 p-6 rounded-lg border border-red-300 text-center">
        <p className="text-red-800 font-medium mb-2">
          Seeking professional help is essential when dealing with depression.
        </p>
        <p className="text-gray-700">
          Depression is a treatable condition. With the right interventions and support, many individuals can lead fulfilling lives and improve their mental health significantly.
        </p>
      </div>
    </div>
  );
};

export default Depression;
