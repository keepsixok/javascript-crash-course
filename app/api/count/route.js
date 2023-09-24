import connectMDB from "@/backend/mongodb"
import { NextResponse } from "next/server"
import Count from "@/models/count"

export async function POST(request) {
    const {count} = await request.json()
    await connectMDB()
    await Count.create({count})
    return NextResponse.json({message: "Count Saved"}, {status: 201})

}

export async function GET() {
    await connectMDB()
    const count = await Count.find()
    return NextResponse.json({count})
}

export async function DELETE(request) {
    const id = request.nextUrl.searchParams.get("id")
    await connectMDB()
    await Count.findByIdAndDelete(id)
    return NextResponse.json({message: "Count Deleted"}, {status: 200})
}