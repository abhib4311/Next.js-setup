"use client"
import React, { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Page() {
    const router = useRouter();
    const [user, setUser] = React.useState({
        name: "",
        email: "",
        password: "",
    });
    const [loading, setloading] = React.useState(false);
    const [buttonDisabled, setButtonDisabled] = React.useState(false);
    const signup = async () => {
        try {
            setloading(true);

        } catch (error) {

        } finally { }
    };

    useEffect(() => {
        if (user.email.length > 0 && user.password.length > 0 && user.name.length > 0) {
            setButtonDisabled(false);
        } else {
            setButtonDisabled(true);
        }
    }, [user]);
    return (
        <div className="flex flex-col items-center justify-center min-h-screen p-8  ">
            <p className="text-center text-4xl font-bold  mb-8">My <span className="rounded-lg bg-orange-500 p-2 text-black">Next.js</span></p>

            <div className="w-full max-w-md p-6 bg-gray-900 rounded-lg shadow-lg">
                <form className="flex flex-col space-y-4">
                    <label htmlFor="name" className="text-gray-200 font-medium">
                        Name
                    </label>
                    <input
                        className="p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="text"
                        id="name"
                        name="name"
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
                        className="p-3 border text-black border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                        type="password"
                        placeholder="Password"
                        id="password"
                        name="password"
                        value={user.password}
                        onChange={(e) => setUser({ ...user, password: e.target.value })}
                    />

                    <button
                        onClick={signup}
                        type="button"
                        className="mt-6 p-3 text-white rounded-lg hover:bg-gray-800 bg-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                    >
                        `{buttonDisabled ? "Loading..." : "Signup"}
                    </button>
                    <Link href="/login">Already have an account? Login</Link>
                </form>
            </div>
        </div>
    );
}
