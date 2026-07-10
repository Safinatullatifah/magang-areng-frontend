"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function RequestQuotation() {
  const router = useRouter();
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/global/dp-submission"); 
  };

  const products = [
    { id: 1, name: "Premium Shisha / Hookah Cube", img: "/produk-bambu.jpg" },
    { id: 2, name: "Premium BBQ Coconut Charcoal", img: "/produk-utama.jpg" },
    { id: 3, name: "Sawdust Charcoal Briquette", img: "/produk-serbuk.jpg" },
    { id: 4, name: "Hardwood Charcoal Briquette", img: "/produk-kayu.jpg" },
    { id: 5, name: "Quick-Glow Shisha Tablet", img: "/produk-sekam.jpg" },
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans text-gray-800">
      <Navbar lang="en" />

      <main className="max-w-4xl mx-auto px-8 py-16">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900">Request Quotation</h1>
          <p className="text-gray-500 mt-2">Looking to place a bulk order? Fill out the form below to get a custom quote.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-gray-100 space-y-8">
          
          {/* Personal Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">First Name *</label>
              <input type="text" placeholder="First Name" className="w-full border border-gray-300 rounded-lg p-3 focus:border-[#4C9A2A] outline-none" required />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">Last Name *</label>
              <input type="text" placeholder="Last Name" className="w-full border border-gray-300 rounded-lg p-3 focus:border-[#4C9A2A] outline-none" required />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-700 mb-2">Email *</label>
              <input type="email" placeholder="Email Address" className="w-full border border-gray-300 rounded-lg p-3 focus:border-[#4C9A2A] outline-none" required />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-700 mb-2">Phone *</label>
              <input type="tel" placeholder="Phone Number" className="w-full border border-gray-300 rounded-lg p-3 focus:border-[#4C9A2A] outline-none" required />
            </div>
            <div className="md:col-span-2">
              <label className="block text-xs font-bold text-gray-700 mb-2">Company Name *</label>
              <input type="text" placeholder="Company Name" className="w-full border border-gray-300 rounded-lg p-3 focus:border-[#4C9A2A] outline-none" required />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">Country *</label>
              <input type="text" placeholder="Country Destination" className="w-full border border-gray-300 rounded-lg p-3 focus:border-[#4C9A2A] outline-none" required />
            </div>
            <div>
              <label className="block text-xs font-bold text-gray-700 mb-2">Destination Port</label>
              <input type="text" placeholder="Destination Port" className="w-full border border-gray-300 rounded-lg p-3 focus:border-[#4C9A2A] outline-none" />
            </div>
          </div>

          {/* Product Selection */}
          <div>
            <label className="block text-xs font-bold text-gray-700 mb-4">Product of Interest * <span className="text-gray-400 font-normal">(Select at least one)</span></label>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
              {products.map((prod) => (
                <div 
                  key={prod.id} 
                  onClick={() => setSelectedProduct(prod.id)}
                  className={`border-2 rounded-xl cursor-pointer overflow-hidden transition-all ${selectedProduct === prod.id ? 'border-[#4C9A2A] ring-2 ring-green-100' : 'border-gray-200 hover:border-[#4C9A2A]'}`}
                >
                  <img src={prod.img} alt={prod.name} className="w-full h-24 object-cover" />
                  <div className="p-2 text-center">
                    <p className="text-[10px] font-bold text-gray-800 leading-tight">{prod.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Estimation & Message */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6 bg-gray-50 rounded-xl border border-gray-200">
             <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">Estimated Quantity (Tons / Containers)</label>
                <input type="text" placeholder="e.g., 1x 20ft FCL" className="w-full border border-gray-300 rounded-lg p-3 focus:border-[#4C9A2A] outline-none" />
             </div>
             <div>
                <label className="block text-xs font-bold text-gray-700 mb-2">Target Price (USD / Ton)</label>
                <input type="text" placeholder="e.g., $1000" className="w-full border border-gray-300 rounded-lg p-3 focus:border-[#4C9A2A] outline-none" />
             </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-gray-700 mb-2">Additional Message</label>
            <textarea rows="4" placeholder="Send us a message detailing your requirements..." className="w-full border border-gray-300 rounded-lg p-3 focus:border-[#4C9A2A] outline-none"></textarea>
          </div>

          {/* Submit Button */}
          <button type="submit" className="w-full bg-[#E5E7EB] hover:bg-[#4C9A2A] hover:text-white text-gray-500 font-extrabold py-4 rounded-xl transition shadow-sm text-lg mt-8">
            Request Quotation
          </button>
        </form>
      </main>

      <Footer />
    </div>
  );
}