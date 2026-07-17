"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminPembayaran() {
  const router = useRouter();

  // 1. STATE MANAGEMENT
  const [activeMenu, setActiveMenu] = useState("Payment");
  const [marketType, setMarketType] = useState("lokal"); // 'lokal' atau 'global'
  const [view, setView] = useState("list"); // 'list' atau 'detail'
  const [selectedPayment, setSelectedPayment] = useState(null);
  const [activeTab, setActiveTab] = useState("Semua Transaksi");

  // 2. DUMMY DATA LOKAL (B2C)
  const dummyLokal = [
    { id: "PAY-00041", orderId: "#ORD-0041", date: "25 Juni 2026, 14.53 WIB", buyer: "Rina", method: "QRIS", status: "Belum Lunas", nominal: "Rp 160.000", qrisCode: "UNIQU3C0D3" },
    { id: "PAY-00040", orderId: "#ORD-0040", date: "25 Juni 2026, 10.15 WIB", buyer: "Budi Santoso", method: "VA - BCA", status: "Belum Lunas", nominal: "Rp 819.000", vaNumber: "12345678901234" },
    { id: "PAY-00039", orderId: "#ORD-0039", date: "24 Juni 2026, 16.30 WIB", buyer: "Hendra W.", method: "E-Wallet - GoPay", status: "Lunas", nominal: "Rp 819.000", ewalletCode: "5RV1C3K0D3" },
    { id: "PAY-00038", orderId: "#ORD-0038", date: "23 Juni 2026, 09.00 WIB", buyer: "Agata Rani", method: "QRIS", status: "Kedaluwarsa", nominal: "Rp 50.000", qrisCode: "-" },
  ];

  // 3. DUMMY DATA GLOBAL (B2B)
  const dummyGlobal = [
    { id: "PAY-G-00021", quoteId: "UNIQU3C0D3", date: "06 Juli 2026", company: "Tasty Grills LLC", method: "Bank Transfer", status: "Menunggu Verifikasi (DP)", totalOrder: "$ 21,174", paidAmount: "$ 10,587" },
    { id: "PAY-G-00020", quoteId: "UNIQU3C0D2", date: "28 Juni 2026", company: "Al Noor Trading", method: "Bank Transfer", status: "Lunas", totalOrder: "$ 50,500", paidAmount: "$ 50,500" },
  ];

  // Handler Warna Status
  const getBadgeColor = (status) => {
    if (status.includes("Belum") || status.includes("Menunggu")) return "bg-red-100 text-red-600";
    if (status.includes("Lunas") && !status.includes("Belum")) return "bg-green-100 text-green-700";
    if (status.includes("Kedaluwarsa")) return "bg-gray-100 text-gray-500";
    return "bg-yellow-100 text-yellow-700";
  };

  const handleOpenDetail = (payment) => {
    setSelectedPayment(payment);
    setView("detail");
  };
 // Logika Filter Data Payment
  const filteredPayments = (marketType === "lokal" ? dummyLokal : dummyGlobal).filter((pay) => {
    if (activeTab === "Semua Transaksi") return true;
    // Khusus global, anggap 'Menunggu Verifikasi' masuk kategori 'Belum Lunas'
    if (activeTab === "Belum Lunas" && pay.status.includes("Menunggu")) return true;
    return pay.status === activeTab;
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
                      <div className="w-5 h-5 bg-current rounded-sm opacity-50"></div>
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
                  <div className="shrink-0 flex items-center justify-center"><div className="w-5 h-5 bg-current rounded-sm opacity-50"></div></div>
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
              <h1 className="text-2xl font-extrabold text-gray-800">Payment</h1>
            ) : (
              <div className="flex items-center gap-4">
                <button onClick={() => setView("list")} className="flex items-center gap-2 text-sm font-bold border border-gray-300 px-4 py-2 rounded-lg hover:bg-gray-50 transition">← Kembali</button>
                <div>
                  <h1 className="text-xl font-extrabold text-gray-800">{selectedPayment?.id}</h1>
                  <span className={`text-[10px] font-bold px-2 py-1 rounded-full ${getBadgeColor(selectedPayment?.status)}`}>{selectedPayment?.status}</span>
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 text-sm font-bold">
              <button onClick={() => { setMarketType("lokal"); setView("list"); }} className={marketType === "lokal" ? "text-[#52A32D]" : "text-gray-400 hover:text-gray-600"}>Lokal</button>
              <span className="text-gray-300">|</span>
              <button onClick={() => { setMarketType("global"); setView("list"); }} className={marketType === "global" ? "text-[#52A32D]" : "text-gray-400 hover:text-gray-600"}>Global</button>
            </div>
            <div className="bg-[#52A32D] text-white px-4 py-2 rounded-full flex items-center gap-3 shadow-sm cursor-pointer">
              <span className="text-sm font-bold">Nama User</span>
            </div>
          </div>
        </header>

        {/* ================= LIST VIEW ================= */}
        {view === "list" && (
          <div className="animate-fade-in">
            <div className="mb-6 space-y-4">
              <div className="flex justify-between items-center">
                <input type="text" placeholder="Search..." className="w-full max-w-md border border-gray-300 rounded-lg p-3 outline-none focus:border-[#52A32D]" />
                <button className="bg-[#52A32D] text-white px-4 py-3 rounded-lg text-sm font-bold shadow-sm">↓ Download</button>
              </div>
              
              <div className="flex gap-6 text-sm font-bold text-gray-500 border-b border-gray-200 pb-2 overflow-x-auto hide-scrollbar">
                {["Semua Transaksi", "Lunas", "Belum Lunas", "Kedaluwarsa"].map(tab => (
                   <button key={tab} onClick={() => setActiveTab(tab)} className={`${activeTab === tab ? "text-[#52A32D] border-b-2 border-[#52A32D] pb-2 -mb-[9px]" : "hover:text-gray-800"}`}>{tab}</button>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#52A32D] text-white">
                    <th className="py-4 px-6 font-bold text-xs uppercase">ID Pembayaran</th>
                    <th className="py-4 px-6 font-bold text-xs uppercase">Tanggal & Waktu</th>
                    <th className="py-4 px-6 font-bold text-xs uppercase">{marketType === "lokal" ? "Metode" : "Perusahaan"}</th>
                    <th className="py-4 px-6 font-bold text-xs uppercase">Status</th>
                    <th className="py-4 px-6 font-bold text-xs uppercase">Nominal</th>
                    <th className="py-4 px-6 font-bold text-xs uppercase text-center">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {filteredPayments.map((pay, idx) => (
                    <tr key={idx} className="hover:bg-gray-50">
                      <td className="py-4 px-6 text-sm font-bold text-gray-800">{pay.id}<br/><span className="text-xs font-normal text-gray-500">{marketType === "lokal" ? `Pesanan: ${pay.orderId}` : `Quote: ${pay.quoteId}`}</span></td>
                      <td className="py-4 px-6 text-sm text-gray-600">{pay.date}</td>
                      <td className="py-4 px-6 text-sm font-semibold">{marketType === "lokal" ? pay.method : pay.company}</td>
                      <td className="py-4 px-6"><span className={`px-3 py-1 rounded text-[10px] font-bold ${getBadgeColor(pay.status)}`}>{pay.status}</span></td>
                      <td className="py-4 px-6 text-sm font-bold text-gray-800">{marketType === "lokal" ? pay.nominal : pay.paidAmount}</td>
                      <td className="py-4 px-6 flex justify-center">
                        <button onClick={() => handleOpenDetail(pay)} className="p-2 bg-gray-100 text-gray-600 hover:bg-gray-200 rounded-lg transition">👁️</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* ================= DETAIL VIEW LOKAL (B2C) ================= */}
        {view === "detail" && marketType === "lokal" && (
          <div className="animate-fade-in grid grid-cols-1 lg:grid-cols-2 gap-8">
            
            {/* Kiri: Ringkasan Tagihan & Info Pembeli */}
            <div className="space-y-6">
              <div className="bg-white border border-green-100 p-6 rounded-xl shadow-sm border-t-4 border-t-[#52A32D]">
                <h3 className="text-[#52A32D] font-bold mb-4">Ringkasan Tagihan</h3>
                <div className="space-y-3 mb-4">
                  <div className="flex gap-3 p-3 bg-gray-50 rounded-lg border border-gray-100">
                    <div className="w-10 h-10 bg-gray-200 rounded"></div>
                    <div className="flex-1"><p className="font-bold text-sm">Sawdust Charcoal</p><p className="text-xs text-gray-500">SC - 1KG</p></div>
                    <span className="font-bold text-sm">Rp 70.000</span>
                  </div>
                </div>
                <div className="text-sm space-y-2 border-t border-gray-200 pt-4">
                  <div className="flex justify-between"><span>Total Produk</span><span>Rp 140.000</span></div>
                  <div className="flex justify-between"><span>Biaya Pengiriman</span><span>Rp 20.000</span></div>
                  <div className="flex justify-between"><span>Metode Pembayaran</span><span className="font-semibold">{selectedPayment?.method}</span></div>
                  <div className="flex justify-between font-extrabold text-red-600 pt-2 border-t border-gray-200 text-lg"><span>Total</span><span>{selectedPayment?.nominal}</span></div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm">
                <h3 className="text-[#52A32D] font-bold mb-4">Informasi Pembeli</h3>
                <div className="grid grid-cols-3 gap-y-3 text-sm text-gray-600">
                  <span className="font-medium">Nama</span><span className="col-span-2">{selectedPayment?.buyer}</span>
                  <span className="font-medium">Pesanan</span><span className="col-span-2 font-bold">{selectedPayment?.orderId}</span>
                </div>
              </div>
            </div>

            {/* Kanan: Detail Pembayaran & Status Dinamis */}
            <div className="bg-white border border-green-100 p-8 rounded-xl shadow-sm h-fit">
              <h3 className="text-[#52A32D] font-bold mb-6 border-b border-gray-100 pb-4">Detail Pembayaran - {selectedPayment?.method}</h3>
              
              <div className="text-center space-y-4">
                {/* LOGIKA TAMPILAN BERDASARKAN METODE */}
                {selectedPayment?.method.includes("QRIS") && (
                  <div className="flex flex-col items-center">
                    <div className="w-48 h-48 bg-gray-100 border-2 border-dashed border-gray-300 rounded-xl mb-4 flex items-center justify-center">
                      <span className="text-gray-400 font-bold">QR CODE</span>
                    </div>
                    <p className="text-xs font-bold text-gray-500">Kode pembayaran:<br/><span className="text-xl text-gray-800">{selectedPayment?.qrisCode}</span></p>
                  </div>
                )}
                
                {selectedPayment?.method.includes("VA") && (
                  <div className="text-left space-y-4">
                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                      <p className="text-xs font-bold text-gray-500 mb-1">Nomor Virtual Account</p>
                      <p className="text-2xl font-extrabold text-gray-900 tracking-wider">{selectedPayment?.vaNumber}</p>
                    </div>
                    <div className="text-xs text-gray-600 space-y-2 pl-4 border-l-2 border-[#52A32D]">
                      <p>1. Buka aplikasi mobile banking.</p>
                      <p>2. Pilih menu Transfer &gt; Virtual Account.</p>
                      <p>3. Masukkan nomor di atas dan konfirmasi.</p>
                    </div>
                  </div>
                )}

                {selectedPayment?.method.includes("E-Wallet") && (
                  <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
                     <p className="text-xs font-bold text-gray-500 mb-2">Kode Pembayaran E-Wallet</p>
                     <p className="text-3xl font-extrabold text-red-600 tracking-widest">{selectedPayment?.ewalletCode}</p>
                     <p className="text-xs text-gray-400 mt-2">Menunggu konfirmasi dari aplikasi pembeli</p>
                  </div>
                )}

                {/* WARNING / STATUS */}
                <div className="mt-8 border-t border-gray-100 pt-6 text-left text-sm space-y-2">
                  <div className="flex justify-between"><span>Nominal</span><span className="font-bold">{selectedPayment?.nominal}</span></div>
                  {selectedPayment?.status === "Belum Lunas" && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-lg flex gap-3 mt-4 text-xs font-bold items-center border border-red-100">
                      <span>⚠️</span>
                      <p>Pembayaran belum dikonfirmasi.<br/>Pesanan tidak akan diproses hingga pembayaran selesai.</p>
                    </div>
                  )}
                  {selectedPayment?.status === "Lunas" && (
                    <div className="bg-green-50 text-green-700 p-4 rounded-lg flex gap-3 mt-4 text-xs font-bold items-center border border-green-100 justify-center text-center">
                      <span className="text-xl">✓</span>
                      <p>Pembayaran telah berhasil diverifikasi oleh sistem.</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}

        {/* ================= DETAIL VIEW GLOBAL (B2B - VERIFIKASI) ================= */}
        {view === "detail" && marketType === "global" && (
          <div className="animate-fade-in grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Kiri: Ringkasan Tagihan & Info B2B */}
            <div className="space-y-6">
              <div className="bg-white border border-green-100 p-6 rounded-xl shadow-sm">
                <h3 className="text-[#52A32D] font-bold mb-6">Ringkasan Tagihan (Quotation)</h3>
                <div className="text-sm space-y-3">
                  <div className="flex justify-between"><span>Total Order</span><span className="font-bold">{selectedPayment?.totalOrder}</span></div>
                  <div className="flex justify-between border-b border-gray-100 pb-3"><span>Status Pembayaran</span><span className="font-bold text-[#52A32D]">{selectedPayment?.status}</span></div>
                  <div className="flex justify-between font-extrabold text-gray-900 pt-2 text-lg"><span>Jumlah dibayarkan</span><span>{selectedPayment?.paidAmount}</span></div>
                </div>
              </div>

              <div className="bg-white border border-gray-100 p-6 rounded-xl shadow-sm">
                <h3 className="text-[#52A32D] font-bold mb-4">Informasi Pembayar</h3>
                <div className="grid grid-cols-2 gap-y-4 text-sm text-gray-600">
                  <span className="font-medium">Perusahaan</span><span className="font-bold text-gray-900">{selectedPayment?.company}</span>
                  <span className="font-medium">Quotation No.</span><span>{selectedPayment?.quoteId}</span>
                  <span className="font-medium">Tanggal Transfer</span><span>{selectedPayment?.date}</span>
                </div>
              </div>
            </div>

            {/* Kanan: Verifikasi Admin */}
            <div className="space-y-6">
              <div className="bg-[#52A32D] p-6 rounded-xl shadow-md text-white">
                <h3 className="font-bold mb-4 flex items-center justify-between">Bukti Transfer <span className="bg-white text-[#52A32D] text-[10px] px-2 py-1 rounded-full">3 file diunggah</span></h3>
                <div className="space-y-2">
                  {["bukti_transfer.pdf", "screenshot_banking.jpg", "konfirmasi_bank.png"].map((file, i) => (
                    <div key={i} className="flex justify-between items-center bg-white/10 p-3 rounded-lg border border-white/20">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-white/20 rounded flex items-center justify-center text-[10px] font-bold uppercase">{file.split('.')[1]}</div>
                        <div><p className="text-sm font-bold truncate w-32">{file}</p><p className="text-[10px] opacity-80">1.2 MB</p></div>
                      </div>
                      <button className="text-xs font-bold bg-white text-[#52A32D] px-3 py-1 rounded hover:bg-gray-100">Lihat</button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white border border-green-100 p-6 rounded-xl shadow-sm h-fit border-t-4 border-t-[#52A32D]">
                <h3 className="text-[#52A32D] font-bold mb-4">Verifikasi oleh Admin</h3>
                <div className="space-y-4 mb-6">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-4 h-4 accent-[#52A32D]" />
                    <span className="text-sm font-medium text-gray-700">Nominal sesuai dengan tagihan yang diminta ({selectedPayment?.paidAmount})</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-4 h-4 accent-[#52A32D]" />
                    <span className="text-sm font-medium text-gray-700">Tanggal transfer valid</span>
                  </label>
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input type="checkbox" className="mt-1 w-4 h-4 accent-[#52A32D]" />
                    <span className="text-sm font-medium text-gray-700">Bukti transfer terlihat jelas dan valid dari bank</span>
                  </label>
                </div>
                <button className="w-full bg-[#52A32D] text-white font-bold py-3 rounded-lg hover:bg-green-700 shadow-md transition">
                  {selectedPayment?.status.includes("DP") ? "Approve DP" : "Approve Pelunasan"}
                </button>
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