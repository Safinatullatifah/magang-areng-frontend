export default function Footer() {
  return (
    <footer className="bg-[#F9F9F9] border-t border-gray-200 pt-16 pb-8 font-sans text-gray-800">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
        
        {/* Kolom 1: Logo & Sertifikasi */}
        <div>
          <img src="/Logo.png" alt="Areng Logo" className="h-10 mb-4" />
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
            {/* Menggunakan Iframe Google Maps (Bisa kamu ganti koordinat/linknya nanti sesuai alamat asli) */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126646.20966453139!2d112.65992685955684!3d-7.27561201509355!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2dd7fbf8381ac47f%3A0x3027a76e352be40!2sSurabaya%2C%20East%20Java!5e0!3m2!1sen!2sid!4v1700000000000!5m2!1sen!2sid" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
            </iframe>
          </div>
        </div>
      </div>

      {/* Bottom Footer: Payment & Copyright */}
      <div className="max-w-7xl mx-auto px-8 border-t border-gray-300 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
        
        {/* Wadah Gambar Logo Pembayaran */}
        <div className="flex gap-4 items-center flex-wrap">
          <img src="/qris.png" alt="QRIS" className="h-5 object-contain" />
          <img src="/bca.png" alt="BCA" className="h-5 object-contain" />
          <img src="/bri.png" alt="BRI" className="h-5 object-contain" />
          <img src="/dana.png" alt="DANA" className="h-5 object-contain" />
          <img src="/gopay.png" alt="Gopay" className="h-5 object-contain" />
          <img src="/shopee.png" alt="ShopeePay" className="h-5 object-contain" />
        </div>

        <div className="text-sm text-gray-500 font-medium">
          © areng. All rights reserved.
        </div>
      </div>
    </footer>
  );
}