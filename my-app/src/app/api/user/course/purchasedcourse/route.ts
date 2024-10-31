import connectDb from "@/dbconfig/dbconfig";
import { getdataFromToken } from "@/helpers/getdataFromToken";
import User from "@/models/userModel";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
    await connectDb();
    const userid = await getdataFromToken(request);
    try {
        console.log(userid)

        const purchasedCourse = await User.findOne({ _id: userid }).select("coursepurchased");
        console.log(purchasedCourse);
        return NextResponse.json({ message: "Course purchased successfully", purchasedCourse }, { status: 200 });
    } catch (error: any) {
        console.log(error.message)
        return NextResponse.json({ error: "Error purchased course" }, { status: 500 });
    }
}
