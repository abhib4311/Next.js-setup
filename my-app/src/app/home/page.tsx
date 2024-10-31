"use client"
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Page() {
    const router = useRouter();
    async function logout() {
        try {
            await axios.get("/api/user/logout");
            console.log("logout successful");
            router.push("/login");
        }
        catch (error) {
            console.error(error);
        }
    }
    const getUserDetail = async () => {
        const { data } = await axios.get("/api/user/profile");
        console.log(data);
        router.push("/home/" + data._id);
    }

    return (
        <div>
            <p>This is the home page of my Next.js web app</p>

            <button onClick={logout} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">Logout</button>
            <button onClick={getUserDetail} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" type="button">Profile</button>
            {/* <h1 className="text-3xl font-bold underline rounded-lg p-3 text-green-500">{clientData}</h1> */}
        </div>
    );
}
