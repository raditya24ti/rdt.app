import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope
} from "react-icons/fa";

export default function Footer() {

  return (
    <footer
      id="contact"
      className="bg-gray-900 text-white pt-20 pb-10"
    >

      <div
        className="container mx-auto px-6"
      >

        {/* ========================= */}
        {/* TOP FOOTER */}
        {/* ========================= */}

        <div
          className="grid md:grid-cols-4 gap-12 border-b border-gray-700 pb-14"
        >

          {/* ========================= */}
          {/* BRAND */}
          {/* ========================= */}

          <div>

            <h2
              className="text-4xl font-extrabold"
            >
              Foodies
              <span className="text-red-500">.</span>
            </h2>

            <p
              className="text-gray-400 mt-5 leading-relaxed"
            >
              Rumah makan Padang modern dengan cita rasa autentik,
              pelayanan cepat, dan kualitas premium untuk semua pelanggan.
            </p>



            {/* SOCIAL MEDIA */}

            <div
              className="flex items-center gap-4 mt-6"
            >

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-800 hover:bg-red-500 flex items-center justify-center transition"
              >
                <FaInstagram />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-800 hover:bg-blue-500 flex items-center justify-center transition"
              >
                <FaFacebookF />
              </a>

              <a
                href="#"
                className="w-11 h-11 rounded-full bg-gray-800 hover:bg-green-500 flex items-center justify-center transition"
              >
                <FaWhatsapp />
              </a>

            </div>

          </div>



          {/* ========================= */}
          {/* MENU */}
          {/* ========================= */}

          <div>

            <h3
              className="text-2xl font-bold mb-6"
            >
              Navigasi
            </h3>

            <ul className="space-y-4 text-gray-400">

              <li>
                <a href="#home" className="hover:text-red-500 transition">
                  Home
                </a>
              </li>

              <li>
                <a href="#about" className="hover:text-red-500 transition">
                  About
                </a>
              </li>

              <li>
                <a href="#menu" className="hover:text-red-500 transition">
                  Menu
                </a>
              </li>

              <li>
                <a href="#review" className="hover:text-red-500 transition">
                  Review
                </a>
              </li>

            </ul>

          </div>



          {/* ========================= */}
          {/* CONTACT */}
          {/* ========================= */}

          <div>

            <h3
              className="text-2xl font-bold mb-6"
            >
              Kontak
            </h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex items-start gap-3">

                <FaMapMarkerAlt className="mt-1 text-red-500" />

                <p>
                  Jl. Padang Raya No. 99,
                  Indonesia
                </p>

              </div>



              <div className="flex items-center gap-3">

                <FaPhoneAlt className="text-red-500" />

                <p>
                  0812-3456-7890
                </p>

              </div>



              <div className="flex items-center gap-3">

                <FaEnvelope className="text-red-500" />

                <p>
                  foodies@gmail.com
                </p>

              </div>

            </div>

          </div>



          {/* ========================= */}
          {/* OPEN HOURS */}
          {/* ========================= */}

          <div>

            <h3
              className="text-2xl font-bold mb-6"
            >
              Jam Operasional
            </h3>

            <div className="space-y-4 text-gray-400">

              <p>
                Senin - Jumat
                <br />
                <span className="text-white">
                  08:00 - 22:00
                </span>
              </p>

              <p>
                Sabtu - Minggu
                <br />
                <span className="text-white">
                  09:00 - 23:00
                </span>
              </p>

            </div>

          </div>

        </div>



        {/* ========================= */}
        {/* BOTTOM FOOTER */}
        {/* ========================= */}

        <div
          className="flex flex-col md:flex-row justify-between items-center pt-8 text-gray-500 text-sm"
        >

          <p>
            © 2025 Foodies. All Rights Reserved.
          </p>

          <p className="mt-3 md:mt-0">
            Designed with ❤️ by Foodies Team
          </p>

        </div>

      </div>

    </footer>
  );
}