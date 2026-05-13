import { FaUtensils, FaTruck, FaStar } from "react-icons/fa";

export default function About() {

  return (
    <section
      id="about"
      className="py-24 bg-white"
    >

      <div
        className="container mx-auto px-6"
      >

        {/* ========================= */}
        {/* TITLE */}
        {/* ========================= */}

        <div className="text-center mb-16">

          <span
            className="bg-red-100 text-red-500 px-5 py-2 rounded-full font-semibold"
          >
            Tentang Kami
          </span>

          <h2
            className="text-5xl font-extrabold text-gray-800 mt-6"
          >
            Kenapa Memilih
            <span className="text-red-500"> Foodies?</span>
          </h2>

          <p
            className="text-gray-500 text-lg max-w-3xl mx-auto mt-6 leading-relaxed"
          >
            Foodies hadir untuk memberikan pengalaman terbaik dalam menikmati
            masakan khas Padang dengan rasa autentik, pelayanan cepat,
            dan kualitas premium langsung ke rumahmu.
          </p>

        </div>



        {/* ========================= */}
        {/* CONTENT */}
        {/* ========================= */}

        <div
          className="grid md:grid-cols-3 gap-8"
        >

          {/* CARD 1 */}

          <div
            className="bg-[#eef3f6] rounded-3xl p-10 text-center hover:-translate-y-3 transition duration-300 shadow-md hover:shadow-2xl"
          >

            <div
              className="w-20 h-20 bg-red-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl"
            >
              <FaUtensils />
            </div>

            <h3
              className="text-2xl font-bold text-gray-800 mb-4"
            >
              Masakan Autentik
            </h3>

            <p
              className="text-gray-500 leading-relaxed"
            >
              Semua menu dibuat dengan resep khas Padang asli
              menggunakan bahan berkualitas terbaik.
            </p>

          </div>



          {/* CARD 2 */}

          <div
            className="bg-[#eef3f6] rounded-3xl p-10 text-center hover:-translate-y-3 transition duration-300 shadow-md hover:shadow-2xl"
          >

            <div
              className="w-20 h-20 bg-green-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl"
            >
              <FaTruck />
            </div>

            <h3
              className="text-2xl font-bold text-gray-800 mb-4"
            >
              Pengiriman Cepat
            </h3>

            <p
              className="text-gray-500 leading-relaxed"
            >
              Pesananmu diantar dengan cepat dan aman
              sehingga makanan tetap hangat dan lezat.
            </p>

          </div>



          {/* CARD 3 */}

          <div
            className="bg-[#eef3f6] rounded-3xl p-10 text-center hover:-translate-y-3 transition duration-300 shadow-md hover:shadow-2xl"
          >

            <div
              className="w-20 h-20 bg-yellow-500 text-white rounded-full flex items-center justify-center mx-auto mb-6 text-3xl"
            >
              <FaStar />
            </div>

            <h3
              className="text-2xl font-bold text-gray-800 mb-4"
            >
              Rating Terbaik
            </h3>

            <p
              className="text-gray-500 leading-relaxed"
            >
              Dipercaya ribuan pelanggan dengan rating tinggi
              dan review positif setiap harinya.
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}