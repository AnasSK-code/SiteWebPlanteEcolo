import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  return (
    <div 
      className="relative min-h-screen flex items-center justify-center"
      style={{
        backgroundImage: `url('https://plus.unsplash.com/premium_photo-1669613233557-1676c121fe73?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Zm9yJUMzJUFBdCUyMDRrfGVufDB8fDB8fHww')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Overlay avec flou progressif vers noir */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black backdrop-blur-sm"></div>

      {/* Contenu principal */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white text-center mb-16 uppercase tracking-wider drop-shadow-lg">
          Contact Us
        </h1>

        {/* Grille responsive pour le formulaire et les infos */}
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          
          {/* Section des infos de contact */}
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <Mail className="text-green-400 mt-1" size={28} />
              <div>
                <h3 className="text-2xl font-semibold text-white">Email</h3>
                <p className="text-white/80">info@growtree.org</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <Phone className="text-green-400 mt-1" size={28} />
              <div>
                <h3 className="text-2xl font-semibold text-white">Phone</h3>
                <p className="text-white/80">+1 (555) 123-4567</p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <MapPin className="text-green-400 mt-1" size={28} />
              <div>
                <h3 className="text-2xl font-semibold text-white">Address</h3>
                <p className="text-white/80">
                  123 Green Street<br />
                  Eco City, EC 12345<br />
                  United States
                </p>
              </div>
            </div>
          </div>
          
          {/* Formulaire de contact */}
          <form className="space-y-6 bg-white/10 backdrop-blur-lg p-8 rounded-lg shadow-lg border border-white/20">
            <div>
              <label className="block text-white text-lg mb-2">Name</label>
              <input
                type="text"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-green-400 placeholder-gray-300"
                placeholder="Your name"
              />
            </div>
            
            <div>
              <label className="block text-white text-lg mb-2">Email</label>
              <input
                type="email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-green-400 placeholder-gray-300"
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block text-white text-lg mb-2">Message</label>
              <textarea
                className="w-full px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white focus:outline-none focus:border-green-400 placeholder-gray-300 h-32"
                placeholder="Your message"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-green-400 text-black py-3 rounded-lg hover:bg-green-500 transition-colors font-semibold"
            >
              Send Message
            </button>
          </form>

        </div>
      </div>
    </div>
  );
}

export default Contact;
