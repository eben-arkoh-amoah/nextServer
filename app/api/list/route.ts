import { getSchools } from "@/lib/schools"
import { NextResponse } from "next/server"

export const GET = async (req: Request, res: Response) => {

    try {
        const schools = getSchools();
        return NextResponse.json({ message: "Yes it came from me", schools }, { status: 201 })
    } catch (err) {
       return  NextResponse.json({message: "there has been an error", err}, {status: 500})
    }
}