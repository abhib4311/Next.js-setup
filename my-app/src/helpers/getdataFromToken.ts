import jwt from "jsonwebtoken";
import { NextRequest } from "next/server";
export async function getdataFromToken(request: NextRequest) {
    try {
        const token = request.cookies.get('token')?.value || '';
        const user: any = await jwt.verify(token, process.env.PASS!);
        return user.id;

    } catch (error: any) {
        console.log(error)
        throw new Error("unauthorized");

    }

}
