export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, mobile } = body;

    if (!name || !email || !mobile) {
      return Response.json(
        { message: "All fields are required" },
        { status: 400 }
      );
    }

    console.log("Consultation Data:", body);

    return Response.json(
      { message: "Consultation request received"},
      { status: 200 }
    );
  } catch (error) {
    return Response.json(
      { message: "Server error" },
      { status: 500 }
    );
  }
}

