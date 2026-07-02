export default function TopBanner({ lang, toggleLanguage }) {
  const content = {
    id: { text: "Mencari pesanan skala besar? Beralih ke toko ", link: "Global kami." },
    en: { text: "Looking to order in bulk? Switch to our ", link: "Global store." },
  };
  const t = content[lang];

  return (
    <div className="bg-[#4C9A2A] text-white text-sm py-2 px-4 flex justify-center items-center">
      <span>
        {t.text}
        <button
          onClick={toggleLanguage}
          className="font-bold underline hover:text-gray-200 transition"
        >
          {t.link}
        </button>
      </span>
    </div>
  );
}