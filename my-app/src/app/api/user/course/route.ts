import connectDb from "@/dbconfig/dbconfig";
import Course from "@/models/courseModel";


export async function GET() {
    await connectDb();
    try {

        const allCourse = await Course.find();

        return Response.json({ allCourse }, { status: 200 });
    } catch (error) {

        return Response.json({ error: "Error getting all course" }, { status: 500 });
    }
}
