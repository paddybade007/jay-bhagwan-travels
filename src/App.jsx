import React, { useState } from 'react';

const App = () => {
  const [formData, setFormData] = useState({ name: '', date: '', destination: '' });

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const message = `Namaste Pramod Bhai, Mera naam ${formData.name} hai. Mujhe ${formData.date} ko ${formData.destination} ke liye car book karni hai.`;
    window.open(`https://wa.me/919158753372?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="font-sans text-gray-900">
      {/* Header */}
      <header className="bg-primary text-white p-4 sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl md:text-2xl font-bold">Jay Bhagwan Tours & Travels</h1>
          <div className="text-right text-sm">
            <p>📞 9158753372</p>
            <p>📞 9545800996</p>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-[500px] bg-gray-800 text-white flex items-center justify-center">
        {/* Aap apni car ki photo 'public' folder mein 'ertiga.jpg' naam se rakhen */}
        <img src="/ertiga.jpg" alt="Ertiga" className="absolute inset-0 w-full h-full object-cover opacity-50" />
        <div className="relative text-center px-4">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-4">Pramod Bade</h2>
          <p className="text-xl md:text-2xl italic font-light italic">"Safe, Punctual, and Professional Service - Your Journey Starts Here"</p>
          <a href="#book" className="mt-8 inline-block bg-secondary text-black font-bold py-3 px-8 rounded-full hover:bg-yellow-500 transition">Book My Ride</a>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16 bg-gray-100 px-4">
        <div className="container mx-auto">
          <h3 className="text-3xl font-bold text-center mb-10 text-primary">Best Outstation Service from Mumbai</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center text-white">
            <div className="bg-primary p-6 rounded-lg shadow-md hover:scale-105 transition-transform">Nashik / Pune</div>
            <div className="bg-primary p-6 rounded-lg shadow-md hover:scale-105 transition-transform">Mahabaleshwar</div>
            <div className="bg-primary p-6 rounded-lg shadow-md hover:scale-105 transition-transform">Konkan & More...</div>
          </div>
        </div>
      </section>

      {/* Booking Form Section */}
      <section id="book" className="py-16 px-4">
        <div className="max-w-xl mx-auto bg-white border border-gray-200 rounded-2xl p-8 shadow-2xl">
          <h3 className="text-2xl font-bold mb-6 text-center text-primary border-b-2 border-secondary pb-2">Hurry? Book via WhatsApp</h3>
          <form onSubmit={handleWhatsApp} className="space-y-4">
            <div>
              <label className="block mb-1 font-medium text-gray-700 text-sm">Aapka Naam</label>
              <input type="text" required className="w-full border p-3 rounded-lg outline-primary" 
                onChange={(e) => setFormData({...formData, name: e.target.value})} />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700 text-sm">Date</label>
              <input type="date" required className="w-full border p-3 rounded-lg outline-primary" 
                onChange={(e) => setFormData({...formData, date: e.target.value})} />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700 text-sm">Kahan Jaana Hai?</label>
              <input type="text" placeholder="Eg. Mumbai to Nashik" required className="w-full border p-3 rounded-lg outline-primary" 
                onChange={(e) => setFormData({...formData, destination: e.target.value})} />
            </div>
            <button className="w-full bg-green-600 text-white font-bold py-4 rounded-lg shadow-lg hover:bg-green-700 transition">
               Click to Book via WhatsApp 💬
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-10 px-4">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h4 className="text-xl font-bold mb-2">Jay Bhagwan Tours and Travels</h4>
            <p>Address: Mumbai, Maharashtra</p>
            <p className="mt-4 text-gray-400">Owner: Pramod Bade</p>
          </div>
          <div className="flex flex-col space-y-2">
            <a href="tel:9158753372" className="text-lg">📞 Click to Call: 9158753372</a>
            <a href="tel:9545800996" className="text-lg">📞 Click to Call: 9545800996</a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;