"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminProduk() {
  const router = useRouter();
  
  // 1. STATE MANAGEMENT
  const [activeMenu, setActiveMenu] = useState("Product");
  const [marketType, setMarketType] = useState("lokal"); // 'lokal' atau 'global'
  const [view, setView] = useState("list"); // 'list' atau 'form'
  const [activeTab, setActiveTab] = useState("Semua Produk");
  
  // State untuk Modals
  const [modalType, setModalType] = useState(null); // null, 'delete', atau 'success'

  // 2. DUMMY DATA
  const lokalProducts = [
    { id: 1, nama: "Premium Shisha", harga: "Rp. 60.000", stok: "48 karung", status: "Aktif" },
    { id: 2, nama: "Premium BBQ", harga: "Rp. 50.000", stok: "10 karung", status: "Aktif" },
    { id: 3, nama: "Sawdust Charcoal", harga: "Rp. 70.000", stok: "0 karung", status: "Habis" },
    { id: 4, nama: "Hardwood Charcoal", harga: "Rp. 80.000", stok: "10 karung", status: "Aktif" },
  ];

  const globalProducts = [
    { id: 1, nama: "Premium Shisha", bahan: "100% Pure Coconut Shell", aplikasi: "Shisha / Hookah", status: "Aktif" },
    { id: 2, nama: "Premium BBQ", bahan: "Mixed Grade A Coconut Shell", aplikasi: "BBQ Restaurants", status: "Aktif" },
    { id: 3, nama: "Sawdust Charcoal", bahan: "100% Hardwood Sawdust", aplikasi: "BBQ", status: "Habis" },
    { id: 4, nama: "Hardwood Charcoal", bahan: "Natural Hardwood", aplikasi: "Industrial & Traditional BBQ", status: "Aktif" },
  ];

  // 3. HANDLERS
  const handleDeleteClick = () => setModalType("delete");
  const handleConfirmDelete = () => {
    setModalType("success");
    setTimeout(() => setModalType(null), 2000); // Tutup otomatis setelah 2 detik
  };
// Logika Filter Data Product
  const filteredProducts = (marketType === "lokal" ? lokalProducts : globalProducts).filter((prod) => {
    if (activeTab === "Semua Produk") return true;
    if (activeTab === "Stok Habis") return prod.status === "Habis";
    return prod.status === activeTab;
  });

  return (
    <div className="min-h-screen flex bg-[#F9F9F9] font-sans text-gray-800">
      
      {/* ================= SIDEBAR ================= */}
      <aside className="w-64 bg-[#8A9A7B] text-white flex flex-col hidden md:flex fixed h-full z-20">
        <div className="p-8 pb-4">
          <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
          <h2 className="text-xl font-extrabold leading-tight">Arang Briket</h2>
          <p className="text-xs text-gray-200 mt-1">Time to pack some orders!</p>
        </div>
        
        <nav className="flex-1 px-4 mt-6 space-y-8">
          {/* MAIN COURSE */}
          <div>
            <p className="text-xs font-bold text-gray-200 mb-4 px-4 uppercase tracking-wider">Main Course</p>
            <ul className="space-y-2">
              {["Dashboard", "Order", "Product", "Payment"].map((menu) => (
                <li key={menu}>
                  <button
                    onClick={() => {
                      if(menu === "Dashboard") router.push("/admin/dashboard");
                      else if(menu === "Product") router.push("/admin/produk");
                      else if(menu === "Order") router.push("/admin/order");
                      else if(menu === "Payment") router.push("/admin/pembayaran");
                      else setActiveMenu(menu);
                    }}
                    className={`w-full flex flex-row items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold transition-colors text-left ${
                      activeMenu === menu ? "bg-white text-[#52A32D] shadow-sm" : "text-white hover:bg-white/10"
                    }`}
                  >
                    <div className="shrink-0 flex items-center justify-center">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
                      </svg>
                    </div>
                    <span className="flex-1">{menu}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* OTHER (LOG OUT) */}
          <div>
            <p className="text-xs font-bold text-gray-200 mb-4 px-4 uppercase tracking-wider">Other</p>
            <ul>
              <li>
                <button 
                  onClick={() => router.push("/admin/login")} 
                  className="w-full flex flex-row items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold text-white hover:bg-white/10 transition-colors text-left"
                >
                  <div className="shrink-0 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path>
                    </svg>
                  </div>
                  <span className="flex-1">Log Out</span>
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </aside>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-1 ml-0 md:ml-64 p-8 md:p-12 relative">
        
        {/* HEADER (Berubah tergantung mode List atau Form) */}
        <header className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
          <div>
            {view === "list" ? (
              <h1 className="text-2xl font-extrabold text-gray-800">Product</h1>
            ) : (
              <div className="flex items-center gap-4">
                <button onClick={() => setView("list")} className="flex items-center gap-2 text-sm font-bold text-gray-500 hover:text-gray-800 transition">
                  <span>← Kembali</span>
                </button>
                <h1 className="text-2xl font-extrabold text-gray-800">Add / Edit Product</h1>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-6">
            {/* Toggle Lokal | Global */}
            <div className="flex items-center gap-2 text-sm font-bold">
              <button 
                onClick={() => setMarketType("lokal")} 
                className={marketType === "lokal" ? "text-[#52A32D]" : "text-gray-400 hover:text-gray-600"}
              >
                Lokal
              </button>
              <span className="text-gray-300">|</span>
              <button 
                onClick={() => setMarketType("global")} 
                className={marketType === "global" ? "text-[#52A32D]" : "text-gray-400 hover:text-gray-600"}
              >
                Global
              </button>
            </div>
            
            {/* Tombol Add (Hanya muncul di mode list) */}
            {view === "list" && (
              <button 
                onClick={() => setView("form")}
                className="bg-[#52A32D] hover:bg-green-700 text-white text-sm font-bold py-2 px-6 rounded-lg transition shadow-sm"
              >
                + Add
              </button>
            )}
          </div>
        </header>

        {/* ================= KONDISI 1: TAMPILAN TABEL ================= */}
        {view === "list" && (
          <div className="animate-fade-in">
           {/* Filter Tabs */}
            <div className="flex gap-8 mb-6 text-sm font-bold text-gray-500 border-b border-gray-200 pb-2">
              {["Semua Produk", "Aktif", "Non-Aktif", "Stok Habis"].map(tab => (
                <button 
                  key={tab} 
                  onClick={() => setActiveTab(tab)}
                  className={activeTab === tab ? "text-[#52A32D] border-b-2 border-[#52A32D] pb-2 -mb-[9px]" : "hover:text-gray-800"}
                >
                  {tab}
                </button>
              ))}
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#52A32D] text-white">
                    <th className="py-4 px-6 font-bold text-xs uppercase">Produk</th>
                    {/* Header Dinamis Tergantung Toggle */}
                    {marketType === "lokal" ? (
                      <>
                        <th className="py-4 px-6 font-bold text-xs uppercase">Harga</th>
                        <th className="py-4 px-6 font-bold text-xs uppercase">Stok</th>
                      </>
                    ) : (
                      <>
                        <th className="py-4 px-6 font-bold text-xs uppercase">Bahan Baku</th>
                        <th className="py-4 px-6 font-bold text-xs uppercase">Aplikasi</th>
                      </>
                    )}
                    <th className="py-4 px-6 font-bold text-xs uppercase text-center">Status</th>
                    <th className="py-4 px-6 font-bold text-xs uppercase text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredProducts.map((prod) => (
                    <tr key={prod.id} className="hover:bg-gray-50">
                      <td className="py-4 px-6 text-sm font-bold text-gray-800 flex items-center gap-3">
                        <div className="w-10 h-10 bg-gray-200 rounded-md"></div>
                        {prod.nama}
                      </td>
                      
                      {/* Sel Dinamis Tergantung Toggle */}
                      {marketType === "lokal" ? (
                        <>
                          <td className="py-4 px-6 text-sm text-gray-600">{prod.harga}</td>
                          <td className="py-4 px-6 text-sm text-gray-600">{prod.stok}</td>
                        </>
                      ) : (
                        <>
                          <td className="py-4 px-6 text-sm text-gray-600 max-w-[150px] truncate">{prod.bahan}</td>
                          <td className="py-4 px-6 text-sm text-gray-600">{prod.aplikasi}</td>
                        </>
                      )}

                      <td className="py-4 px-6 text-center">
                        <span className={`inline-block px-3 py-1 rounded text-xs font-bold ${prod.status === 'Aktif' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                          {prod.status}
                        </span>
                      </td>
                      <td className="py-4 px-6 flex justify-center gap-2">
                        {/* Tombol Edit */}
                        <button onClick={() => setView("form")} className="p-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-lg transition">
                           ✏️
                        </button>
                        {/* Tombol Delete */}
                        <button onClick={handleDeleteClick} className="p-2 bg-red-100 text-red-600 hover:bg-red-200 rounded-lg transition">
                           🗑️
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= KONDISI 2: TAMPILAN FORM (ADD/EDIT) ================= */}
        {view === "form" && (
          <div className="animate-fade-in bg-white rounded-xl shadow-sm border border-gray-100 p-8">
            
            {/* Status Aktif Toggle (Kanan Atas) */}
            <div className="flex justify-end mb-6">
              <span className="bg-[#52A32D] text-white text-xs font-bold px-4 py-2 rounded-lg">Status: Aktif ✓</span>
            </div>

            {/* FORM LOKAL */}
            {marketType === "lokal" && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-[#52A32D] mb-4">Informasi Dasar</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div><label className="block text-xs font-bold mb-2">Nama Produk</label><input type="text" className="w-full border p-3 rounded-lg bg-gray-50 focus:border-[#52A32D] outline-none" /></div>
                    <div><label className="block text-xs font-bold mb-2">Kode Produk</label><input type="text" className="w-full border p-3 rounded-lg bg-gray-50 focus:border-[#52A32D] outline-none" /></div>
                    <div className="col-span-2"><label className="block text-xs font-bold mb-2">Deskripsi Produk</label><textarea rows="3" className="w-full border p-3 rounded-lg bg-gray-50 focus:border-[#52A32D] outline-none"></textarea></div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#52A32D] mb-4">Harga & Inventaris</h3>
                  <div className="grid grid-cols-3 gap-6">
                    <div><label className="block text-xs font-bold mb-2">Harga Jual</label><input type="text" className="w-full border p-3 rounded-lg bg-gray-50" /></div>
                    <div><label className="block text-xs font-bold mb-2">Stok Tersedia</label><input type="text" className="w-full border p-3 rounded-lg bg-gray-50" /></div>
                    <div><label className="block text-xs font-bold mb-2">Minimal Order</label><input type="text" className="w-full border p-3 rounded-lg bg-gray-50" /></div>
                  </div>
                </div>

                {/* Media Foto */}
                <div>
                  <h3 className="text-sm font-bold text-[#52A32D] mb-4">Media Foto</h3>
                  <div className="flex gap-4">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50">+</div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* FORM GLOBAL */}
            {marketType === "global" && (
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-bold text-[#52A32D] mb-4">Informasi Dasar (Ekspor)</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div><label className="block text-xs font-bold mb-2">Nama Produk</label><input type="text" className="w-full border p-3 rounded-lg bg-gray-50" /></div>
                    <div><label className="block text-xs font-bold mb-2">Aplikasi Utama (Usage)</label><input type="text" className="w-full border p-3 rounded-lg bg-gray-50" /></div>
                  </div>
                </div>

                <div>
                  <h3 className="text-sm font-bold text-[#52A32D] mb-4">Standar Ekspor (Lab Specifications)</h3>
                  <div className="grid grid-cols-2 gap-6">
                    <div><label className="block text-xs font-bold mb-2">Karbon (Fixed Carbon)</label><input type="text" className="w-full border p-3 rounded-lg bg-gray-50" /></div>
                    <div><label className="block text-xs font-bold mb-2">Kelembaban (Moisture)</label><input type="text" className="w-full border p-3 rounded-lg bg-gray-50" /></div>
                    <div><label className="block text-xs font-bold mb-2">Abu (Ash Content)</label><input type="text" className="w-full border p-3 rounded-lg bg-gray-50" /></div>
                    <div><label className="block text-xs font-bold mb-2">Waktu Bakar (Burning Time)</label><input type="text" className="w-full border p-3 rounded-lg bg-gray-50" /></div>
                  </div>
                </div>

                 {/* Media Foto */}
                 <div>
                  <h3 className="text-sm font-bold text-[#52A32D] mb-4">Media Foto</h3>
                  <div className="flex gap-4">
                    {[1,2,3,4].map(i => (
                      <div key={i} className="w-24 h-24 border-2 border-dashed border-gray-300 rounded-lg flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-50">+</div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Tombol Action Bawah */}
            <div className="mt-10 flex justify-end gap-4 border-t border-gray-100 pt-6">
              <button onClick={() => setView("list")} className="px-6 py-3 font-bold text-gray-500 hover:bg-gray-100 rounded-lg transition">Batal</button>
              <button onClick={() => setView("list")} className="px-8 py-3 font-bold text-white bg-[#52A32D] hover:bg-green-700 rounded-lg transition shadow-md">Simpan Produk</button>
            </div>
          </div>
        )}

        {/* ================= OVERLAY MODALS ================= */}
        {modalType && (
          <div className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center">
            
            {/* Modal Delete */}
            {modalType === "delete" && (
              <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-sm w-full animate-fade-in">
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">Sure delete?</h3>
                <p className="text-sm text-gray-500 mb-8">Will be deleted forever</p>
                <div className="flex gap-4 justify-center">
                  <button onClick={() => setModalType(null)} className="flex-1 bg-white border-2 border-gray-200 text-gray-600 font-bold py-3 rounded-xl hover:bg-gray-50">YES</button>
                  <button onClick={handleConfirmDelete} className="flex-1 bg-red-600 text-white font-bold py-3 rounded-xl hover:bg-red-700 shadow-md">NO</button>
                </div>
              </div>
            )}

            {/* Modal Success */}
            {modalType === "success" && (
              <div className="bg-white p-8 rounded-2xl shadow-2xl text-center max-w-xs w-full animate-fade-in flex flex-col items-center">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mb-4">
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path></svg>
                </div>
                <h3 className="text-lg font-extrabold text-[#52A32D]">SUCCESS</h3>
                <p className="text-xs text-gray-500 mt-1">Has been deleted</p>
              </div>
            )}

          </div>
        )}

      </main>
      
      {/* Animasi Transisi */}
      <style jsx>{`
        .animate-fade-in { animation: fadeIn 0.3s ease-in-out; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}