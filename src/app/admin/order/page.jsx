"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminOrder() {
  const router = useRouter();

  // 1. STATE MANAGEMENT UTAMA
  const [activeMenu, setActiveMenu] = useState("Order");
  const [marketType, setMarketType] = useState("lokal"); // 'lokal' atau 'global'
  const [view, setView] = useState("list"); // 'list' atau 'detail'
  const [selectedOrder, setSelectedOrder] = useState(null);

  // State untuk Tab Filter
  const [tabLokal, setTabLokal] = useState("Semua");
  const [tabGlobal, setTabGlobal] = useState("Semua");

  // 2. DUMMY DATA LOKAL (B2C)
  const dummyLokal = [
    { id: "K0D3P354N4N", date: "25 Juni 2026", buyer: "Budi Santoso", status: "Belum Bayar", total: "Rp. 900.000" },
    { id: "K0D3P354N4M", date: "25 Juni 2026", buyer: "Rina Kurnia", status: "Perlu Diproses", total: "Rp. 450.000" },
    { id: "K0D3P354N4L", date: "24 Juni 2026", buyer: "Hendra W.", status: "Selesai", total: "Rp. 1.200.000" },
  ];

  // 3. DUMMY DATA GLOBAL (B2B)
  const dummyGlobal = [
    { id: "QT-00118", date: "25 Juni 2026", company: "Tasty Grills LLC", status: "Quotation Masuk", total: "$ 21,174" },
    { id: "KDD3P354N4AN", date: "20 Juni 2026", company: "Al Noor Trading", status: "DP Confirmed", total: "$ 50,500" },
    { id: "KDD3P354N4AM", date: "15 Juni 2026", company: "Osaka BBQ", status: "In Production", total: "$ 18,200" },
  ];

  // Fungsi Badge Warna
  const getBadgeColor = (status) => {
    if (status.includes("Belum") || status.includes("Quotation")) return "bg-red-100 text-red-600";
    if (status.includes("Perlu") || status.includes("Production")) return "bg-yellow-100 text-yellow-700";
    if (status.includes("DP Confirmed") || status.includes("Selesai") || status.includes("Shipped")) return "bg-green-100 text-green-700";
    return "bg-gray-100 text-gray-700";
  };

  // Handler Buka Detail
  const handleOpenDetail = (order) => {
    setSelectedOrder(order);
    setView("detail");
  };

  return (
    <div className="min-h-screen flex bg-[#F9F9F9] font-sans text-gray-800">
      
      {/* ================= SIDEBAR (Sama seperti Produk & Dashboard) ================= */}
      <aside className="w-64 bg-[#8A9A7B] text-white flex flex-col hidden md:flex fixed h-full z-20">
        <div className="p-8 pb-4">
          <div className="w-16 h-16 bg-gray-300 rounded-full mb-4"></div>
          <h2 className="text-xl font-extrabold leading-tight">Arang Briket</h2>
          <p className="text-xs text-gray-200 mt-1">Time to pack some orders!</p>
        </div>
        
        <nav className="flex-1 px-4 mt-6 space-y-8">
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
          <div>
            <p className="text-xs font-bold text-gray-200 mb-4 px-4 uppercase tracking-wider">Other</p>
            <ul>
              <li>
                <button onClick={() => router.push("/admin/login")} className="w-full flex flex-row items-center gap-3 px-4 py-3 rounded-lg text-sm font-bold text-white hover:bg-white/10 transition-colors text-left">
                  <div className="shrink-0 flex items-center justify-center">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1"></path></svg>
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
        
        {/* HEADER */}
        <header className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
          <div>
            {view === "list" ? (
              <h1 className="text-2xl font-extrabold text-gray-800">Order</h1>
            ) : (
              <div className="flex items-center gap-4">
                <button onClick={() => setView("list")} className="flex items-center gap-2 text-sm font-bold border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition">
                  ← Kembali
                </button>
                <div>
                  <h1 className="text-xl font-extrabold text-gray-800">{selectedOrder?.id}</h1>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${getBadgeColor(selectedOrder?.status)}`}>{selectedOrder?.status}</span>
                </div>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-6">
            {/* Toggle Lokal | Global */}
            <div className="flex items-center gap-2 text-sm font-bold">
              <button onClick={() => { setMarketType("lokal"); setView("list"); }} className={marketType === "lokal" ? "text-[#52A32D]" : "text-gray-400 hover:text-gray-600"}>Lokal</button>
              <span className="text-gray-300">|</span>
              <button onClick={() => { setMarketType("global"); setView("list"); }} className={marketType === "global" ? "text-[#52A32D]" : "text-gray-400 hover:text-gray-600"}>Global</button>
            </div>
            {/* User Pill */}
            <div className="bg-[#52A32D] text-white px-4 py-2 rounded-full flex items-center gap-3 shadow-sm cursor-pointer">
              <span className="text-sm font-bold">Nama User</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
            </div>
          </div>
        </header>

        {/* ================= VIEW: LIST PESANAN ================= */}
        {view === "list" && (
          <div className="animate-fade-in">
            {/* Search Bar & Tabs */}
            <div className="mb-6 space-y-4">
              <input type="text" placeholder="Search..." className="w-full max-w-md border border-gray-300 rounded-lg p-3 outline-none focus:border-[#52A32D]" />
              
              <div className="flex gap-6 text-sm font-bold text-gray-500 border-b border-gray-200 pb-2 overflow-x-auto hide-scrollbar">
                {marketType === "lokal" 
                  ? ["Semua", "Belum Bayar", "Perlu Diproses", "Sedang Dikirim", "Selesai"].map(tab => (
                      <button key={tab} onClick={() => setTabLokal(tab)} className={`${tabLokal === tab ? "text-[#52A32D] border-b-2 border-[#52A32D] pb-2 -mb-[9px]" : "hover:text-gray-800 whitespace-nowrap"}`}>{tab}</button>
                    ))
                  : ["Semua", "Quotation Masuk", "DP Confirmed", "In Production", "Ready to Ship", "Shipped"].map(tab => (
                      <button key={tab} onClick={() => setTabGlobal(tab)} className={`${tabGlobal === tab ? "text-[#52A32D] border-b-2 border-[#52A32D] pb-2 -mb-[9px]" : "hover:text-gray-800 whitespace-nowrap"}`}>{tab}</button>
                    ))
                }
              </div>
            </div>

            {/* Tabel */}
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#52A32D] text-white">
                    <th className="py-4 px-6 font-bold text-xs uppercase">ID Pesanan</th>
                    <th className="py-4 px-6 font-bold text-xs uppercase">Tanggal & Waktu</th>
                    <th className="py-4 px-6 font-bold text-xs uppercase">{marketType === "lokal" ? "Pembeli" : "Perusahaan"}</th>
                    <th className="py-4 px-6 font-bold text-xs uppercase">Status</th>
                    <th className="py-4 px-6 font-bold text-xs uppercase">Total</th>
                    <th className="py-4 px-6 font-bold text-xs uppercase text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {(marketType === "lokal" ? dummyLokal : dummyGlobal).map((order, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="py-4 px-6 text-sm font-bold text-gray-800">{order.id}</td>
                      <td className="py-4 px-6 text-sm text-gray-600">{order.date}</td>
                      <td className="py-4 px-6 text-sm font-semibold">{marketType === "lokal" ? order.buyer : order.company}</td>
                      <td className="py-4 px-6"><span className={`px-3 py-1 rounded text-xs font-bold ${getBadgeColor(order.status)}`}>{order.status}</span></td>
                      <td className="py-4 px-6 text-sm font-bold text-gray-800">{order.total}</td>
                      <td className="py-4 px-6 flex justify-center gap-2">
                        <button onClick={() => handleOpenDetail(order)} className="p-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-lg transition">👁️</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= VIEW: DETAIL PESANAN LOKAL ================= */}
        {view === "detail" && marketType === "lokal" && (
          <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-6">
            
            {/* Kiri: Info Produk & Pengiriman */}
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-100 p-6 rounded-xl">
                <h3 className="text-[#52A32D] font-bold mb-4">Produk Dipesan</h3>
                <div className="flex justify-between items-center bg-white p-3 rounded-lg border border-gray-200 mb-4">
                  <div className="flex gap-3 items-center">
                    <div className="w-10 h-10 bg-gray-200 rounded"></div>
                    <div><p className="font-bold text-sm">Sawdust Charcoal</p><p className="text-xs text-gray-500">SC - 1KG</p></div>
                  </div>
                  <span className="font-bold">Rp. 70.000</span>
                </div>
                <div className="text-sm space-y-2 border-t border-green-200 pt-4">
                  <div className="flex justify-between"><span>Total Produk</span><span>Rp. 140.000</span></div>
                  <div className="flex justify-between"><span>Biaya Pengiriman</span><span>Rp. 20.000</span></div>
                  <div className="flex justify-between font-extrabold text-gray-900 pt-2 border-t border-green-200"><span>Total</span><span>Rp. 160.000</span></div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm">
                <h3 className="text-[#52A32D] font-bold mb-4">Alamat Pengiriman</h3>
                <div className="text-sm space-y-2 text-gray-600">
                  <div className="grid grid-cols-3"><span className="font-medium">Penerima</span><span>Rina Kurnia</span></div>
                  <div className="grid grid-cols-3"><span className="font-medium">Telepon</span><span>+62812...</span></div>
                  <div className="grid grid-cols-3"><span className="font-medium">Alamat</span><span className="col-span-2">Jl Sudirman No.12, Jakarta</span></div>
                </div>
              </div>
            </div>

            {/* Kanan: Riwayat & Update Status */}
            <div className="space-y-6">
              <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm">
                <h3 className="text-[#52A32D] font-bold mb-4">Update Status</h3>
                <div className="space-y-3 mb-6">
                  <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer bg-gray-50">
                    <input type="radio" name="status" className="text-[#52A32D] w-4 h-4" defaultChecked={selectedOrder?.status === "Perlu Diproses"} />
                    <span className="font-bold text-sm">Sedang Dikemas</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border rounded-lg cursor-pointer hover:bg-gray-50">
                    <input type="radio" name="status" className="text-[#52A32D] w-4 h-4" />
                    <span className="font-bold text-sm">Dikirim (Input Resi)</span>
                  </label>
                </div>
                <button className="w-full bg-[#52A32D] text-white font-bold py-3 rounded-lg hover:bg-green-700 transition">Simpan Perubahan</button>
              </div>
            </div>

          </div>
        )}

        {/* ================= VIEW: DETAIL PESANAN GLOBAL (QUOTATION) ================= */}
        {view === "detail" && marketType === "global" && selectedOrder?.status === "Quotation Masuk" && (
          <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm">
               <h3 className="text-[#52A32D] font-bold mb-4">Produk Dipesan (Request)</h3>
               <div className="border border-gray-200 rounded-lg p-4 mb-6 bg-gray-50">
                  <div className="flex justify-between font-bold text-sm mb-1"><span>Premium Shisha</span><span>$ 1,200 / ton</span></div>
                  <div className="text-xs text-gray-500">Estimasi: 5 Ton</div>
               </div>
               <h3 className="text-[#52A32D] font-bold mb-4">Pesan Tambahan</h3>
               <p className="text-sm text-gray-600 italic bg-gray-50 p-4 rounded-lg">&quot; Kami tertarik untuk kerja sama jangka panjang. Mohon info harga terbaik untuk kapasitas 5 ton.&quot;</p>
            </div>

            <div className="bg-green-50 p-6 rounded-xl border border-green-100">
               <h3 className="text-[#52A32D] font-bold mb-6">Beri Harga Penawaran (Product Review)</h3>
               <div className="space-y-4">
                 <div className="grid grid-cols-2 gap-4">
                   <div><label className="text-xs font-bold">Harga Final (/Ton)</label><input type="text" placeholder="e.g 1150" className="w-full mt-1 p-3 rounded-lg border outline-none" /></div>
                   <div><label className="text-xs font-bold">Qty (Ton) Disetujui</label><input type="text" placeholder="e.g 5" className="w-full mt-1 p-3 rounded-lg border outline-none" /></div>
                 </div>
                 <div><label className="text-xs font-bold">Biaya Pengiriman (Ocean Freight)</label><input type="text" placeholder="$ 1500" className="w-full mt-1 p-3 rounded-lg border outline-none" /></div>
                 <div><label className="text-xs font-bold">Asuransi & Bank Transfer Fee</label><input type="text" placeholder="$ 100" className="w-full mt-1 p-3 rounded-lg border outline-none" /></div>
                 <div><label className="text-xs font-bold">Syarat DP (%)</label><input type="text" defaultValue="50%" className="w-full mt-1 p-3 rounded-lg border outline-none" /></div>
                 
                 <div className="flex justify-end gap-4 mt-6">
                    <button onClick={() => setView("list")} className="px-6 py-3 font-bold text-gray-500 hover:bg-gray-100 rounded-lg">Batal</button>
                    <button className="px-8 py-3 bg-[#52A32D] text-white font-bold rounded-lg hover:bg-green-700 shadow-md">Kirim Penawaran</button>
                 </div>
               </div>
            </div>
          </div>
        )}

        {/* ================= VIEW: DETAIL PESANAN GLOBAL (IN PRODUCTION / DP CONFIRMED) ================= */}
        {view === "detail" && marketType === "global" && selectedOrder?.status !== "Quotation Masuk" && (
          <div className="animate-fade-in space-y-8">
            
            {/* Progress Tracker Horizontal */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 flex justify-between items-center text-center">
              {["DP Confirmed", "In Production", "Ready to Ship", "Shipped", "Completed"].map((step, i) => (
                <div key={step} className="flex-1 relative">
                  <div className={`w-8 h-8 mx-auto rounded-full flex items-center justify-center text-xs font-bold border-2 z-10 relative bg-white ${i <= 1 ? "border-[#52A32D] text-[#52A32D]" : "border-gray-300 text-gray-300"}`}>
                    {i < 1 ? "✓" : i + 1}
                  </div>
                  <div className="text-xs font-bold mt-2 text-gray-600">{step}</div>
                  {i < 4 && <div className={`absolute top-4 left-1/2 w-full h-[2px] ${i < 1 ? "bg-[#52A32D]" : "bg-gray-200"}`}></div>}
                </div>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Kiri: Dokumen Sertifikasi Ekspor */}
              <div className="bg-white p-6 rounded-xl border border-gray-100 shadow-sm space-y-4">
                 <h3 className="text-[#52A32D] font-bold mb-4">Dokumen Sertifikasi Produk</h3>
                 {["MSDS (Material Safety Data Sheet)", "COA (Certificate of Analysis)", "Phytosanitary Certificate"].map(doc => (
                   <div key={doc} className="flex justify-between items-center p-3 border rounded-lg bg-gray-50">
                     <span className="text-sm font-semibold">{doc}</span>
                     <button className="text-xs font-bold text-blue-600 hover:underline">Unggah</button>
                   </div>
                 ))}
                 
                 <h3 className="text-[#52A32D] font-bold mb-4 mt-8">Foto Produksi</h3>
                 <div className="flex gap-4">
                   {[1,2,3,4].map(i => <div key={i} className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center text-gray-400 cursor-pointer hover:bg-gray-300">+</div>)}
                 </div>
              </div>

              {/* Kanan: Update Status B2B */}
              <div className="bg-green-50 p-6 rounded-xl border border-green-100 h-fit">
                <h3 className="text-[#52A32D] font-bold mb-4">Update Status Produk</h3>
                <div className="space-y-3 mb-6">
                  <label className="flex items-center gap-3 p-3 border border-green-200 rounded-lg cursor-pointer bg-white">
                    <input type="radio" name="g_status" className="text-[#52A32D] w-4 h-4" defaultChecked />
                    <span className="font-bold text-sm">In Production</span>
                  </label>
                  <label className="flex items-center gap-3 p-3 border border-gray-200 rounded-lg cursor-pointer bg-white opacity-50">
                    <input type="radio" name="g_status" className="text-[#52A32D] w-4 h-4" disabled />
                    <span className="font-bold text-sm">Ready to Ship (Upload BL/Invoice dulu)</span>
                  </label>
                </div>
                <button className="w-full bg-[#52A32D] text-white font-bold py-3 rounded-lg hover:bg-green-700 transition">Simpan Progress</button>
              </div>
            </div>
          </div>
        )}

      </main>
      
      <style jsx>{`
        .animate-fade-in { animation: fadeIn 0.3s ease-in-out; }
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        @keyframes fadeIn { from { opacity: 0; transform: translateY(5px); } to { opacity: 1; transform: translateY(0); } }
      `}</style>
    </div>
  );
}