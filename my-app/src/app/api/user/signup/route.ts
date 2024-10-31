import User from "@/models/userModel";
import connectDb from "@/dbconfig/dbconfig";
import bcrypt from "bcryptjs";
import { NextRequest, NextResponse } from "next/server";



export async function POST(request: NextRequest) {
    await connectDb();
    try {
        const { name, email, password } = await request.json();
        console.log(name, email, password);
        const user = await User.findOne({ email });
        if (user) {
            console.log("useralready exists");
            return NextResponse.json({ error: "User already exists" }, { status: 400 });

        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);


        const newUser = new User({ name, email, password: hashedPassword });
        await newUser.save();

        return NextResponse.json(
            { message: "User created successfully", newUser },
            { status: 201 }
        );
    } catch (error) {
        console.error("Error creating user abhi:", error);
        return NextResponse.json({ error: "Error creating user" }, { status: 500 });
    }
}
