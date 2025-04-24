import React, { useState } from 'react';

const Psychosis = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://pbs.twimg.com/media/EYTyL8hWsAAjjXv.jpg',
    'https://www.thelancet.com/cms/attachment/7900fe1c-85b6-45bd-a034-4e2622528b34/gr1.jpg',
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-indigo-700">Psychosis</h1>

      {/* Image Carousel */}
      <div className="mb-10 bg-gray-50 p-4 rounded-lg">
        <div className="relative">
          <div className="overflow-hidden rounded-lg shadow-md">
            <img
              src={images[currentImage]}
              alt="Psychosis"
              className="w-full h-auto object-contain"
            />
          </div>

          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            onClick={previousImage}
          >
            &larr;
          </button>

          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            onClick={nextImage}
          >
            &rarr;
          </button>
        </div>

        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-8 mx-1 rounded-full ${
                currentImage === index ? 'bg-indigo-700' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentImage(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Description */}
      <div className="text-gray-700 space-y-6">
        <p>
          Psychosis is a mental health condition characterized by a disconnection from reality. It affects how a person thinks,
          perceives, and behaves, often making it difficult to distinguish what’s real from what’s not.
        </p>

        <div>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Symptoms</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Hallucinations:</strong> Seeing or hearing things that aren’t there.</li>
            <li><strong>Delusions:</strong> Strong, false beliefs not based in reality.</li>
            <li><strong>Disorganized Thinking:</strong> Trouble organizing thoughts or speech.</li>
            <li><strong>Impaired Insight:</strong> Lack of awareness of the condition.</li>
            <li><strong>Impaired Judgment:</strong> Difficulty making sound decisions.</li>
            <li><strong>Behavior Changes:</strong> Erratic, unpredictable behavior.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Types of Psychotic Disorders</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Schizophrenia:</strong> Chronic psychosis with both positive and negative symptoms.</li>
            <li><strong>Schizoaffective Disorder:</strong> Psychotic symptoms alongside mood disturbances.</li>
            <li><strong>Brief Psychotic Disorder:</strong> Short-term psychosis usually triggered by stress.</li>
            <li><strong>Substance-Induced Psychosis:</strong> Triggered by drug or alcohol use.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Causes and Risk Factors</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Genetics:</strong> Family history of psychotic disorders.</li>
            <li><strong>Neurochemistry:</strong> Dopamine imbalances in the brain.</li>
            <li><strong>Prenatal Risks:</strong> Birth complications or infections during pregnancy.</li>
            <li><strong>Substance Use:</strong> Cannabis, LSD, or amphetamines can trigger symptoms.</li>
            <li><strong>Trauma:</strong> Severe stress or psychological trauma.</li>
          </ul>
        </div>

        <div>
          <h2 className="text-2xl font-semibold text-indigo-600 mb-2">Treatment Options</h2>
          <ul className="list-disc list-inside space-y-1">
            <li><strong>Antipsychotic Medications:</strong> Manage and reduce symptoms.</li>
            <li><strong>Psychotherapy:</strong> Especially CBT for thought pattern management.</li>
            <li><strong>Hospitalization:</strong> Needed during severe or acute episodes.</li>
            <li><strong>Community Support:</strong> Rehab and social services support daily functioning.</li>
            <li><strong>Family Support:</strong> Education and involvement in the care process.</li>
          </ul>
        </div>

        <div className="bg-indigo-100 p-6 rounded-lg border border-indigo-300 text-center">
          <p className="text-indigo-700 font-medium mb-2">
            Early intervention can significantly improve outcomes.
          </p>
          <p>
            A comprehensive treatment plan tailored by professionals is essential. Psychosis is treatable and manageable with the right help and support.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Psychosis;
