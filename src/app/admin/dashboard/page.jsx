"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function AdminDashboard() {
  const router = useRouter();
  
  // State dummy untuk menu yang sedang aktif
  const [activeMenu, setActiveMenu] = useState("Dashboard");

  // Data dummy tabel pesanan sesuai desain
  const latestOrders = [
    { id: 1, customer: "Budi Santoso", product: "Premium Shisha 3kg x 2", total: "Rp. 600.000", status: "Menunggu" },
    { id: 2, customer: "Rina Kurnia", product: "Premium BBQ 2kg", total: "Rp. 200.000", status: "Diproses" },
    { id: 3, customer: "Hendra W.", product: "Sawdust Charcoal 2kg x 5", total: "Rp. 500.000", status: "Selesai" },
    { id: 4, customer: "Rahma Sani", product: "Hardwood Charcoal 5kg", total: "Rp. 500.000", status: "Diproses" },
    { id: 5, customer: "Agata Rani", product: "Quick-Glow Shisha 7kg", total: "Rp. 700.000", status: "Menunggu" },
  ];

  // Fungsi untuk warna badge status
  const getStatusBadge = (status) => {
    switch (status) {
      case "Menunggu":
        return "bg-yellow-100 text-yellow-700";
      case "Diproses":
        return "bg-green-100 text-green-700";
      case "Selesai":
        return "bg-blue-100 text-blue-700";
      default:
        return "bg-gray-100 text-gray-700";
    }
  };

  const handleLogout = () => {
    router.push("/admin/login");
  };

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
      <main className="flex-1 ml-0 md:ml-64 p-8 md:p-12">
        
        {/* Header */}
        <header className="flex justify-between items-center mb-10">
          <h1 className="text-2xl font-extrabold text-gray-800">Dashboard</h1>
          {/* User Pill */}
          <div className="bg-[#52A32D] text-white px-4 py-2 rounded-full flex items-center gap-3 shadow-sm cursor-pointer">
            <div className="w-6 h-6 bg-white/30 rounded-full flex items-center justify-center text-xs font-bold">NM</div>
            <span className="text-sm font-bold">Nama User</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
          </div>
        </header>

        {/* Greeting Section */}
        <div className="mb-10">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-2">Welcome, Mr. Budi</h2>
          <p className="text-gray-500 font-medium">Today there are <span className="font-bold text-[#52A32D]">5 orders</span> waiting for your action</p>
        </div>

        {/* 3 Main Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Card 1: Order */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-md transition">
            <svg className="w-12 h-12 text-[#52A32D] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"></path></svg>
            <h3 className="font-extrabold text-lg text-gray-900">Order</h3>
            <p className="text-xs text-gray-500 font-medium mt-1">Manage all orders</p>
          </div>

          {/* Card 2: Product (Warna Hijau Sesuai Desain) */}
          <div onClick={() => router.push("/admin/produk")} className="bg-[#52A32D] p-8 rounded-2xl shadow-md flex flex-col items-center justify-center text-center cursor-pointer transform hover:-translate-y-1 transition">
            <svg className="w-12 h-12 text-white mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
            <h3 className="font-extrabold text-lg text-white">Product</h3>
            <p className="text-xs text-white/80 font-medium mt-1">Add and edit products</p>
          </div>

          {/* Card 3: Payment */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 flex flex-col items-center justify-center text-center cursor-pointer hover:shadow-md transition">
            <svg className="w-12 h-12 text-[#52A32D] mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"></path></svg>
            <h3 className="font-extrabold text-lg text-gray-900">Payment</h3>
            <p className="text-xs text-gray-500 font-medium mt-1">Transaction history</p>
          </div>
        </div>

        {/* Latest Orders Table */}
        <div>
          <h3 className="text-xl font-extrabold text-gray-900 mb-6">Latest Orders</h3>
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-[#52A32D] text-white">
                    <th className="py-4 px-6 font-bold text-sm uppercase tracking-wider">Pelanggan</th>
                    <th className="py-4 px-6 font-bold text-sm uppercase tracking-wider">Produk</th>
                    <th className="py-4 px-6 font-bold text-sm uppercase tracking-wider">Total</th>
                    <th className="py-4 px-6 font-bold text-sm uppercase tracking-wider text-center">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {latestOrders.map((order) => (
                    <tr key={order.id} className="hover:bg-gray-50 transition-colors">
                      <td className="py-5 px-6 text-sm font-semibold text-gray-800">{order.customer}</td>
                      <td className="py-5 px-6 text-sm text-gray-600">{order.product}</td>
                      <td className="py-5 px-6 text-sm font-semibold text-gray-800">{order.total}</td>
                      <td className="py-5 px-6 text-center">
                        <span className={`inline-block px-3 py-1 rounded-full text-xs font-bold ${getStatusBadge(order.status)}`}>
                          {order.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

      </main>
    </div>
  );
}