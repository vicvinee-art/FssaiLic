import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, service } = body;

    // Basic validation
    if (!name || !email || !phone || !service) {
      return NextResponse.json(
        { message: "All fields are required." },
        { status: 400 }
      );
    }

    // Simulate saving to database or sending email
    console.log("New Consultation Request:", {
      name,
      email,
      phone,
      service,
    });

    return NextResponse.json(
      { message: "Consultation request submitted successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: "Internal Server Error" },
      { status: 500 }
    );
  }
}