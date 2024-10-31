import { getdataFromToken } from "@/helpers/getdataFromToken";
import connectDb from "@/dbconfig/dbconfig";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";



export async function GET(request: NextRequest) {

    await connectDb();
    try {
        const id = await getdataFromToken(request);

        const user = await User.findOne({ _id: id }).select("-password");

        return NextResponse.json(user, { status: 200 });
    }

    catch (error) {
        console.log(error);
        return NextResponse.json({ error: "Error getting user" }, { status: 500 });
    }
}