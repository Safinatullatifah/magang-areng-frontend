export default function Footer() {
  return (
    <footer className="bg-[#F9F9F9] border-t border-gray-200 pt-16 pb-8 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Kolom 1: Logo & Sertifikasi */}
        <div>
          <img src="/logo-navbar.svg" alt="Areng Logo" className="h-10 mb-4" />
          <p className="text-gray-600 font-bold mb-8 text-sm">Arang Premium untuk Setiap Kebutuhan</p>
          
          <h4 className="font-bold text-gray-800 mb-4">Sertifikasi</h4>
          <div className="flex gap-4">
             {/* Placeholder Icon Sertifikasi */}
             {['SNI', 'ISO 9001', 'Halal', 'Export Quality', 'ISO 14001'].map((cert) => (
               <div key={cert} className="flex flex-col items-center text-[10px] text-gray-600 font-bold text-center gap-1">
                 <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-white">✓</div>
                 <span>{cert}</span>
               </div>
             ))}
          </div>
        </div>

        {/* Kolom 2: Kontak & Jam Operasional */}
        <div>
          <h4 className="font-bold text-gray-800 mb-4">Kontak</h4>
          <ul className="text-sm text-gray-600 space-y-3 mb-8">
            <li className="flex items-center gap-2">📞 +628XXXXXXXXX</li>
            <li className="flex items-center gap-2">✉️ XXX@XXX.com</li>
            <li className="flex items-center gap-2">📍 [Lokasi]</li>
          </ul>

          <h4 className="font-bold text-gray-800 mb-4">Jam Operasional</h4>
          <ul className="text-sm text-gray-600 space-y-2">
            <li className="flex justify-between w-48"><span>Senin - Jumat</span> <span>08.00 - 17.00</span></li>
            <li className="flex justify-between w-48"><span>Sabtu</span> <span>08.00 - 13.00</span></li>
            <li className="flex justify-between w-48"><span>Minggu</span> <span>Closed</span></li>
          </ul>
        </div>

        {/* Kolom 3: Lokasi Kami (Map) */}
        <div>
          <h4 className="font-bold text-gray-800 mb-4">Lokasi Kami</h4>
          <div className="w-full h-48 bg-gray-200 rounded-lg overflow-hidden border border-gray-300">
            {/* Ganti dengan <img src="/map.jpg" /> atau embed iframe Google Maps */}
            <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-500">Map Placeholder</div>
          </div>
        </div>
      </div>

      {/* Bottom Footer: Payment & Copyright */}
      <div className="max-w-7xl mx-auto px-8 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-4">
          {/* Gunakan gambar logo bank asli nantinya */}
          <div className="h-6 w-12 bg-gray-300 rounded text-[8px] flex items-center justify-center">QRIS</div>
          <div className="h-6 w-12 bg-gray-300 rounded text-[8px] flex items-center justify-center">BCA</div>
          <div className="h-6 w-12 bg-gray-300 rounded text-[8px] flex items-center justify-center">BRI</div>
          <div className="h-6 w-12 bg-gray-300 rounded text-[8px] flex items-center justify-center">DANA</div>
          <div className="h-6 w-12 bg-gray-300 rounded text-[8px] flex items-center justify-center">Gopay</div>
          <div className="h-6 w-12 bg-gray-300 rounded text-[8px] flex items-center justify-center">ShopeePay</div>
        </div>
        <div className="text-sm text-gray-500 font-medium">
          © areng. All rights reserved.
        </div>
      </div>
    </footer>
  );
}