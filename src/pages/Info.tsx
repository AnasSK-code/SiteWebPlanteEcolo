import React from 'react';
import image1 from '../image/infoimage1.webp'

const Info = () => {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url(${image1})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay avec flou progressif et noir */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black backdrop-blur-sm"></div>

      {/* Contenu principal */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center mb-16 uppercase tracking-wider drop-shadow-lg">
          Our Mission
        </h1>

        {/* Grille uniforme avec effet verre */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
          
          {/* Carte 1 */}
          <div className="relative h-60 p-8 rounded-lg bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-semibold text-green-400 mb-4">🌍 Environmental Impact</h2>
            <p className="text-white/90">
              Every tree planted helps combat climate change, provides habitat for wildlife,
              and improves air quality.
            </p>
          </div>

          {/* Carte 2 */}
          <div className="relative h-60 p-8 rounded-lg bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-semibold text-green-400 mb-4">🌱 How It Works</h2>
            <p className="text-white/90">
              We partner with local communities and organizations to ensure each tree
              is planted in the right location and properly cared for.
            </p>
          </div>

          {/* Carte 3 */}
          <div className="relative h-60 p-8 rounded-lg bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-semibold text-green-400 mb-4">🌳 Our Impact</h2>
            <p className="text-white/90">
              Since our founding, we've planted over 100,000 trees across multiple continents.
              Each tree planted helps offset carbon emissions.
            </p>
          </div>

          {/* Carte 4 */}
          <div className="relative h-60 p-8 rounded-lg bg-white/10 backdrop-blur-lg shadow-lg border border-white/20 hover:scale-105 transition-transform duration-300">
            <h2 className="text-3xl font-semibold text-green-400 mb-4">🤝 Get Involved</h2>
            <p className="text-white/90">
              Whether you're an individual or an organization, we have programs to help you contribute
              to global reforestation.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Info;
