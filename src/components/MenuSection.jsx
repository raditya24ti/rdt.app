import products from "../data/products.json";
import { FaStar, FaShoppingCart } from "react-icons/fa";

export default function MenuSection() {

  return (
    <section
      id="menu"
      className="py-24 bg-[#eef3f6]"
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
            Menu Favorit
          </span>

          <h2
            className="text-5xl font-extrabold text-gray-800 mt-6"
          >
            Pilihan Menu
            <span className="text-red-500"> Terbaik</span>
          </h2>

          <p
            className="text-gray-500 text-lg max-w-2xl mx-auto mt-5"
          >
            Nikmati berbagai hidangan khas Padang dengan rasa autentik,
            kualitas premium, dan harga terbaik.
          </p>

        </div>



        {/* ========================= */}
        {/* MENU GRID */}
        {/* ========================= */}

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >

          {products.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300"
            >

              {/* IMAGE */}

              <div className="overflow-hidden">

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                />

              </div>



              {/* CONTENT */}

              <div className="p-6">

                {/* RATING */}

                <div className="flex items-center gap-2 text-yellow-500 mb-3">

                  <FaStar />

                  <span className="font-semibold">
                    4.9
                  </span>

                </div>



                {/* NAME */}

                <h3
                  className="text-2xl font-bold text-gray-800"
                >
                  {item.name}
                </h3>



                {/* DESCRIPTION */}

                <p
                  className="text-gray-500 mt-3 leading-relaxed"
                >
                  Hidangan khas Padang dengan cita rasa rempah autentik
                  dan kualitas terbaik.
                </p>



                {/* PRICE + BUTTON */}

                <div
                  className="flex items-center justify-between mt-6"
                >

                  <p
                    className="text-2xl font-bold text-red-500"
                  >
                    Rp {item.price}
                  </p>



                  <button
                    className="bg-red-500 hover:bg-red-600 text-white p-4 rounded-2xl transition shadow-md"
                  >

                    <FaShoppingCart />

                  </button>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}