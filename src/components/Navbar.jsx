import Link from "next/link"; // 1. Wajib import Link dari Next.js

export default function Navbar({ lang, onCartClick }) {
  // 2. Ubah struktur array menjadi object agar punya text dan href
  const navItems = {
    id: [
      { text: "Produk", href: "/#produk" },
      { text: "Keberlanjutan", href: "/#keberlanjutan" },
      { text: "Blog", href: "/#proses" }, // Sementara arahkan ke proses
      { text: "Tentang Kami", href: "/#bantuan" }, // Sementara arahkan ke bantuan
    ],
    en: [
      { text: "Products", href: "/#produk" },
      { text: "Sustainability", href: "/#keberlanjutan" },
      { text: "Blog", href: "/#proses" },
      { text: "About Us", href: "/#bantuan" },
    ],
  };
  
  const t = navItems[lang];

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center">
      <div className="flex items-center gap-10">
        
        {/* Logo (Bisa diklik balik ke Home) */}
        <Link href="/">
          <div className="flex items-center cursor-pointer">
            <img src="/Logo.png" alt="Logo Areng" className="h-8 w-auto" />
          </div>
        </Link>
        
        {/* Menu */}
        <ul className="hidden md:flex gap-6 text-sm font-medium text-gray-600">
          {t.map((item, idx) => (
            <li key={idx} className="hover:text-[#4C9A2A] transition">
              {/* 3. Gunakan <Link> untuk membungkus teks menu */}
              <Link href={item.href}>
                {item.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      {/* Icons */}
      <div className="flex items-center gap-4 text-gray-600">
        {/* Icon User */}
        <Link href="/login">
        <svg className="w-6 h-6 cursor-pointer hover:text-[#4C9A2A] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
          </svg>
        </Link>
        
        {/* Icon Tas Belanja (Cart) */}
        <svg onClick={onCartClick} className="w-6 h-6 cursor-pointer hover:text-[#4C9A2A] transition" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"></path>
        </svg>      
        </div>
    </nav>
  );
}