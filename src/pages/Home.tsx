import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import image1  from '../image/image1.webp'
import image2  from '../image/image2.webp'
import image3  from '../image/image3.webp'
import videoFile from '../image/video1.mp4'

const slides = [
  {
    title: "GROW",
    description: "As an environmental charity, we're on a mission to make it simple for everyone to help the environment by planting each one tree!",
    image: image1
  },
  {
    title: "PLANT",
    description: "Join thousands of people worldwide who are making a difference by planting trees and fighting climate change.",
    image: image2
  },
  {
    title: "EARTH",
    description: "Every tree planted is a step towards a greener, more sustainable future for our planet.",
    image: image3
  }
];

const Home = () => {
  const [showVideo, setShowVideo] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative min-h-screen">
      <div 
        className="absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-1000"
        style={{
          backgroundImage: `url('${slides[currentSlide].image}')`
        }}
      />
      
      <div className="absolute inset-0 bg-black/50 z-10" />
      
      <div className="relative z-20 container mx-auto px-4 min-h-screen flex flex-col">
        <div className="flex-grow flex items-center">
          <button 
            className="text-white p-4 hover:bg-white/10 rounded-full transition-colors"
            onClick={prevSlide}
          >
            <ChevronLeft size={32} />
          </button>
          
          <div className="flex-grow text-center max-w-3xl mx-auto">
          <h1 className="text-[250px] font-extrabold leading-none mb-8 relative uppercase tracking-wide"
            style={{
              textShadow: "6px 6px 20px rgba(0, 0, 0, 0.7)", // Ombre pour un effet de relief
              mixBlendMode: "overlay", // Effet d'incrustation dans l'image de fond
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              color: "transparent",
              backgroundImage: `url('${slides[currentSlide].image}')`, // Appliquer l'image au texte
              WebkitTextStroke: "4px green", // Bordure blanche autour du texte pour le rendre plus visible
            }}
          >
            {slides[currentSlide].title}
          </h1>

            <p className="text-white text-xl mb-12 transition-all duration-500">
              {slides[currentSlide].description}
            </p>
            <Link 
              to="/plant-now"
              className="inline-flex items-center bg-green-400 text-black px-8 py-3 rounded-full hover:bg-green-600 transition-colors text-lg font-semibold"
            >
              PLANT A TREE NOW
            </Link>
          </div>
          
          <button 
            className="text-white p-4 hover:bg-white/10 rounded-full transition-colors"
            onClick={nextSlide}
          >
            <ChevronRight size={32} />
          </button>
        </div>
        
        <div className="pb-12 flex flex-col items-center">
          <div className="flex space-x-4 mb-8">
            <a href="#" className="text-white hover:text-green-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-green-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a href="#" className="text-white hover:text-green-400 transition-colors">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
          </div>
          
          <div className="flex space-x-2 mb-8">
            {slides.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  currentSlide === index ? 'bg-green-400' : 'bg-white/50'
                }`}
                onClick={() => setCurrentSlide(index)}
              />
            ))}
          </div>
          
          {showVideo ? (
            <div className="relative w-full max-w-2xl">
              <video className="w-full border-4 border-green-400 rounded-2xl" controls autoPlay>
                <source src={videoFile} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <style>{`
                video::-webkit-media-controls-play-button,
                video::-webkit-media-controls-pause-button,
                video::-webkit-media-controls-volume-slider,
                video::-webkit-media-controls-timeline {
                  filter: invert(43%) sepia(92%) saturate(340%) hue-rotate(100deg) brightness(90%) contrast(120%);
                }
              `}</style>
            </div>
          ) : (
            <button 
              className="bg-green-400 rounded-full p-4 hover:bg-green-500 transition-colors"
              onClick={() => setShowVideo(true)}
            >
              <Play className="text-black" size={24} />
              
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;