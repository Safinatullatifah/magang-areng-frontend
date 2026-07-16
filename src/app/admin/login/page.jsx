"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLogin() {
  const router = useRouter();
  
  // State untuk mengontrol tampilan: 1 = Form Login, 2 = Form OTP
  const [step, setStep] = useState(1);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [otp, setOtp] = useState("");

  // Simulasi kirim OTP
  const handleSendOTP = (e) => {
    e.preventDefault();
    if (phoneNumber.trim() !== "") {
      setStep(2); // Pindah ke layar OTP
    }
  };

  // Simulasi verifikasi OTP dan masuk ke Dashboard Admin
  const handleVerifyOTP = (e) => {
    e.preventDefault();
    if (otp.length === 4) {
      // Pura-puranya berhasil login, arahkan ke dashboard admin
      router.push("/admin/dashboard");
    }
  };

  return (
    // Background hijau sage yang kalem sesuai desain
    <div className="min-h-screen bg-[#9AA68E] flex items-center justify-center p-4 font-sans text-gray-800">
      
      {/* Container Card Putih */}
      <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-10 text-center relative overflow-hidden transition-all duration-500">
        
        {/* LOGO PLACEHOLDER */}
        <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-6 flex items-center justify-center">
          {/* Taruh icon/logo Areng di sini nanti */}
        </div>

        {/* --- STEP 1: FORM LOGIN UTAMA --- */}
        {step === 1 && (
          <div className="animate-fade-in">
            <h1 className="text-xl font-extrabold text-gray-900 mb-1">Welcome to Arang Briket</h1>
            <p className="text-xs text-gray-500 mb-8 font-medium">Time to pack some orders!</p>

            {/* Tombol Google */}
            <button className="w-full flex items-center justify-center gap-3 border border-gray-300 rounded-lg py-3 hover:bg-gray-50 transition shadow-sm mb-6">
              <svg className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              <span className="text-sm font-bold text-gray-700">Continue With Google</span>
            </button>

            {/* Divider OR */}
            <div className="flex items-center gap-4 mb-6">
              <div className="flex-1 h-px bg-gray-200"></div>
              <span className="text-xs text-gray-400 font-bold">OR</span>
              <div className="flex-1 h-px bg-gray-200"></div>
            </div>

            {/* Form WhatsApp */}
            <form onSubmit={handleSendOTP} className="text-left">
              <label className="block text-xs font-bold text-gray-700 mb-2">WhatsApp number</label>
              <div className="flex border border-gray-300 rounded-lg overflow-hidden focus-within:border-[#4C9A2A] focus-within:ring-1 focus-within:ring-[#4C9A2A] transition mb-4">
                <div className="bg-[#52A32D] text-white px-4 py-3 text-sm font-bold flex items-center justify-center">
                  ID +62
                </div>
                <input 
                  type="tel" 
                  placeholder="812-3456-7890" 
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="flex-1 px-4 py-3 outline-none text-sm font-semibold tracking-wide"
                  required
                />
              </div>

              <p className="text-[10px] text-gray-400 text-center mb-4">OTP will be sent to your Whatsapp</p>

              <button type="submit" className="w-full bg-[#52A32D] hover:bg-green-700 text-white font-bold py-3 rounded-lg transition shadow-md">
                Send OTP code
              </button>
            </form>

            <p className="text-[10px] text-gray-500 mt-6">
              Don't have an account? <span className="text-[#52A32D] font-bold cursor-pointer hover:underline">Sign up automatically when you log in</span>
            </p>
          </div>
        )}

        {/* --- STEP 2: FORM OTP --- */}
        {step === 2 && (
          <div className="animate-fade-in">
            <h1 className="text-xl font-extrabold text-gray-900 mb-2">Enter Code</h1>
            <p className="text-xs text-gray-500 mb-8 font-medium">
              We sent a 4-digit code to your Whatsapp<br/>
              <span className="font-bold text-gray-800">+62 {phoneNumber}</span>
            </p>

            <form onSubmit={handleVerifyOTP} className="text-left">
              <label className="block text-xs font-bold text-gray-700 mb-2 text-center">Verification Code</label>
              <input 
                type="text" 
                maxLength={4}
                placeholder="0 0 0 0" 
                value={otp}
                onChange={(e) => setOtp(e.target.value.replace(/[^0-9]/g, ''))} // Hanya angka
                className="w-full border border-gray-300 rounded-lg py-4 text-center text-2xl font-extrabold tracking-[1em] focus:outline-none focus:border-[#4C9A2A] focus:ring-1 focus:ring-[#4C9A2A] transition mb-8"
                required
              />

              <button type="submit" className="w-full bg-[#52A32D] hover:bg-green-700 text-white font-bold py-3 rounded-lg transition shadow-md mb-6">
                Verify
              </button>
            </form>

            <p className="text-xs text-gray-500">
              Didn't receive code? <span className="text-[#52A32D] font-bold cursor-pointer hover:underline">Resend</span>
            </p>
            
            {/* Tombol kembali ke input nomor (Ekstra UX) */}
            <button 
              onClick={() => setStep(1)} 
              className="text-[10px] text-gray-400 hover:text-gray-600 font-medium mt-6 underline"
            >
              Change Phone Number
            </button>
          </div>
        )}

      </div>

      {/* Tambahan animasi CSS sederhana untuk transisi layar */}
      <style jsx>{`
        .animate-fade-in {
          animation: fadeIn 0.4s ease-in-out;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
}