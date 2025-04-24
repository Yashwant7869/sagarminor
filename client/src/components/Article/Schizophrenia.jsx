import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Schizophrenia = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://media.springernature.com/m685/springer-static/image/art%3A10.1038%2Fs41537-020-0102-z/MediaObjects/41537_2020_102_Fig1_HTML.png',
    'https://www.analysisgroup.com/globalassets/uploadedimages/content/insights/ag_features/health_care_bulletin/bulletin_fall_2016/economic_burden_of_schizophrenia_in_the_us_exceeded_$155_billion_in_2013/schizophrenia_graph.gif',
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-800">Schizophrenia</h1>
      
      {/* Image Carousel */}
      <div className="mb-10 bg-gray-50 p-4 rounded-lg">
        <div className="relative">
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src={images[currentImage]} 
              alt="Schizophrenia information" 
              className="w-full h-auto object-contain"
            />
          </div>
          
          <button 
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            onClick={previousImage}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} className="text-purple-800" />
          </button>
          
          <button 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            onClick={nextImage}
            aria-label="Next image"
          >
            <ChevronRight size={24} className="text-purple-800" />
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

      {/* Introduction */}
      <div className="mb-8">
        <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-500">
          <p className="text-gray-700 leading-relaxed">
            Bipolar affective disorder, commonly known as bipolar disorder, is a mental health condition characterized by extreme mood swings that include episodes of mania (or hypomania) and depression. These mood swings can be severe and disruptive to a person's life. Bipolar disorder is a chronic condition, and while it cannot be cured, it can be effectively managed with treatment.
          </p>
        </div>
      </div>

      {/* Types of Bipolar Disorder */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Types of Bipolar Disorder</h2>
        <div className="space-y-4">
          <div className="bg-purple-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-purple-800">Bipolar I Disorder</h3>
            <p className="text-gray-700 mt-2">
              In this type, individuals experience manic episodes that last for at least seven days or are severe enough to require hospitalization. Depressive episodes often accompany manic episodes or alternate with them.
            </p>
          </div>
          
          <div className="bg-purple-50 p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow">
            <h3 className="font-bold text-purple-800">Bipolar II Disorder</h3>
            <p className="text-gray-700 mt-2">
              This type is characterized by recurrent depressive episodes and at least one hypomanic episode. Hypomania is a milder form of mania, and it doesn't usually lead to severe impairment or hospitalization.
            </p>
          </div>
        </div>
      </div>

      {/* Symptoms */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Common Symptoms</h2>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
            <h3 className="font-bold text-red-800 mb-2">Mania or Hypomania</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Euphoria or extreme irritability</li>
              <li>Increased energy and activity</li>
              <li>Racing thoughts</li>
              <li>Decreased need for sleep</li>
              <li>Elevated self-esteem</li>
              <li>Reckless behavior and poor judgment</li>
            </ul>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
            <h3 className="font-bold text-blue-800 mb-2">Depression</h3>
            <ul className="list-disc pl-5 space-y-1 text-gray-700">
              <li>Persistent sadness</li>
              <li>Loss of interest in activities</li>
              <li>Changes in appetite and weight</li>
              <li>Difficulty concentrating</li>
              <li>Fatigue and low energy</li>
              <li>Feelings of guilt or worthlessness</li>
              <li>Thoughts of suicide</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Causes */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Causes</h2>
        <div className="bg-gray-50 p-5 rounded-lg border border-gray-200">
          <p className="text-gray-700">
            The exact cause of bipolar disorder is not fully understood, but it is believed to result from a combination of genetic, biological, and environmental factors. It often emerges in late adolescence or early adulthood.
          </p>
        </div>
      </div>

      {/* Treatment */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-purple-700 mb-4">Treatment Options</h2>
        
        <div className="grid md:grid-cols-3 gap-4">
          <div className="bg-green-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
            <div className="font-bold text-green-800 text-lg mb-2">Medication</div>
            <p className="text-gray-700 text-sm">
              Mood stabilizers (e.g., lithium), antipsychotics, and antidepressants to help stabilize mood and manage symptoms
            </p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
            <div className="font-bold text-green-800 text-lg mb-2">Psychotherapy</div>
            <p className="text-gray-700 text-sm">
              Cognitive-behavioral therapy (CBT) or interpersonal therapy to help develop coping strategies
            </p>
          </div>
          
          <div className="bg-green-50 p-4 rounded-lg text-center hover:shadow-md transition-shadow">
            <div className="font-bold text-green-800 text-lg mb-2">Lifestyle Management</div>
            <p className="text-gray-700 text-sm">
              Regular sleep schedule, stress reduction, and maintaining routine
            </p>
          </div>
        </div>
      </div>

      {/* Important Note */}
      <div className="bg-purple-100 p-6 rounded-lg border border-purple-300 text-center">
        <p className="text-purple-800 font-medium">
          It's important for individuals with bipolar disorder to work closely with mental health professionals to develop a personalized treatment plan and to monitor their condition regularly. With proper treatment and support, many people with bipolar disorder can lead fulfilling lives and effectively manage their symptoms.
        </p>
      </div>
      
    </div>
  );
};

export default Schizophrenia;