import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { name, email, company, phone, service, message } = body;

    // Validation
    if (!name || !email) {
      return NextResponse.json(
        { success: false, message: "Name and Email required" },
        { status: 400 }
      );
    }

    // Transporter
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Admin Email (You Receive Lead)
    await transporter.sendMail({
      from: `"AETHON Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🔥 New Lead from ${name}`,
      html: `
        <div style="font-family:Arial;padding:20px">
          <h2 style="color:#d4af37;">New Lead Received</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>
          <p><strong>Company:</strong> ${company || "N/A"}</p>
          <p><strong>Service:</strong> ${service || "N/A"}</p>
          <p><strong>Message:</strong><br/>${message || "N/A"}</p>
        </div>
      `,
    });

    // Auto Reply to Client
    await transporter.sendMail({
      from: `"THE AETHON GROUP" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We Received Your Request 🚀",
      html: `
        <div style="font-family:Arial;padding:20px">
          <h2 style="color:#d4af37;">Hello ${name},</h2>
          <p>Thank you for contacting <strong>THE AETHON GROUP</strong>.</p>
          <p>We received your request regarding <strong>${service}</strong>.</p>
          <p>Our team will contact you within 24 hours.</p>
          <br/>
          <p>Regards,</p>
          <p><strong>THE AETHON GROUP</strong></p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Lead submitted successfully",
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        success: false,
        message: "Something went wrong",
      },
      { status: 500 }
    );
  }
} 