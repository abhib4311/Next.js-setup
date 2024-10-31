import { NextResponse, NextRequest } from "next/server";
import Course from "@/models/courseModel";
import connectDb from "@/dbconfig/dbconfig";

export async function POST(request: NextRequest) {
    try {
        await connectDb();
        const coursedata = await request.json();
        const newcourse = new Course(coursedata);
        await newcourse.save();
        return NextResponse.json({ message: "Course created successfully", newcourse }, { status: 201 });
    } catch (error: any) {
        console.log(error.message);
        return NextResponse.json(error, { status: 500 });
    }
}


export async function GET() {
    try {
        await connectDb();
        const course = await Course.find();
        return NextResponse.json(course, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Error getting course" }, { status: 500 });
    }
}