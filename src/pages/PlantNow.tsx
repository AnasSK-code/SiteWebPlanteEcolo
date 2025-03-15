import React, { useState } from 'react';
import { Trees as Tree, Heart, Globe } from 'lucide-react';
import video from '../image/video.mp4'

const PlantNow = () => {
  const [selected, setSelected] = useState<number | null>(null);

  const handleSelect = (option: number) => {
    setSelected(option);
  };

  return (
    <div className="relative min-h-screen flex items-center justify-center">
    {/* Vidéo de fond */}
    <video
      className="absolute inset-0 w-full h-full object-cover"
      src={video}
      autoPlay
      loop
      muted
    />
      {/* Overlay avec flou progressif vers noir */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black backdrop-blur-sm"></div>

      {/* Contenu principal */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center mb-16 uppercase tracking-wider drop-shadow-lg">
          Plant a Tree
        </h1>

        {/* Options de plantation */}
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { id: 1, icon: <Tree size={36} />, title: '1 Tree', price: '$10', desc: 'Save a Tree' },
              { id: 5, icon: <Heart size={36} />, title: '5 Trees', price: '$45', desc: 'Save $5' },
              { id: 10, icon: <Globe size={36} />, title: '10 Trees', price: '$85', desc: 'Save $15' },
            ].map((item) => (
              <div
                key={item.id}
                className={`bg-white/10 p-6 rounded-lg text-center backdrop-blur-lg shadow-lg border border-white/20 transition-all duration-300 ${
                  selected === item.id ? 'border-4 border-green-400 scale-105' : 'hover:border-green-400 hover:scale-105'
                }`}
                onClick={() => handleSelect(item.id)}
              >
                <div className="text-green-400 w-12 h-12 mx-auto mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                <p className="text-3xl font-bold text-green-400 mb-4">{item.price}</p>
                <p className="text-white/60 text-sm mb-4">{item.desc}</p>
                <button
                  className="w-full bg-green-400 text-black py-2 rounded-lg hover:bg-green-500 transition-colors font-semibold"
                >
                  Select
                </button>
              </div>
            ))}
          </div>

          {/* Formulaire de plantation */}
          <div className="bg-white/10 p-8 rounded-lg backdrop-blur-lg shadow-lg border border-white/20">
            <h2 className="text-2xl font-semibold text-white mb-6">Plant Location</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-white mb-2">Country</label>
                <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-green-400 focus:bg-gray-800">
                  <option value="">Select a country</option>
                  <option value="us">United States</option>
                  <option value="br">Brazil</option>
                  <option value="in">India</option>
                  <option value="ke">Kenya</option>
                  <option value="ca">Canada</option>
                  <option value="au">Australia</option>
                  <option value="fr">France</option>
                  <option value="de">Germany</option>
                  <option value="mx">Mexico</option>
                  <option value="co">Colombia</option>
                </select>
              </div>

              <div>
                <label className="block text-white mb-2">Project</label>
                <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-green-400 focus:bg-gray-800">
                  <option value="">Select a project</option>
                  <option value="urban">Urban Reforestation</option>
                  <option value="rainforest">Rainforest Recovery</option>
                  <option value="community">Community Gardens</option>
                  <option value="coastal">Coastal Restoration</option>
                  <option value="wildlife">Wildlife Habitat</option>
                  <option value="indigenous">Indigenous Land Recovery</option>
                  <option value="agroforestry">Sustainable Agroforestry</option>
                  <option value="watershed">Watershed Protection</option>
                  <option value="education">School Garden Program</option>
                  <option value="carbon">Carbon Offset Initiative</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <div>
                <label className="block text-white mb-2">Planting Season</label>
                <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-green-400 focus:bg-gray-800">
                  <option value="">Select a season</option>
                  <option value="spring">Spring 2024</option>
                  <option value="summer">Summer 2024</option>
                  <option value="fall">Fall 2024</option>
                  <option value="winter">Winter 2024</option>
                </select>
              </div>

              <div>
                <label className="block text-white mb-2">Tree Type</label>
                <select className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-green-400 focus:bg-gray-800">
                  <option value="">Select tree type</option>
                  <option value="native">Native Species</option>
                  <option value="fruit">Fruit Trees</option>
                  <option value="hardwood">Hardwood</option>
                  <option value="evergreen">Evergreen</option>
                  <option value="mixed">Mixed Forest</option>
                </select>
              </div>
            </div>

            <button className="w-full bg-green-400 text-black py-3 rounded-lg hover:bg-green-500 transition-colors font-semibold">
              Proceed to Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PlantNow;
