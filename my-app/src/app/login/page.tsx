"use client"
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Page() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        email: "",
        password: "",
    });

    const [loading, setLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const login = async () => {
        try {
            setLoading(true);
            const response = await axios.post("/api/user/login", user);
            console.log(response);
            router.push("/home");
        } catch (error) {
            console.error("Error:", error);
            setLoading(false);
        }
    };
    useEffect(() => {
        const { email, password } = user;
        setButtonDisabled(!(email && password));
    }, [user])
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8  ">
            <p className="text-center text-4xl font-bold  mb-8">My <span className="rounded-lg bg-orange-500 p-2 text-black">Next.js</span></p>

            <div className="w-full max-w-md p-6 bg-gray-900 rounded-lg shadow-lg">
                <form className="flex flex-col space-y-4">


                    <label htmlFor="email" className="text-gray-200 font-medium">
                        Email
                    </label>
                    <input
                        className="p-3 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="email"
                        placeholder="Email"
                        id="email"
                        name="email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />

                    <label htmlFor="password" className="text-gray-200 font-medium">
                        Password
                    </label>
                    <input
                        className="p-3 border border-gray-300 text-black rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="password"
                        id="password"
                        name="password"
                        value={user.password}
                        placeholder="Password"
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />

                    <button
                        onClick={login}
                        type="button"
                        className={`mt-6 p-3 text-white rounded-lg ${(buttonDisabled || loading) ? "bg-gray-500 cursor-not-allowed" : "bg-gray-700 hover:bg-gray-800"
                            }`}
                        disabled={buttonDisabled || loading}
                    >
                        {loading ? "Loading..." : "Login"}
                    </button>
                    <Link href="/signup">Create an account</Link>
                </form>
            </div>
        </div>
    );
}
