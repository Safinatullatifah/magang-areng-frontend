"use client";

import { useState } from "react";
import TopBanner from "../../components/TopBanner";
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";

export default function StatusPengirimanLokal() {
  const [lang, setLang] = useState("id");
  const [activeTab, setActiveTab] = useState("Semua");
  const [selectedOrder, setSelectedOrder] = useState(null); // Menyimpan pesanan yang sedang diklik

  // Data Dummy Pesanan untuk simulasi UI
  const orders = [
    {
      id: "K0D3P354N4N1",
      date: "03/07/2026",
      status: "Belum Bayar",
      totalProducts: 2,
      totalWeight: 31,
      totalPrice: 819000,
      items: [
        { name: "Briket Arang Kayu", qty: 30, price: 25000, image: "/produk-kayu.jpg" },
        { name: "Briket Arang Bambu", qty: 1, price: 49000, image: "/produk-bambu.jpg" },
      ],
      shippingCost: 20000,
      receiver: { name: "User User", phone: "6280000000000", address: "Jl Jalan dengan sepatu rodaku, Senayan, Sudirman, Jakarta Selatan, DKI Jakarta, Indonesia. No 15. 00000." },
    },
    {
      id: "K0D3P354N4N2",
      date: "01/07/2026",
      status: "Diproses",
      totalProducts: 2,
      totalWeight: 31,
      totalPrice: 819000,
      items: [],
    },
    {
      id: "K0D3P354N4N3",
      date: "28/06/2026",
      status: "Dikirim",
      resi: "UNIQU3C0D3",
      paymentMethod: "QRIS",
      totalProducts: 2,
      totalWeight: 31,
      totalPrice: 819000,
      items: [
        { name: "Briket Arang Kayu", qty: 30, price: 25000, image: "/produk-kayu.jpg" },
        { name: "Briket Arang Bambu", qty: 1, price: 49000, image: "/produk-bambu.jpg" },
      ],
      shippingCost: 20000,
      receiver: { name: "User User", phone: "6280000000000", address: "Jl Jalan dengan sepatu rodaku, Senayan, Sudirman, Jakarta Selatan, DKI Jakarta, Indonesia. No 15. 00000." },
    },
    {
      id: "K0D3P354N4N4",
      date: "20/06/2026",
      status: "Selesai",
      totalProducts: 2,
      totalWeight: 31,
      totalPrice: 819000,
      items: [],
    }
  ];

  // Fungsi Filter Tab
  const tabs = ["Semua", "Belum Bayar", "Diproses", "Dikirim", "Selesai"];
  const filteredOrders = activeTab === "Semua" ? orders : orders.filter(o => o.status === activeTab);

  // Fungsi Warna Badge Status
  const getStatusColor = (status) => {
    switch(status) {
      case "Belum Bayar": return "text-red-600 border-red-600 bg-red-50";
      case "Diproses": return "text-blue-600 border-blue-600 bg-blue-50";
      case "Dikirim": return "text-orange-600 border-orange-600 bg-orange-50";
      case "Selesai": return "text-green-600 border-green-600 bg-green-50";
      default: return "text-gray-600 border-gray-600";
    }
  };

  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans text-gray-800">
      <TopBanner lang={lang} toggleLanguage={() => setLang(lang === "id" ? "en" : "id")} />
      <Navbar lang={lang} />

      <main className="max-w-7xl mx-auto px-8 py-8">
        
        {/* TOP SECTION: Profil & Alamat */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          {/* Card User */}
          <div className="bg-white border-2 border-[#4C9A2A] rounded-xl p-6 flex justify-between items-center shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-[#4C9A2A] rounded-full flex items-center justify-center text-white">
                 <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd"></path></svg>
              </div>
              <div>
                <h2 className="font-extrabold text-lg">User User</h2>
                <p className="text-gray-500 text-sm">user123@gmail.com</p>
              </div>
            </div>
            <button className="text-red-500 hover:bg-red-50 p-2 rounded-lg transition border border-red-200">
              {/* Icon Logout */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
            </button>
          </div>

          {/* Card Alamat */}
          <div className="bg-white border-2 border-[#4C9A2A] rounded-xl p-6 flex justify-between items-start shadow-sm">
            <div>
              <h3 className="font-extrabold mb-1">Alamat Tersimpan</h3>
              <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
                Jl Jalan dengan sepatu rodaku, Senayan, Sudirman, Jakarta Selatan, DKI Jakarta, Indonesia. No 15. 00000.
              </p>
            </div>
            <button className="text-[#4C9A2A] hover:bg-green-50 p-2 rounded-lg transition border border-[#4C9A2A]">
              {/* Icon Edit */}
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"></path></svg>
            </button>
          </div>
        </div>

        {/* BOTTOM SECTION: Master-Detail Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* KIRI: Daftar Pesanan (Master) */}
          <div className="lg:col-span-5 bg-white border border-[#4C9A2A] rounded-xl overflow-hidden flex flex-col h-[700px]">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 overflow-x-auto hide-scrollbar">
              {tabs.map(tab => (
                <button 
                  key={tab}
                  onClick={() => { setActiveTab(tab); setSelectedOrder(null); }}
                  className={`flex-1 py-4 px-2 text-sm font-bold whitespace-nowrap border-b-4 transition-colors ${activeTab === tab ? 'border-[#4C9A2A] text-[#4C9A2A]' : 'border-transparent text-gray-400 hover:text-gray-600'}`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* List Pesanan */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {filteredOrders.length === 0 ? (
                <div className="text-center text-gray-400 mt-10 text-sm font-semibold">Tidak ada pesanan di kategori ini.</div>
              ) : (
                filteredOrders.map(order => (
                  <div 
                    key={order.id}
                    onClick={() => setSelectedOrder(order)}
                    className={`border rounded-lg p-4 cursor-pointer transition-all ${selectedOrder?.id === order.id ? 'border-[#4C9A2A] bg-green-50 shadow-md' : 'border-gray-200 hover:border-[#4C9A2A]'}`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h4 className="font-extrabold text-gray-900">{order.id}</h4>
                        <p className="text-xs text-gray-500">{order.date}</p>
                      </div>
                      <span className={`text-[10px] font-bold px-3 py-1 rounded-full border ${getStatusColor(order.status)}`}>
                        {order.status}
                      </span>
                    </div>
                    <div className="flex justify-between items-end text-sm">
                      <div className="text-gray-500">Total Pesanan<br/>Total Bayar</div>
                      <div className="text-right font-extrabold text-gray-900">
                        {order.totalProducts} Produk ({order.totalWeight} kg)<br/>Rp {order.totalPrice.toLocaleString('id-ID')}
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>

          {/* KANAN: Detail Pesanan (Detail) */}
          <div className="lg:col-span-7 bg-white rounded-xl shadow-sm border border-gray-100 flex flex-col h-[700px] overflow-y-auto">
            
            {/* 1. STATE: EMPTY (Belum ada pesanan sama sekali) */}
            {orders.length === 0 && (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                {/* Gunakan gambar placeholder atau SVG box sedih dari desainmu */}
                <div className="w-48 h-48 bg-gray-200 rounded-xl mb-6 flex items-center justify-center font-bold text-gray-400">Box Icon</div>
                <h2 className="text-2xl font-extrabold text-gray-800 mb-6">Belum ada pesanan. Yuk, mulai belanja!</h2>
                <button className="bg-[#4C9A2A] text-white font-bold py-3 px-8 rounded-lg hover:bg-green-700 transition">Jelajahi Produk</button>
              </div>
            )}

            {/* 2. STATE: IDLE (Ada pesanan tapi belum ada yang di-klik) */}
            {orders.length > 0 && !selectedOrder && (
              <div className="flex-1 flex flex-col items-center justify-center text-center p-8">
                <div className="w-48 h-48 bg-gray-200 rounded-xl mb-6 flex items-center justify-center font-bold text-gray-400">Cursor Icon</div>
                <h2 className="text-2xl font-extrabold text-gray-800">Klik pesanan untuk melihat detail</h2>
              </div>
            )}

            {/* 3. STATE: DETAIL BELUM BAYAR */}
            {selectedOrder?.status === "Belum Bayar" && (
              <div className="p-8">
                <div className="border border-red-200 bg-red-50 rounded-lg p-6 flex justify-between items-center mb-8">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Bayar sebelum</p>
                    <p className="text-3xl font-extrabold text-red-600">00:00:00</p>
                  </div>
                  <button className="border-2 border-red-600 text-red-600 font-bold py-2 px-6 rounded-lg hover:bg-red-600 hover:text-white transition">
                    Lanjutkan Pembayaran
                  </button>
                </div>
                {/* Panggil komponen Rincian yang bisa di-reuse */}
                <OrderDetailsContent order={selectedOrder} />
              </div>
            )}

            {/* 4. STATE: DETAIL DIKIRIM */}
            {selectedOrder?.status === "Dikirim" && (
              <div className="p-8">
                <div className="border border-orange-200 bg-orange-50 rounded-lg p-6 flex justify-between items-center mb-8">
                  <div>
                    <p className="text-xs text-gray-600 mb-1">Nomor Resi</p>
                    <p className="text-2xl font-extrabold text-orange-600 flex items-center gap-2">
                      📄 {selectedOrder.resi}
                    </p>
                  </div>
                  <button className="border-2 border-orange-600 text-orange-600 font-bold py-2 px-6 rounded-lg hover:bg-orange-600 hover:text-white transition">
                    Lacak di Situs Kurir
                  </button>
                </div>
                <OrderDetailsContent order={selectedOrder} />
              </div>
            )}

            {/* STATE: LAINNYA (Diproses / Selesai) */}
            {(selectedOrder?.status === "Diproses" || selectedOrder?.status === "Selesai") && (
              <div className="p-8">
                <div className="bg-gray-100 rounded-lg p-6 text-center mb-8 font-bold text-gray-600">
                  Status Pesanan: {selectedOrder.status}
                </div>
                <OrderDetailsContent order={selectedOrder} />
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

// Komponen Sub-Detail untuk merender daftar produk, harga, dan alamat (Agar kode tidak berulang)
function OrderDetailsContent({ order }) {
  return (
    <div className="space-y-8">
      {/* List Produk */}
      <div>
        <h4 className="text-xs font-bold text-[#4C9A2A] tracking-widest mb-4">PESANAN</h4>
        <div className="space-y-4">
          {order.items?.map((item, idx) => (
            <div key={idx} className="flex gap-4">
              <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden shrink-0">
                {item.image && <img src={item.image} alt={item.name} className="w-full h-full object-cover" />}
              </div>
              <div className="flex-1">
                <h5 className="font-extrabold text-gray-900">{item.name}</h5>
                <p className="text-sm text-gray-500">Qty: {item.qty}</p>
              </div>
              <div className="font-extrabold text-gray-900">
                Rp {item.price.toLocaleString('id-ID')} <span className="text-xs font-normal text-gray-500">/ Kg</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Rincian Pembayaran */}
      <div className="border-t border-gray-200 pt-6">
        <h4 className="text-xs font-bold text-[#4C9A2A] tracking-widest mb-4">RINCIAN PEMBAYARAN</h4>
        <div className="space-y-2 text-sm text-gray-600 flex flex-col">
          <div className="flex justify-between"><span>Total Pesanan</span> <span>Rp {(order.totalPrice - (order.shippingCost || 0)).toLocaleString('id-ID')}</span></div>
          {order.shippingCost && <div className="flex justify-between"><span>Biaya Pengiriman</span> <span>Rp {order.shippingCost.toLocaleString('id-ID')}</span></div>}
          {order.paymentMethod && <div className="flex justify-between"><span>Metode Pembayaran</span> <span>{order.paymentMethod}</span></div>}
        </div>
        <div className="flex justify-between items-center mt-6 border-t border-gray-100 pt-4">
          <span className="font-extrabold text-gray-900">Total Bayar</span>
          <span className="text-xl font-extrabold text-gray-900">Rp {order.totalPrice.toLocaleString('id-ID')}</span>
        </div>
      </div>

      {/* Informasi Pengiriman */}
      {order.receiver && (
        <div className="border-t border-gray-200 pt-6">
          <h4 className="text-xs font-bold text-[#4C9A2A] tracking-widest mb-4">INFORMASI PENGIRIMAN</h4>
          <div className="grid grid-cols-3 text-sm gap-4">
            <div className="text-gray-600">Nama Penerima<br/>Nomor Telepon<br/>Alamat Penerima</div>
            <div className="col-span-2 font-medium text-gray-900">
              {order.receiver.name}<br/>{order.receiver.phone}<br/><span className="leading-relaxed">{order.receiver.address}</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}