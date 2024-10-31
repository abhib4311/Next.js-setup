
import connectDb from "@/dbconfig/dbconfig";
import { getdataFromToken } from "@/helpers/getdataFromToken";
import User from "@/models/userModel";
import { NextRequest } from "next/server";

export async function PUT(request: NextRequest, { params }: any) {

    try {
        await connectDb();
        const { courseid } = await params;
        console.log(courseid + "mhvmhjvjmhjvhgchgcnggfcngfxhgfxgf")
        const userid = await getdataFromToken(request);
        console.log(userid)
        console.log(userid)
        await User.findByIdAndUpdate(
            userid,
            { $push: { coursepurchased: courseid } },
            { new: true }
        );

        return Response.json({ message: "Course purchased successfully" }, { status: 200 });
    } catch (error: any) {
        console.log(error.message)
        return Response.json({ error: "Error purchasing course" }, { status: 500 });
    }
}
