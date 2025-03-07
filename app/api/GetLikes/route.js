import { connectMongoDB } from "/lib/mongodb";
import Likes from "/models/likes";
import { NextResponse } from "next/server";

// GET API: Fetch visitor count
export async function GET(req) {
  try {
    await connectMongoDB();

    let likes = await Likes.findOne();

    if (!likes) {
      likes = await Likes.create({ count: 0 });
    }

    return NextResponse.json({ count: likes.count });
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

    const likes = await Likes.findOneAndUpdate(
      {},
      { $inc: { count: 1 } }, // Increment by 1
      { new: true, upsert: true } // Return updated doc, create if not exists
    );

    console.log("Likes count updated:", likes.count);
    return NextResponse.json({ count: likes.count });
  } catch (error) {
    console.error("Error updating visitor count:", error);
    return NextResponse.json(
      { error: "Error updating visitor count." },
      { status: 500 }
    );
  }
}
