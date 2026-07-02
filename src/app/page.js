"use client";

import { useState } from "react";
import TopBanner from "../components/TopBanner";
import Navbar from "../components/Navbar";

export default function LoginSignUp() {
  const [lang, setLang] = useState("id");

  const toggleLanguage = () => {
    setLang(lang === "id" ? "en" : "id");
  };

  const content = {
    id: {
      title: "Masuk atau Daftar Gratis",
      subtitle: "Pesan arang briketmu, kami antar sampai rumah.",
      btnGoogle: "Lanjutkan dengan Google",
      terms: (
        <>Dengan melanjutkan, kamu menyetujui <b>Syarat & Ketentuan</b> serta <b>Kebijakan Privasi</b> kami.</>
      ),
      features: [
        "Panas Tinggi & Stabil",
        "Alami & Bebas Asap",
        "Suplai Grosir Skala Besar",
        "Standar Internasional & Aman Ekspor",
      ],
    },
    en: {
      title: "Log In or Sign Up for Free",
      subtitle: "Order your briquette charcoal, delivered to your door.",
      btnGoogle: "Continue with Google",
      terms: (
        <>By continuing, you agree to our <b>Terms & Conditions</b> and <b>Privacy Policy</b>.</>
      ),
      features: [
        "High & Stable Heat",
        "Natural & Smokeless",
        "Large Scale Wholesale Supply",
        "International Standard & Export Safe",
      ],
    },
  };

  const t = content[lang];

  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans text-gray-800">
      
      {/* Panggil komponen yang sudah dipisah */}
      <TopBanner lang={lang} toggleLanguage={toggleLanguage} />
      <Navbar lang={lang} />

      {/* Konten Utama tetap di sini */}
      <main className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* KOLOM KIRI (Visual Grid) */}
        <div className="grid grid-cols-2 gap-4 h-full">
          <div className="flex flex-col gap-4">
            <div className="bg-[#3A5C28] rounded-2xl h-48 w-full border-4 border-white shadow-sm overflow-hidden">
             <img 
              src="/Board.png" 
              alt="Motif Hijau" 
              className="w-full h-full object-cover" 
                />
              </div>
            <div className="bg-white rounded-2xl p-6 border-l-4 border-orange-200 shadow-sm flex-1 flex flex-col gap-6 justify-center">
              {t.features.map((feature, idx) => (
                <div key={idx} className="flex items-center gap-4">
                  <div className="w-8 h-8 rounded-full border-2 border-[#4C9A2A] text-[#4C9A2A] flex items-center justify-center font-bold">{idx + 1}</div>
                  <span className="text-sm font-semibold text-gray-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="bg-gray-300 rounded-2xl h-72 w-full shadow-sm overflow-hidden">
              <img 
                src="/Board2.png" 
                alt="Panggangan Arang" 
                className="w-full h-full object-cover" 
              />
            </div>
             <div className="bg-[#6B4624] rounded-2xl h-40 w-full flex items-center justify-center shadow-sm p-8">
              <img 
                src="/Logo.png" 
                alt="Logo Areng Putih" 
                className="h-16 w-auto object-contain" 
              />
            </div>
          </div>
        </div>

        {/* KOLOM KANAN (Form) */}
        <div className="flex flex-col items-center justify-center px-12 text-center max-w-md mx-auto w-full">
          <h1 className="text-3xl font-extrabold text-gray-900 mb-2">{t.title}</h1>
          <p className="text-gray-500 text-sm mb-10">{t.subtitle}</p>
          <button className="w-full bg-[#2C2C2C] hover:bg-black text-white font-medium py-3 px-4 rounded-lg flex items-center justify-center gap-3 transition shadow-md mb-6">
            Google
          </button>
          <p className="text-xs text-gray-400 leading-relaxed max-w-xs">{t.terms}</p>
        </div>
      </main>
    </div>
  );
  
}