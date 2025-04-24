import React, { useState } from 'react';

const PanicDisorder = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://www.researchgate.net/publication/51752088/figure/fig1/AS:601662263672849@1520458870968/Prevalence-of-Diagnostic-and-Statistical-Manual-of-Mental-Disorders-Revised-Third.png',
    'https://cdn.koreabiomed.com/news/photo/201703/310_298_3359.jpg',
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-red-700">Panic Disorder</h1>

      {/* Image Carousel */}
      <div className="mb-10 bg-gray-50 p-4 rounded-lg">
        <div className="relative">
          <div className="overflow-hidden rounded-lg shadow-md">
            <img
              src={images[currentImage]}
              alt="Panic Disorder"
              className="w-full h-auto object-contain"
            />
          </div>

          <button
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
            onClick={previousImage}
            aria-label="Previous image"
          >
            &larr;
          </button>

          <button
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
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
                currentImage === index ? 'bg-red-700' : 'bg-gray-300'
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
          Panic Disorder is characterized by recurrent and unexpected panic attacks—intense episodes of fear or discomfort that may involve heart palpitations, shortness of breath, trembling, and more.
        </p>
      </div>

      {/* Symptoms */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">Symptoms of Panic Disorder</h2>
        <ol className="list-decimal list-inside text-gray-700 space-y-2">
          <li>Recurrent and unexpected panic attacks.</li>
          <li>Persistent worry about future panic attacks or their consequences.</li>
          <li>Avoidance of places or situations where attacks have occurred before.</li>
        </ol>
      </div>

      {/* Treatment */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-red-600 mb-4">Treatment for Panic Disorder</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-3">
          <li>
            <strong>Cognitive-Behavioral Therapy (CBT):</strong> Especially CBT-PD and exposure therapy to change panic-inducing thought patterns.
          </li>
          <li>
            <strong>Medications:</strong>
            <ul className="list-disc list-inside ml-6 space-y-1">
              <li><strong>SSRIs and SNRIs:</strong> Help reduce frequency and severity of attacks.</li>
              <li><strong>Benzodiazepines:</strong> Short-term use for severe episodes (not recommended long-term).</li>
            </ul>
          </li>
          <li>
            <strong>Relaxation Techniques:</strong> Deep breathing, muscle relaxation, and mindfulness can reduce panic severity.
          </li>
          <li>
            <strong>Lifestyle Changes:</strong> Regular exercise, balanced diet, enough sleep, and stress management.
          </li>
          <li>
            <strong>Support Groups:</strong> Emotional support and shared strategies from others with panic disorder.
          </li>
          <li>
            <strong>Self-Help Strategies:</strong> Books, courses, and apps can aid personal coping efforts.
          </li>
          <li>
            <strong>Psychodynamic Psychotherapy:</strong> For exploring emotional roots behind panic symptoms.
          </li>
        </ul>
      </div>

      {/* Conclusion */}
      <div className="bg-red-100 p-6 rounded-lg border border-red-300 text-center">
        <p className="text-red-700 font-medium mb-2">
          Treatment should be personalized and often involves a combination of therapies.
        </p>
        <p className="text-gray-700">
          Early professional intervention leads to better symptom control and improved quality of life for those with panic disorder.
        </p>
      </div>
    </div>
  );
};

export default PanicDisorder;
