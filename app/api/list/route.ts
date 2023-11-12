import { addSchool, getSchools, rmSchool } from "@/lib/schools"
import { NextApiRequest, NextApiResponse } from "next";
import { NextResponse } from "next/server"

type School = {
    school: string,
    region: string,
    level: string
}

export const GET = async (req: NextApiRequest, res: Response) => {
    try {
        const schools = getSchools();
        return NextResponse.json({ message: "Yes it came from me", schools }, { status: 200 })
    } catch (err) {
        return NextResponse.json({ message: "there has been an error", err }, { status: 500 })
    }
};

export const POST = async (req: Request, res: Response) => {
        const { school, region, level } = await req.json();
    try {
        const Schools = addSchool({ school: school, region: region, level: level });
           console.log("hello", school, region, level);
        return NextResponse.json({ message: "This is the post response", Schools}, { status: 201 }) 
    } catch (err) {
        return NextResponse.json({ message: "there has been an error", err }, { status: 500 });
    }
};

// Assuming you are using Next.js API routes
export const DELETE =async (req: Request, res: Response) => {
        const { name } = await  req.json() || {};
        console.log(name);
    try {
         const filtered = rmSchool(name)
        return NextResponse.json({ message: "This is the post response", name, filtered}, { status: 200 }) 
    } catch (err) {
        return NextResponse.json({ message: "there has been an error", err });
    }
};


