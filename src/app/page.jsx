"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import TopBanner from "../components/TopBanner";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function ProdukPage() {
  const router = useRouter();
  const [lang, setLang] = useState("id");
  const [isCartOpen, setIsCartOpen] = useState(false);
  
  // State untuk mengatur FAQ mana yang terbuka (null = tidak ada yang terbuka)
  const [openFaq, setOpenFaq] = useState(0); 

  const [cartItems, setCartItems] = useState([
    { id: 1, name: "Briket Arang Kayu", price: 25000, qty: 30 },
    { id: 2, name: "Briket Arang Bambu", price: 49000, qty: 1 }
  ]);

  const toggleLanguage = () => setLang(lang === "id" ? "en" : "id");
  const toggleCart = () => setIsCartOpen(!isCartOpen);

  // Toggle buka/tutup FAQ
  const handleFaqClick = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const t = {
    hero: { title: "Arang Premium untuk Setiap Kebutuhan", subtitle: "Temukan suplai arang briket berkualitas untuk kebutuhan kuliner, industri, dan ekspor.", btn: "Jelajahi Produk" },
    whyUs: "Mengapa Kami",
    productSub: "PRODUK KAMI",
    productTitle: "Arang Briket Berkualitas",
  };

  const totalPrice = cartItems.reduce((acc, item) => acc + (item.price * item.qty), 0);

  const otherProducts = [
    { id: 'serbuk', name: 'Briket Arang Serbuk', price: '12,000', tag: 'Warung, Industri Kecil', desc: 'Panas kuat dari limbah kayu industri. Efisien untuk kuliner skala menengah.' },
    { id: 'kayu', name: 'Briket Arang Kayu', price: '18,000', tag: 'Pemanggangan Rumahan', desc: 'Dari kayu padat yang dikompres. Bakar stabil dengan aroma alami khas.' },
    { id: 'bambu', name: 'Briket Arang Bambu', price: '49,000', tag: 'BBQ Kelas atas, Resto Asia', desc: 'Pembakaran bersih, kontrol suhu presisi, antimikroba alami. Standar restoran.' },
    { id: 'sekam', name: 'Briket Arang Sekam Padi', price: '9,000', tag: 'Biomassa, Industri Bata', desc: 'Dari limbah pertanian: sekam padi dan ampas tebu. Bahan bakar ramah lingkungan.' }
  ];

  // Data List FAQ sesuai desain
  const faqs = [
    {
      q: "Bagaimana cara menyalakan briket yang benar?",
      a: "Susun briket dalam bentuk piramida atau gunakan chimney starter. Beri sedikit pemantik/fire starter di bagian bawah, lalu nyalakan. Tunggu hingga briket berubah warna abu-abu (sekitar 15-20 menit) sebelum digunakan untuk memasak, menandakan suhu sudah stabil dan siap pakai."
    },
    {
      q: "Berapa lama briket bisa disimpan?",
      a: "Briket dapat disimpan hingga 2-3 tahun asalkan diletakkan di tempat yang kering, kedap udara, dan tidak terkena kelembapan langsung."
    },
    {
      q: "Apa perbedaan briket dengan arang kayu biasa?",
      a: "Briket memiliki panas yang lebih konsisten, durasi bakar lebih lama, tidak berasap pekat, dan abu yang dihasilkan jauh lebih sedikit dibandingkan arang kayu biasa."
    },
    {
      q: "Apa yang terjadi jika produk rusak atau basah saat sampai?",
      a: "Kami memberikan garansi pengiriman. Silakan hubungi tim support kami dengan melampirkan video unboxing, dan kami akan memproses pergantian barang."
    },
    {
      q: "Apakah ada harga khusus untuk pembelian grosir?",
      a: "Tentu saja! Kami menyediakan potongan harga spesial untuk pembelian skala besar atau mitra B2B (restoran/industri). Silakan hubungi kontak kami untuk penawaran."
    },
    {
      q: "Apa saja opsi pengiriman yang tersedia?",
      a: "Kami menduku pengiriman via darat dan laut untuk skala besar, serta kargo dan ekspedisi reguler (JNE, Paxel, Pos) untuk pembelian eceran."
    }
  ];

  return (
    <div className="min-h-screen bg-[#F9F9F9] font-sans text-gray-800 relative overflow-hidden">
      <TopBanner lang={lang} toggleLanguage={toggleLanguage} />
      <Navbar lang={lang} onCartClick={toggleCart} />

      {/* 1. HERO SECTION */}
      <section id="hero" className="relative h-[60vh] flex items-center justify-center text-center px-4">
        
        {/* Background Image Asli */}
        <div className="absolute inset-0 z-0 bg-gray-900">
          <img 
            src="/hero.png" 
            alt="Arang Briket Premium" 
            className="w-full h-full object-cover opacity-60" 
          />
        </div>

        {/* Konten Teks */}
        <div className="relative z-10 max-w-4xl text-white">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-4">{t.hero.title}</h1>
          <p className="text-lg md:text-xl text-gray-200 mb-8 px-8">{t.hero.subtitle}</p>
          <Link href="#produk">
            <button className="bg-white text-gray-900 font-bold py-3 px-8 rounded-full hover:bg-gray-100 transition shadow-lg cursor-pointer">
              {t.hero.btn}
            </button>
          </Link>
        </div>
      </section>

      <section className="max-w-7xl mx-auto py-16 px-8 text-center">
        <h2 className="text-3xl font-bold mb-12">{t.whyUs}</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center gap-4"><div className="w-16 h-16 rounded-full border-2 border-red-500 text-red-500 flex items-center justify-center font-bold text-xl">1</div><p className="text-sm font-semibold">Panas Tinggi & Stabil</p></div>
            <div className="flex flex-col items-center gap-4"><div className="w-16 h-16 rounded-full border-2 border-green-500 text-green-500 flex items-center justify-center font-bold text-xl">2</div><p className="text-sm font-semibold">Alami & Bebas Asap</p></div>
            <div className="flex flex-col items-center gap-4"><div className="w-16 h-16 rounded-full border-2 border-orange-800 text-orange-800 flex items-center justify-center font-bold text-xl">3</div><p className="text-sm font-semibold">Suplai Grosir</p></div>
            <div className="flex flex-col items-center gap-4"><div className="w-16 h-16 rounded-full border-2 border-yellow-500 text-yellow-500 flex items-center justify-center font-bold text-xl">4</div><p className="text-sm font-semibold">Standar Internasional</p></div>
        </div>
      </section>

      <section id="produk" className="max-w-7xl mx-auto py-12 px-8">
        <div className="text-center mb-12">
            <span className="text-[#4C9A2A] font-bold text-sm tracking-widest">{t.productSub}</span>
            <h2 className="text-3xl font-bold mt-2">{t.productTitle}</h2>
        </div>
        
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col md:flex-row gap-8 mb-8 relative group transition-all hover:shadow-md">
            <Link href="/produk/detail" className="absolute inset-0 z-10"></Link>
            <div className="w-full md:w-1/3 h-64 bg-gray-200 rounded-xl overflow-hidden">
                 <div className="w-full h-full bg-gray-800 group-hover:scale-105 transition-transform duration-300"></div>
            </div>
            <div className="w-full md:w-2/3 flex flex-col justify-center">
                <span className="bg-green-100 text-green-800 text-xs font-bold px-3 py-1 rounded-full w-max mb-4">BEST SELLER</span>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-[#4C9A2A] transition-colors">Briket Arang Batok (Tempurung) Kelapa</h3>
                <p className="text-gray-500 mb-6">Panas tinggi dengan waktu bakar hingga 2-3 jam, asap minimal. Pilihan utama untuk restoran BBQ, sate, angkringan maupun standar ekspor.</p>
                <div className="flex items-center gap-4 text-sm font-semibold text-gray-600 mb-8">
                    <span>🕒 2-3 jam</span>
                    <span>💨 Asap minimal</span>
                    <span className="text-[#4C9A2A]">BBQ, Sate, Shisha</span>
                </div>
                <div className="flex justify-between items-center mt-auto relative z-20">
                    <div className="text-2xl font-extrabold">Rp 25.000<span className="text-sm font-normal text-gray-500"> / kg</span></div>
                    <button onClick={toggleCart} className="bg-[#4C9A2A] hover:bg-green-700 text-white font-bold py-3 px-6 rounded-lg transition">
                        + Tambah ke Keranjang
                    </button>
                </div>
            </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
           {otherProducts.map((prod) => (
             <Link href="/produk/detail" key={prod.id} className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex flex-col group hover:shadow-md transition-shadow relative">
               <div className="relative h-40 bg-gray-200 overflow-hidden">
                  <div className="w-full h-full bg-gray-700 group-hover:scale-105 transition-transform duration-300"></div>
                  <div className="absolute top-2 left-2 bg-white text-gray-900 font-extrabold text-xs px-2 py-1 rounded-full shadow-sm z-10">Rp {prod.price} <span className="text-[10px] font-normal">/ Kg</span></div>
               </div>
               <div className="p-4 flex flex-col flex-1">
                 <h3 className="font-bold text-lg mb-1 leading-tight group-hover:text-[#4C9A2A] transition-colors">{prod.name}</h3>
                 <p className="text-xs text-gray-500 mb-4 line-clamp-3">{prod.desc}</p>
                 <div className="flex justify-between items-end mt-auto">
                   <span className="text-[10px] font-bold text-[#4C9A2A]">{prod.tag}</span>
                   <button className="bg-gray-100 p-2 rounded-lg hover:bg-gray-200 relative z-20" onClick={(e) => { e.preventDefault(); toggleCart(); }}>
                     <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path></svg>
                   </button>
                 </div>
               </div>
             </Link>
           ))}
        </div>
      </section>

      {/* 4. PROSES PRODUKSI (Dengan Gambar Full) */}
      <section id="proses" className="bg-white py-16 px-8 border-t border-gray-100">
         <div className="max-w-5xl mx-auto text-center mb-12">
            <span className="text-[#4C9A2A] font-bold text-sm tracking-widest">PROSES KAMI</span>
            <h2 className="text-3xl font-bold mt-2 mb-12">Bahan Baku Hingga Briket Siap Pakai</h2>
            
            {/* Tempat Gambar Proses Produksi */}
            <div className="w-full">
              <img 
                src="/produksi.png" 
                alt="Alur Proses Produksi Briket" 
                className="w-full h-auto object-contain"
              />
              {/* Pesan sementara jika gambar belum ada */}
            </div>
         </div>
      </section>

      {/* 5. BANTUAN / FAQ (Accordion Interaktif) */}
      <section id="bantuan" className="bg-[#F9F9F9] py-16 px-8 border-t border-gray-200 mb-12">
         <div className="max-w-3xl mx-auto">
             <div className="text-center mb-10">
                <span className="text-[#4C9A2A] font-bold text-sm tracking-widest">BANTUAN</span>
                <h2 className="text-3xl font-bold mt-2">Pertanyaan yang Sering Diajukan</h2>
             </div>
             
             {/* List Accordion FAQ */}
             <div className="space-y-4">
               {faqs.map((faq, index) => (
                 <div 
                   key={index} 
                   className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm transition-all"
                 >
                   {/* Pertanyaan yang bisa diklik */}
                   <button 
                     onClick={() => handleFaqClick(index)}
                     className="w-full text-left p-5 font-bold flex justify-between items-center text-gray-800 hover:bg-gray-50 focus:outline-none"
                   >
                     <span className="pr-4">{faq.q}</span>
                     
                     {/* Icon Panah Buka Tutup */}
                     <span className={`w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-300 ${openFaq === index ? 'bg-green-500 text-white rotate-180' : 'bg-gray-200 text-gray-400 rotate-0'}`}>
                       <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M19 9l-7 7-7-7"></path></svg>
                     </span>
                   </button>
                   
                   {/* Jawaban yang muncul saat diklik */}
                   <div 
                     className={`px-5 overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? 'max-h-40 pb-5 opacity-100' : 'max-h-0 opacity-0'}`}
                   >
                     <p className="text-gray-600 text-sm leading-relaxed pt-2 border-t border-gray-100">
                       {faq.a}
                     </p>
                   </div>
                 </div>
               ))}
             </div>
         </div>
      </section>

      {/* COMPONENT FOOTER */}
      <Footer />

      {/* CART DRAWER */}
      
      {/* 1. Perbaikan Overlay Hitam (Gunakan bg-black/60 dan sedikit efek blur) */}
      {isCartOpen && (
        <div 
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all" 
          onClick={toggleCart} 
        />
      )}

      <div className={`fixed top-0 right-0 h-full w-full md:w-96 bg-white z-50 shadow-2xl transform transition-transform duration-300 ease-in-out flex flex-col ${isCartOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        
        {/* Header Keranjang */}
        <div className="flex items-center gap-4 p-6 border-b border-gray-200">
            <button onClick={toggleCart} className="text-gray-500 hover:text-black">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7"></path>
                </svg>
            </button>
            <h2 className="font-bold tracking-wide text-gray-800 flex items-center gap-2">
              KERANJANG
            </h2>
        </div>

        {/* List Item Keranjang */}
        <div className="flex-1 overflow-y-auto p-6 flex flex-col">
            <div className="flex flex-col gap-6">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center">
                        <div className="w-16 h-16 bg-gray-200 rounded-lg overflow-hidden shrink-0">
                           {/* Menampilkan gambar dummy jika ada */}
                           {item.image && <img src={item.image} alt={item.name} className="w-full h-full object-cover" />}
                        </div>
                        <div className="flex-1">
                            <h4 className="text-sm font-bold text-gray-800">{item.name}</h4>
                            <div className="text-sm font-semibold text-gray-600">Rp {item.price.toLocaleString('id-ID')}</div>
                        </div>
                    </div>
                ))}
            </div>
        </div>

        {/* Footer Keranjang */}
        <div className="p-6 border-t border-gray-200 bg-gray-50">
            {/* 2. Perbaikan Tombol Checkout menggunakan router.push */}
            <button 
              onClick={() => router.push('/checkout')}
              className="w-full bg-[#4C9A2A] hover:bg-green-700 text-white font-bold py-4 rounded-lg transition shadow-md"
            >
              Check out - Rp {totalPrice.toLocaleString('id-ID')}
            </button>
        </div>
      </div>
    </div>
  );
}