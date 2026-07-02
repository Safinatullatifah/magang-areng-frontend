"use client";

import { useState } from "react";
import TopBanner from "../../../components/TopBanner";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

export default function DetailProduk() {
  const [lang, setLang] = useState("id");
  const toggleLanguage = () => setLang(lang === "id" ? "en" : "id");
  const [qty, setQty] = useState(1);

  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans text-gray-800">
      <TopBanner lang={lang} toggleLanguage={toggleLanguage} />
      <Navbar lang={lang} />

      {/* 1. BAGIAN DETAIL PRODUK UTAMA */}
      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start bg-white p-8 rounded-2xl shadow-sm border border-gray-100 mb-16">
          
          {/* Kiri: Galeri Gambar */}
          <div>
            <div className="w-full h-96 bg-gray-200 rounded-xl mb-4 overflow-hidden">
               {/* Ganti dengan img produk */}
               <div className="w-full h-full bg-gray-800"></div>
            </div>
            <div className="flex gap-4">
              {[1, 2, 3, 4, 5].map((thumb) => (
                <div key={thumb} className="w-16 h-16 bg-gray-800 rounded-lg cursor-pointer border-2 hover:border-[#4C9A2A] transition"></div>
              ))}
            </div>
          </div>

          {/* Kanan: Info Produk */}
          <div className="flex flex-col h-full">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4">
              Briket Arang Batok (Tempurung) Kelapa
            </h1>
            <p className="text-gray-600 leading-relaxed mb-6">
              Memiliki kalori panas tinggi, waktu bakar lama mencapai 2-3 jam, menghasilkan sedikit asap, dan tidak menyengat. Penggunaannya untuk restaurant BBQ, sate, angkringan modern, dan kebutuhan shisa.
            </p>
            
            <div className="flex gap-6 text-sm text-gray-600 font-semibold mb-8">
              <span className="flex items-center gap-1">🕒 2-3 jam</span>
              <span className="flex items-center gap-1">💨 Asap minimal</span>
              <span className="flex items-center gap-1 text-[#4C9A2A]">BBQ, Sate, Shisha</span>
            </div>

            <div className="flex justify-between items-end mb-10 border-t border-gray-100 pt-6">
              <div>
                <p className="text-xs text-[#4C9A2A] font-bold tracking-widest mb-2">METODE PENGIRIMAN</p>
                <div className="flex gap-2">
                  <div className="h-6 w-12 bg-gray-200 rounded text-[8px] flex items-center justify-center">Pos</div>
                  <div className="h-6 w-12 bg-gray-200 rounded text-[8px] flex items-center justify-center">JNE</div>
                  <div className="h-6 w-12 bg-gray-200 rounded text-[8px] flex items-center justify-center">Paxel</div>
                </div>
              </div>
              <div className="text-right">
                <span className="text-3xl font-extrabold text-gray-900">Rp 25,000</span>
                <span className="text-gray-500 font-medium"> / Kg</span>
              </div>
            </div>

            {/* Action Bar (Quantity & Add to Cart) */}
            <div className="flex gap-4 mt-auto">
              <div className="flex flex-col">
                <span className="text-xs text-[#4C9A2A] font-bold mb-2">JUMLAH (KG)</span>
                <div className="flex items-center gap-4 bg-white border-2 border-gray-300 rounded-full px-4 py-2 w-32 justify-between">
                  <button onClick={() => setQty(qty > 1 ? qty - 1 : 1)} className="font-bold text-xl hover:text-[#4C9A2A]">-</button>
                  <span className="font-bold">{qty}</span>
                  <button onClick={() => setQty(qty + 1)} className="font-bold text-xl hover:text-[#4C9A2A]">+</button>
                </div>
              </div>
              <div className="flex-1 flex flex-col justify-end">
                <button className="w-full bg-[#52A32D] hover:bg-green-700 text-white font-bold py-3 rounded-lg flex items-center justify-center gap-2 transition h-[44px]">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
                  Tambah ke Keranjang
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* 2. BAGIAN PRODUK LAINNYA */}
        <div className="text-center mb-8">
          <h2 className="text-3xl font-extrabold text-gray-900">Produk Lainnya</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
           {/* Card 1 */}
           <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
             <div className="relative h-40 bg-gray-200">
                <div className="absolute top-2 left-2 bg-white text-gray-900 font-extrabold text-xs px-2 py-1 rounded-full shadow-sm z-10">Rp 12,000 <span className="text-[10px] font-normal">/ Kg</span></div>
             </div>
             <div className="p-4 flex flex-col flex-1">
               <h3 className="font-bold text-lg mb-1 leading-tight">Briket Arang Serbuk</h3>
               <p className="text-xs text-gray-500 mb-4 line-clamp-3">Panas kuat dari limbah kayu industri. Efisien untuk kuliner skala menengah dan industri kecil.</p>
               <div className="flex justify-between items-end mt-auto">
                 <span className="text-[10px] font-bold text-[#4C9A2A]">Warung, Industri Kecil</span>
                 <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg></button>
               </div>
             </div>
           </div>

           {/* Card 2 */}
           <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
             <div className="relative h-40 bg-gray-200">
                <div className="absolute top-2 left-2 bg-white text-gray-900 font-extrabold text-xs px-2 py-1 rounded-full shadow-sm z-10">Rp 18,000 <span className="text-[10px] font-normal">/ Kg</span></div>
             </div>
             <div className="p-4 flex flex-col flex-1">
               <h3 className="font-bold text-lg mb-1 leading-tight">Briket Arang Kayu</h3>
               <p className="text-xs text-gray-500 mb-4 line-clamp-3">Dari kayu padat yang dikompres. Bakar stabil dengan aroma alami khas pada masakan.</p>
               <div className="flex justify-between items-end mt-auto">
                 <span className="text-[10px] font-bold text-[#4C9A2A]">Pemanggangan Rumahan</span>
                 <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg></button>
               </div>
             </div>
           </div>

           {/* Card 3 */}
           <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
             <div className="relative h-40 bg-gray-200">
                <div className="absolute top-2 left-2 bg-white text-gray-900 font-extrabold text-xs px-2 py-1 rounded-full shadow-sm z-10">Rp 49,000 <span className="text-[10px] font-normal">/ Kg</span></div>
             </div>
             <div className="p-4 flex flex-col flex-1">
               <h3 className="font-bold text-lg mb-1 leading-tight">Briket Arang Bambu</h3>
               <p className="text-xs text-gray-500 mb-4 line-clamp-3">Pembakaran bersih, kontrol suhu presisi, antimikroba alami. Standar restoran Jepang & Korea.</p>
               <div className="flex justify-between items-end mt-auto">
                 <span className="text-[10px] font-bold text-[#4C9A2A]">BBQ Kelas atas, Resto Asia</span>
                 <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg></button>
               </div>
             </div>
           </div>

           {/* Card 4 */}
           <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col">
             <div className="relative h-40 bg-gray-200">
                <div className="absolute top-2 left-2 bg-white text-gray-900 font-extrabold text-xs px-2 py-1 rounded-full shadow-sm z-10">Rp 9,000 <span className="text-[10px] font-normal">/ Kg</span></div>
             </div>
             <div className="p-4 flex flex-col flex-1">
               <h3 className="font-bold text-lg mb-1 leading-tight">Briket Arang Sekam Padi</h3>
               <p className="text-xs text-gray-500 mb-4 line-clamp-3">Dari limbah pertanian: sekam padi dan ampas tebu. Bahan bakar alternatif ramah lingkungan.</p>
               <div className="flex justify-between items-end mt-auto">
                 <span className="text-[10px] font-bold text-[#4C9A2A]">Biomassa, Industri Bata</span>
                 <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200"><svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg></button>
               </div>
             </div>
           </div>
        </div>
      </main>

      {/* Panggil Footer di sini */}
      <Footer />
    </div>
  );
}