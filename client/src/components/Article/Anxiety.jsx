import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const Anxiety = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const images = [
    'https://www.cdc.gov/childrensmentalhealth/images/Depression-Anxiety-Behavior-Disorders-chart.jpg?_=03418',
    'https://assets.weforum.org/editor/ZM8M512ZI2ZMZagSB3MwmmX1URuwvccSy5ISTECukwo.PNG',
  ];

  const nextImage = () => {
    setCurrentImage((prevImage) => (prevImage + 1) % images.length);
  };

  const previousImage = () => {
    setCurrentImage((prevImage) => (prevImage - 1 + images.length) % images.length);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 bg-white rounded-lg shadow-lg">
      <h1 className="text-3xl font-bold text-center mb-8 text-blue-800">Anxiety Disorders</h1>
      
      {/* Image Carousel */}
      <div className="mb-10 bg-gray-50 p-4 rounded-lg">
        <div className="relative">
          <div className="overflow-hidden rounded-lg shadow-md">
            <img 
              src={images[currentImage]} 
              alt="Anxiety information" 
              className="w-full h-auto object-contain"
            />
          </div>
          
          <button 
            className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            onClick={previousImage}
            aria-label="Previous image"
          >
            <ChevronLeft size={24} className="text-blue-800" />
          </button>
          
          <button 
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100 transition-colors"
            onClick={nextImage}
            aria-label="Next image"
          >
            <ChevronRight size={24} className="text-blue-800" />
          </button>
        </div>
        
        <div className="flex justify-center mt-4">
          {images.map((_, index) => (
            <button
              key={index}
              className={`h-2 w-8 mx-1 rounded-full ${
                currentImage === index ? 'bg-blue-600' : 'bg-gray-300'
              }`}
              onClick={() => setCurrentImage(index)}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      </div>

      {/* Introduction */}
      <div className="mb-8">
        <p className="text-gray-700 leading-relaxed">
          Anxiety disorders encompass a range of conditions characterized by excessive and persistent feelings of anxiety and fear. 
          These feelings can interfere with daily activities, relationships, and overall quality of life.
        </p>
      </div>

      {/* Types of Anxiety */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Common Types of Anxiety Disorders</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Generalized Anxiety Disorder (GAD)",
              description: "Excessive worry and fear about various aspects of life, even when there is no specific cause for concern."
            },
            {
              title: "Panic Disorder",
              description: "Recurring panic attacks with physical symptoms like rapid heartbeat, sweating, trembling, and a sense of impending doom."
            },
            {
              title: "Social Anxiety Disorder",
              description: "Intense fear and avoidance of social situations due to fear of being judged, embarrassed, or humiliated."
            },
            {
              title: "Specific Phobias",
              description: "Intense and irrational fear of a particular object, situation, or activity like heights, spiders, or flying."
            },
            {
              title: "Obsessive-Compulsive Disorder (OCD)",
              description: "Intrusive thoughts that lead to compulsive behaviors performed to reduce anxiety."
            },
            {
              title: "Post-Traumatic Stress Disorder (PTSD)",
              description: "Develops after trauma, involving intrusive memories, nightmares, and emotional distress related to the event."
            }
          ].map((item, index) => (
            <div key={index} className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-blue-800">{item.title}</h3>
              <p className="text-gray-700 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Phobias */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Phobias</h2>
        <p className="text-gray-700 mb-4">
          Phobias are a type of anxiety disorder characterized by an intense, irrational fear of a specific object, situation, or activity. 
          People with phobias often go to great lengths to avoid the feared stimulus.
        </p>
        
        <div className="space-y-4">
          {[
            {
              title: "Specific Phobias",
              description: "Phobias of particular objects or situations, such as animals, heights, water, flying, or blood."
            },
            {
              title: "Social Phobia (Social Anxiety Disorder)",
              description: "Fear of social situations and concern about being negatively judged or embarrassed by others."
            },
            {
              title: "Agoraphobia",
              description: "Fear of situations or places where escape might be difficult, such as crowded spaces."
            }
          ].map((item, index) => (
            <div key={index} className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
              <h3 className="font-bold text-green-800">{item.title}</h3>
              <p className="text-gray-700 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Treatment */}
      <div className="mb-8">
        <h2 className="text-2xl font-semibold text-blue-700 mb-4">Treatment Options</h2>
        <p className="text-gray-700 mb-4">
          Treatment for anxiety disorders and phobias often involves a combination of approaches:
        </p>
        
        <div className="grid md:grid-cols-2 gap-4">
          {[
            {
              title: "Therapy",
              description: "Cognitive-behavioral therapy (CBT) and exposure therapy help reduce anxiety over time."
            },
            {
              title: "Medications",
              description: "Antidepressants and anti-anxiety medications can be prescribed by healthcare professionals."
            },
            {
              title: "Relaxation Techniques",
              description: "Deep breathing, mindfulness, and progressive muscle relaxation help manage symptoms."
            },
            {
              title: "Lifestyle Changes",
              description: "Regular exercise, balanced diet, sufficient sleep, and avoiding caffeine and alcohol."
            }
          ].map((item, index) => (
            <div key={index} className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500 hover:shadow-md transition-shadow">
              <h3 className="font-bold text-purple-800">{item.title}</h3>
              <p className="text-gray-700 mt-1">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-blue-100 p-6 rounded-lg border border-blue-300 text-center">
        <p className="text-blue-800 font-medium mb-2">
          If you or someone you know is struggling with anxiety or phobias, seeking professional help from a mental health provider is important.
        </p>
        <p className="text-gray-700">
          These conditions are treatable, and with the right support, individuals can learn effective strategies for managing their symptoms and improving their overall quality of life.
        </p>
      </div>
      
    </div>
  );
};

export default Anxiety;