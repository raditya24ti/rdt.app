import reviews from "../data/reviews.json";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

export default function ReviewSection() {

  return (
    <section
      id="review"
      className="py-24 bg-[#eef3f6]"
    >

      <div className="container mx-auto px-6">

        {/* ========================= */}
        {/* TITLE */}
        {/* ========================= */}

        <div className="text-center mb-16">

          <span
            className="bg-red-100 text-red-500 px-5 py-2 rounded-full font-semibold"
          >
            Testimoni Pelanggan
          </span>

          <h2
            className="text-5xl font-extrabold text-gray-800 mt-6"
          >
            Apa Kata
            <span className="text-red-500"> Mereka?</span>
          </h2>

          <p
            className="text-gray-500 text-lg max-w-2xl mx-auto mt-5 leading-relaxed"
          >
            Ribuan pelanggan telah menikmati makanan khas Padang
            dari Foodies dengan pelayanan terbaik,
            rasa autentik, dan pengiriman cepat.
          </p>

        </div>



        {/* ========================= */}
        {/* REVIEW GRID */}
        {/* ========================= */}

        <div
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10"
        >

          {reviews.map((item) => (

            <div
              key={item.id}
              className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl hover:-translate-y-3 transition duration-300 relative overflow-hidden"
            >

              {/* ICON */}

              <FaQuoteLeft
                className="absolute top-6 right-6 text-red-100 text-5xl"
              />



              {/* ========================= */}
              {/* HEADER */}
              {/* ========================= */}

              <div
                className="flex items-center gap-4 mb-6"
              >

                {/* AVATAR */}

                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full border-4 border-red-100 object-cover shadow-md"
                />



                {/* NAME + RATING */}

                <div>

                  <h3
                    className="text-xl font-bold text-gray-800"
                  >
                    {item.name}
                  </h3>



                  <div
                    className="flex items-center gap-1 text-yellow-500 mt-1"
                  >

                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />

                  </div>

                </div>

              </div>



              {/* ========================= */}
              {/* REVIEW */}
              {/* ========================= */}

              <p
                className="text-gray-500 leading-relaxed text-lg"
              >
                “{item.review}”
              </p>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}