import { connectMongoDB } from "/lib/mongodb";
import Visitor from "/models/views";
import { NextResponse } from "next/server";

// GET API: Fetch visitor count
export async function GET(req) {
  try {
    await connectMongoDB();

    let visitor = await Visitor.findOne();

    if (!visitor) {
      visitor = await Visitor.create({ count: 0 });
    }

    return NextResponse.json({ count: visitor.count });
  } catch (error) {
    console.error("Error fetching visitor count:", error);
    return NextResponse.json(
      { error: "Error fetching visitor count." },
      { status: 500 }
    );
  }
}

// POST API: Increment visitor count
export async function POST(req) {
  try {
    await connectMongoDB();

    const visitor = await Visitor.findOneAndUpdate(
      {},
      { $inc: { count: 1 } }, // Increment by 1
      { new: true, upsert: true } // Return updated doc, create if not exists
    );

    console.log("Visitor count updated:", visitor.count);
    return NextResponse.json({ count: visitor.count });
  } catch (error) {
    console.error("Error updating visitor count:", error);
    return NextResponse.json(
      { error: "Error updating visitor count." },
      { status: 500 }
    );
  }
}
