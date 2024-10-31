// pages/api/courses/[id].js

import { NextRequest, NextResponse } from 'next/server';
import Course from '@/models/courseModel';

export async function PUT(request: NextRequest, { params }: any) {
    const { courseid } = await params;

    try {
        const courseData = await request.json();
        const updatedCourse = await Course.findByIdAndUpdate(courseid, courseData, { new: true });
        console.log(courseData, updatedCourse, courseid)
        if (!updatedCourse) {
            return NextResponse.json({ error: "Course not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Course updated successfully", updatedCourse }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ error: "Error updating course" }, { status: 500 });
    }
}
