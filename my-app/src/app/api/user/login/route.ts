import User from "@/models/userModel";
import connectDb from "@/dbconfig/dbconfig";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

export async function POST(request: NextRequest) {
    await connectDb();
    try {
        const { email, password } = await request.json();

        const user = await User.findOne({ email });
        if (!user) {
            return NextResponse.json({ error: "User does not exist" }, { status: 400 });
        }

        const validpassword = await bcrypt.compare(password, user.password);
        if (!validpassword) {
            return NextResponse.json(
                { error: "Invalid password" },
                { status: 400 }
            );
        }

        const token = await jwt.sign({ id: user._id, email, name: user.name }, process.env.PASS!, {
            expiresIn: "1d"
        });

        const response = NextResponse.json(
            { message: "Login successful", token },
            { status: 200 }
        )
        response.cookies.set("token", token, {
            httpOnly: true,
        })

        return response;
    } catch (error) {
        console.error("Error creating user:", error);
        return NextResponse.json({ error: "Error creating user" }, { status: 500 });
    }
}
