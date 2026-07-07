"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function CheckoutPage() {
  const [lang] = useState("id");
  const router = useRouter();

  // Data Dummy Pesanan
  const cartItems = [
    { id: 1, name: "Briket Arang Kayu", price: 25000, qty: 30, image: "/produk-kayu.jpg" },
    { id: 2, name: "Briket Arang Bambu", price: 49000, qty: 1, image: "/produk-bambu.jpg" }
  ];

  const totalPesanan = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);
  const biayaPengiriman = 20000;
  const totalBayar = totalPesanan + biayaPengiriman;

  // Fungsi saat tombol Bayar Sekarang ditekan
  const handlePayment = (e) => {
    e.preventDefault();
    // Setelah pura-pura berhasil bayar, arahkan ke halaman Status Pengiriman
    router.push("/pesanan");
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans text-gray-800">
      <Navbar lang={lang} />

      <main className="max-w-7xl mx-auto px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* KOLOM KIRI: Ringkasan Pesanan */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-sm font-bold text-[#4C9A2A] tracking-widest mb-6">PESANAN</h3>
              <div className="space-y-6 mb-8">
                {cartItems.map((item) => (
                  <div key={item.id} className="flex gap-4">
                    <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden shrink-0">
                      {item.image && <img src={item.image} alt={item.name} className="w-full h-full object-cover" />}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-extrabold text-gray-900">{item.name}</h4>
                      <p className="text-sm text-gray-500">Qty: {item.qty}</p>
                    </div>
                    <div className="font-extrabold text-gray-900 text-right">
                      Rp {item.price.toLocaleString('id-ID')} <br/>
                      <span className="text-xs font-normal text-gray-500">/ Kg</span>
                    </div>
                  </div>
                ))}
              </div>

              <h3 className="text-sm font-bold text-[#4C9A2A] tracking-widest mb-4 border-t border-gray-200 pt-6">RINCIAN PEMBAYARAN</h3>
              <div className="space-y-2 text-sm text-gray-600 mb-6">
                <div className="flex justify-between"><span>Total Pesanan</span> <span>Rp {totalPesanan.toLocaleString('id-ID')}</span></div>
                <div className="flex justify-between"><span>Biaya Pengiriman</span> <span>Rp {biayaPengiriman.toLocaleString('id-ID')}</span></div>
              </div>
              <div className="flex justify-between items-center font-extrabold text-lg text-gray-900">
                <span>Total Bayar</span>
                <span>Rp {totalBayar.toLocaleString('id-ID')}</span>
              </div>
            </div>
          </div>

          {/* KOLOM KANAN: Form Kontak, Pengiriman & Pembayaran */}
          <div className="lg:col-span-8">
            <form onSubmit={handlePayment} className="space-y-8">
              
              {/* Contact */}
              <div>
                <h3 className="text-lg font-extrabold mb-4">Contact <span className="text-red-500">*</span></h3>
                <div className="bg-white border border-gray-200 rounded-xl p-4 flex items-center gap-4">
                  <div className="w-12 h-12 bg-[#4C9A2A] rounded-full flex items-center justify-center text-white">
                     <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
                  </div>
                  <div>
                    <p className="font-extrabold">User User</p>
                    <p className="text-sm text-gray-500">user123@gmail.com</p>
                  </div>
                </div>
              </div>

              {/* Delivery */}
              <div>
                <h3 className="text-lg font-extrabold mb-4">Delivery</h3>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-bold mb-2">Nama Lengkap <span className="text-red-500">*</span></label>
                    <input type="text" defaultValue="User User" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#4C9A2A]" required />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Alamat <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <input type="text" defaultValue="Jl Jalan dengan sepatu rodaku" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#4C9A2A]" required />
                      <svg className="w-5 h-5 absolute right-4 top-3.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2">Patokan Alamat</label>
                    <input type="text" placeholder="Patokan Alamat (Nama Jalan, Blok Rumah, dsb.)" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#4C9A2A]" />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-bold mb-2">Kode Pos <span className="text-red-500">*</span></label>
                      <input type="text" defaultValue="00000" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#4C9A2A]" required />
                    </div>
                    <div>
                      <label className="block text-sm font-bold mb-2">Nomor Telepon <span className="text-red-500">*</span></label>
                      <input type="text" defaultValue="6280000000000" className="w-full border border-gray-300 rounded-lg p-3 focus:outline-none focus:border-[#4C9A2A]" required />
                    </div>
                  </div>
                  <label className="flex items-center gap-2 cursor-pointer mt-2">
                    <input type="checkbox" className="w-4 h-4 text-[#4C9A2A] rounded focus:ring-[#4C9A2A]" defaultChecked />
                    <span className="text-sm font-medium">Simpan alamat untuk pesanan berikutnya</span>
                  </label>
                </div>
              </div>

              {/* Metode Pengiriman */}
              <div>
                <h3 className="text-sm font-bold mb-2">Metode Pengiriman</h3>
                <div className="bg-gray-100 border border-gray-200 rounded-lg p-4 flex justify-between font-bold">
                  <span>Delivery</span>
                  <span>Rp {biayaPengiriman.toLocaleString('id-ID')}</span>
                </div>
              </div>

              {/* Payment */}
              <div>
                <h3 className="text-lg font-extrabold mb-4">Payment</h3>
                <div className="space-y-4">
                  {/* Instant */}
                  <p className="text-xs text-gray-400 font-bold">Instant</p>
                  <label className="flex justify-between items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                     <span className="font-bold text-sm">QRIS</span>
                     <input type="radio" name="payment" className="w-4 h-4 text-[#4C9A2A] focus:ring-[#4C9A2A]" />
                  </label>

                  {/* Virtual Account */}
                  <p className="text-xs text-gray-400 font-bold mt-4">Virtual Account Bank</p>
                  <label className="flex justify-between items-center p-3 border border-[#4C9A2A] bg-green-50 rounded-lg cursor-pointer">
                     <span className="font-bold text-sm">Bank Central Asia (BCA)</span>
                     <input type="radio" name="payment" className="w-4 h-4 text-[#4C9A2A] focus:ring-[#4C9A2A]" defaultChecked />
                  </label>
                  <label className="flex justify-between items-center p-3 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50">
                     <span className="font-bold text-sm">Bank Rakyat Indonesia (BRI)</span>
                     <input type="radio" name="payment" className="w-4 h-4 text-[#4C9A2A] focus:ring-[#4C9A2A]" />
                  </label>
                </div>
              </div>

              {/* Tombol Bayar */}
              <button type="submit" className="w-full bg-[#52A32D] hover:bg-green-700 text-white font-extrabold py-4 rounded-xl transition shadow-lg text-lg mt-8">
                Bayar Sekarang
              </button>
            </form>
          </div>

        </div>
      </main>

      <Footer />
    </div>
  );
}