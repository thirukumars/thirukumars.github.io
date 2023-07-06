import { NextRequest, NextResponse } from "next/server";

export async function GET(Request: NextRequest) {
  try {
    console.log("hello there");
    return NextResponse.json({
      message: "success",
      status: 500,
    });
  } catch (error) {
    return NextResponse.json({
      message: "something went wrong",
      error: "",
    });
  }
}
