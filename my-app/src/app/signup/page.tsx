"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function Page() {
    const router = useRouter();
    const [user, setUser] = useState({ name: "", email: "", password: "", isadmin: false });
    const [loading, setLoading] = useState(false);
    const [buttonDisabled, setButtonDisabled] = useState(true);

    const signup = async () => {
        // event.preventDefault();  // Prevent form submission
        // if (buttonDisabled) return; // Prevent button action if disabled

        try {
            setLoading(true);
            console.log(user);
            const response = await axios.post('/api/user/signup', user);
            console.log(response);
            router.push('/login');
        } catch (error) {
            setLoading(false); console.error("Error:", error);
        }
    };

    useEffect(() => {
        const { name, email, password } = user;
        setButtonDisabled(!(name && email && password));
    }, [user]);

    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8">
            <p className="text-center text-4xl font-bold mb-8">
                My <span className="rounded-lg bg-orange-500 p-2 text-black">Next.js</span>
            </p>
            <div className="w-full max-w-md p-6 bg-gray-900 rounded-lg shadow-lg">
                <form className="flex flex-col space-y-4" onSubmit={signup}>
                    <div className="flex-row items-center space-x-2">
                        <label htmlFor="normal" className="text-gray-200 font-medium">
                            Normal
                        </label>
                        <input
                            type="radio"
                            id="normal"
                            name="isadmin"
                            value="false"
                            checked={!user.isadmin}
                            onChange={(e) => setUser({ ...user, isadmin: e.target.value === "false" })}
                        />
                        <label htmlFor="admin" className="text-gray-200 font-medium">
                            Admin
                        </label>
                        <input
                            type="radio"
                            id="admin"
                            name="isadmin"
                            value="true"
                            checked={user.isadmin}
                            onChange={(e) => setUser({ ...user, isadmin: e.target.value === "true" })}
                        />
                    </div>
                    <label htmlFor="name" className="text-gray-200 font-medium">
                        Name
                    </label>
                    <input
                        className="p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        id="name"
                        placeholder="Name"
                        value={user.name}
                        onChange={(e) => setUser({ ...user, name: e.target.value })}
                    />

                    <label htmlFor="email" className="text-gray-200 font-medium">
                        Email
                    </label>
                    <input
                        className="p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="email"
                        id="email"
                        placeholder="Email"
                        value={user.email}
                        onChange={(e) => setUser({ ...user, email: e.target.value })}
                    />

                    <label htmlFor="password" className="text-gray-200 font-medium">
                        Password
                    </label>
                    <input
                        className="p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="password"
                        id="password"
                        placeholder="Password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />

                    <button
                        onClick={signup}
                        type="button"
                        className={`mt-6 p-3 text-white rounded-lg ${(buttonDisabled || loading) ? "bg-gray-500 cursor-not-allowed" : "bg-gray-700 hover:bg-gray-800"
                            }`}
                        disabled={buttonDisabled || loading}
                    >
                        {(loading) ? "Signing up..." : "Signup"}
                    </button>

                    <Link href="/login" className="text-blue-500 hover:underline">
                        Already have an account? Login
                    </Link>
                </form>
            </div>
        </div>
    );
}
