import { useNavigate } from "react-router-dom";

export default function PageHeader() {

    const navigate = useNavigate();

    /* LOGOUT */

    const handleLogout = () => {

        /* HAPUS TOKEN */

        localStorage.removeItem("token");
        localStorage.removeItem("user");

        /* KEMBALI KE GUEST PAGE */

        navigate("/");
    };

    return (
        <div
            id="pageheader-container"
            className="flex items-center justify-between p-5 bg-white shadow-md rounded-xl"
        >

            {/* LEFT */}

            <div
                id="pageheader-left"
                className="flex flex-col"
            >

                <span
                    id="page-title"
                    className="text-3xl font-bold text-gray-800"
                >
                    Dashboard
                </span>

                <div
                    id="breadcrumb-links"
                    className="flex items-center font-medium space-x-2 mt-2"
                >

                    <span
                        id="breadcrumb-home"
                        className="text-gray-500"
                    >
                        Dashboard
                    </span>

                    <span
                        id="breadcrumb-separator"
                        className="text-gray-400"
                    >
                        /
                    </span>

                    <span
                        id="breadcrumb-current"
                        className="text-red-500"
                    >
                        Order List
                    </span>

                </div>
            </div>



            {/* RIGHT BUTTON */}

            <div
                id="action-button"
                className="flex items-center gap-3"
            >

                {/* ADD BUTTON */}

                <button
                    id="add-button"
                    className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition"
                >
                    Add Order
                </button>



                {/* LOGOUT */}

                <button
                    onClick={handleLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition"
                >
                    Logout
                </button>

            </div>
        </div>
    );
}