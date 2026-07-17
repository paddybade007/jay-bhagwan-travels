import React, { useState } from 'react';

const stateOptions = [
  {
    name: 'Maharashtra',
    districts: [
      'Mumbai',
      'Pune',
      'Nashik',
      'Aurangabad',
      'Kolhapur',
      'Solapur',
      'Ratnagiri',
      'Sangli',
      'Satara',
      'Latur',
      'Thane',
      'Nanded',
      'Amravati',
      'Nagpur',
    ],
  },
  {
    name: 'Gujarat',
    districts: ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Gandhinagar', 'Bhavnagar', 'Jamnagar'],
  },
  {
    name: 'Karnataka',
    districts: ['Bengaluru', 'Mysore', 'Mangalore', 'Hubli-Dharwad', 'Belgaum'],
  },
];

const getDistricts = (stateName) => {
  const state = stateOptions.find((item) => item.name === stateName);
  return state ? state.districts : [];
};

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    date: '',
    pickupState: '',
    pickupDistrict: '',
    dropState: '',
    dropDistrict: '',
  });

  const handleWhatsApp = (e) => {
    e.preventDefault();
    const message = `नमस्कार प्रमोदजी,\nमाझं नाव ${formData.name} आहे.\nमला ${formData.date} रोजी ${formData.pickupDistrict}, ${formData.pickupState} पासून ${formData.dropDistrict}, ${formData.dropState} साठी कार बुक करायची आहे.\nकृपया बुकिंग तपशील आणि उपलब्ध वाहन पर्याय पाठवा.\n\nकृपया खालीलपैकी एक पर्याय निवडा:\n1) स्वीकारा\n2) नकारा`;
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
          <p className="text-xl md:text-2xl italic font-light italic">Explore. Experience. Enjoy the Journey</p>
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
              <input
                type="text"
                required
                className="w-full border p-3 rounded-lg outline-primary"
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>
            <div>
              <label className="block mb-1 font-medium text-gray-700 text-sm">Date</label>
              <input
                type="date"
                required
                className="w-full border p-3 rounded-lg outline-primary"
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
              />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block mb-1 font-medium text-gray-700 text-sm">Pickup State</label>
                <select
                  required
                  className="w-full border p-3 rounded-lg outline-primary"
                  value={formData.pickupState}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      pickupState: e.target.value,
                      pickupDistrict: '',
                    })
                  }
                >
                  <option value="">Select a state</option>
                  {stateOptions.map((state) => (
                    <option key={state.name} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700 text-sm">Pickup District</label>
                <select
                  required
                  className="w-full border p-3 rounded-lg outline-primary"
                  value={formData.pickupDistrict}
                  onChange={(e) => setFormData({ ...formData, pickupDistrict: e.target.value })}
                  disabled={!formData.pickupState}
                >
                  <option value="">Select a district</option>
                  {getDistricts(formData.pickupState).map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="block mb-1 font-medium text-gray-700 text-sm">Destination State</label>
                <select
                  required
                  className="w-full border p-3 rounded-lg outline-primary"
                  value={formData.dropState}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      dropState: e.target.value,
                      dropDistrict: '',
                    })
                  }
                >
                  <option value="">Select a state</option>
                  {stateOptions.map((state) => (
                    <option key={state.name} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block mb-1 font-medium text-gray-700 text-sm">Destination District</label>
                <select
                  required
                  className="w-full border p-3 rounded-lg outline-primary"
                  value={formData.dropDistrict}
                  onChange={(e) => setFormData({ ...formData, dropDistrict: e.target.value })}
                  disabled={!formData.dropState}
                >
                  <option value="">Select a district</option>
                  {getDistricts(formData.dropState).map((district) => (
                    <option key={district} value={district}>
                      {district}
                    </option>
                  ))}
                </select>
              </div>
            </div>
            <button className="w-full bg-green-600 text-white font-bold py-4 rounded-lg shadow-lg hover:bg-green-700 transition">
              <span className="inline-flex items-center justify-center gap-2">
                <svg viewBox="0 0 24 24" className="h-5 w-5" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.868-2.03-.967-.273-.099-.472-.148-.672.149-.198.297-.768.967-.942 1.165-.173.198-.347.223-.644.075-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.297-.496.099-.198.05-.372-.025-.52-.075-.148-.672-1.612-.92-2.206-.242-.579-.487-.5-.672-.51l-.573-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.077 4.487.709.306 1.262.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414-.074-.124-.273-.198-.57-.347z" />
                  <path d="M20.52 3.48A11.94 11.94 0 0012 0C5.373 0 .003 5.373.003 12c0 2.11.56 4.17 1.62 5.98L0 24l6.3-1.65A11.94 11.94 0 0012 24c6.627 0 12-5.373 12-12 0-3.2-1.19-6.2-3.48-8.52zM12 22.002c-1.91 0-3.78-.5-5.4-1.45l-.39-.23-3.74.98.98-3.66-.25-.39A9.966 9.966 0 011.98 12c0-5.52 4.48-10 10-10 2.67 0 5.16 1.04 7.04 2.93A9.95 9.95 0 0122 12c0 5.52-4.48 10.002-10 10.002z" />
                </svg>
                Book via WhatsApp
              </span>
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