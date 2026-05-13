import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

export default function Hero() {

  return (
    <section
      id="home"
      className="min-h-screen bg-[#eef3f6] flex items-center pt-24"
    >

      <div
        className="container mx-auto px-6 grid md:grid-cols-2 gap-16 items-center"
      >

        {/* ========================= */}
        {/* LEFT CONTENT */}
        {/* ========================= */}

        <div
          className="flex flex-col"
        >

          {/* BADGE */}

          <span
            className="bg-red-100 text-red-500 px-5 py-2 rounded-full w-fit font-semibold mb-6"
          >
            Rumah Makan Padang Terbaik
          </span>



          {/* TITLE */}

          <h1
            className="text-5xl md:text-7xl font-extrabold leading-tight text-gray-800"
          >
            Nikmati
            <span className="text-red-500"> Rendang </span>
            dan
            <br />

            Masakan Padang
            <br />

            Favoritmu
          </h1>



          {/* DESCRIPTION */}

          <p
            className="mt-6 text-gray-500 text-lg leading-relaxed max-w-xl"
          >
            Foodies menghadirkan pengalaman menikmati masakan khas Padang
            dengan cita rasa autentik, pengiriman cepat,
            dan kualitas terbaik langsung ke rumahmu.
          </p>



          {/* BUTTON */}

          <div className="flex items-center gap-4 mt-10">

            <Link
              to="/login"
              className="bg-red-500 hover:bg-red-600 text-white px-8 py-4 rounded-2xl flex items-center gap-3 transition shadow-lg"
            >

              Pesan Sekarang

              <FaArrowRight />

            </Link>



            <a
              href="#menu"
              className="border border-gray-300 hover:border-red-500 hover:text-red-500 px-8 py-4 rounded-2xl transition"
            >
              Lihat Menu
            </a>

          </div>



          {/* STATS */}

          <div className="flex gap-10 mt-14">

            <div>

              <h2 className="text-3xl font-bold text-gray-800">
                10K+
              </h2>

              <p className="text-gray-500">
                Pelanggan
              </p>

            </div>



            <div>

              <h2 className="text-3xl font-bold text-gray-800">
                50+
              </h2>

              <p className="text-gray-500">
                Menu Padang
              </p>

            </div>



            <div>

              <h2 className="text-3xl font-bold text-gray-800">
                4.9
              </h2>

              <p className="text-gray-500">
                Rating
              </p>

            </div>

          </div>

        </div>



        {/* ========================= */}
        {/* RIGHT IMAGE */}
        {/* ========================= */}

        <div
          className="flex justify-center relative"
        >

          {/* BACKGROUND CIRCLE */}

          <div
            className="absolute w-[420px] h-[420px] bg-red-100 rounded-full blur-3xl opacity-60"
          ></div>



          {/* IMAGE */}

          <img
            src="https://images.unsplash.com/photo-1504674900247-0877df9cc836"
            alt="Makanan Padang"
            className="relative z-10 w-[500px] h-[620px] object-cover rounded-t-[250px] rounded-b-[40px] shadow-2xl hover:scale-105 transition duration-500"
          />

        </div>

      </div>

    </section>
  );
}