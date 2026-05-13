import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

import { BsFillExclamationDiamondFill } from "react-icons/bs";
import { ImSpinner2 } from "react-icons/im";

export default function Login() {

    const navigate = useNavigate();

    const [loading, setLoading] = useState(false);

    const [error, setError] = useState("");

    const [dataForm, setDataForm] = useState({
        username: "",
        password: "",
    });

    /* HANDLE INPUT */

    const handleChange = (evt) => {

        const { name, value } = evt.target;

        setDataForm({
            ...dataForm,
            [name]: value,
        });
    };

    /* HANDLE LOGIN */

    const handleSubmit = async (e) => {

        e.preventDefault();

        setLoading(true);

        setError("");

        axios({
            method: "post",
            url: "https://dummyjson.com/auth/login",

            headers: {
                "Content-Type": "application/json",
            },

            data: {
                username: dataForm.username,
                password: dataForm.password,
                expiresInMins: 30,
            },
        })

        .then((response) => {

            if (response.data.accessToken) {

                /* SIMPAN TOKEN */

                localStorage.setItem(
                    "token",
                    response.data.accessToken
                );

                localStorage.setItem(
                    "user",
                    JSON.stringify(response.data)
                );

                /* REDIRECT KE DASHBOARD */

                navigate("/dashboard");
            }
        })

        .catch((err) => {

            setError(
                err.response?.data?.message ||
                "Username atau Password salah!"
            );
        })

        .finally(() => {
            setLoading(false);
        });
    };

    return (
        <div className="min-h-screen bg-[#eef3f6] flex items-center justify-center px-5">

            <div className="w-full max-w-md bg-white rounded-3xl shadow-2xl p-8">

                {/* TITLE */}

                <div className="text-center mb-8">

                    <h1 className="text-4xl font-bold text-red-500">
                        Foodies
                    </h1>

                    <p className="text-gray-500 mt-2">
                        Welcome Back 👋
                    </p>
                </div>



                {/* ERROR */}

                {error && (

                    <div className="bg-red-100 border border-red-300 text-red-700 p-4 rounded-xl mb-5 flex items-center">

                        <BsFillExclamationDiamondFill className="me-2 text-lg" />

                        {error}
                    </div>
                )}



                {/* LOADING */}

                {loading && (

                    <div className="bg-blue-100 border border-blue-300 text-blue-700 p-4 rounded-xl mb-5 flex items-center">

                        <ImSpinner2 className="animate-spin me-2" />

                        Memproses Login...
                    </div>
                )}



                {/* FORM */}

                <form
                    onSubmit={handleSubmit}
                    className="space-y-5"
                >

                    {/* USERNAME */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Username
                        </label>

                        <input
                            type="text"
                            name="username"
                            value={dataForm.username}
                            onChange={handleChange}
                            placeholder="Masukkan Username"
                            required
                            className="w-full border border-gray-300 bg-gray-50 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
                        />
                    </div>



                    {/* PASSWORD */}

                    <div>

                        <label className="block text-sm font-medium text-gray-700 mb-2">
                            Password
                        </label>

                        <input
                            type="password"
                            name="password"
                            value={dataForm.password}
                            onChange={handleChange}
                            placeholder="Masukkan Password"
                            required
                            className="w-full border border-gray-300 bg-gray-50 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-red-400"
                        />
                    </div>



                    {/* FORGOT PASSWORD */}

                    <div className="flex justify-end">

                        <Link
                            to="/forgot"
                            className="text-sm text-red-500 hover:text-red-600"
                        >
                            Forgot Password?
                        </Link>
                    </div>



                    {/* BUTTON LOGIN */}

                    <button
                        type="submit"
                        disabled={loading}
                        className={`w-full py-3 rounded-xl text-white font-semibold transition ${
                            loading
                                ? "bg-red-300 cursor-not-allowed"
                                : "bg-red-500 hover:bg-red-600"
                        }`}
                    >
                        {loading ? "Logging in..." : "Login"}
                    </button>

                </form>



                {/* REGISTER */}

                <div className="text-center mt-6">

                    <p className="text-gray-500">

                        Belum punya akun?

                        <Link
                            to="/register"
                            className="text-red-500 font-semibold ms-1"
                        >
                            Sign Up
                        </Link>

                    </p>
                </div>

            </div>
        </div>
    );
}