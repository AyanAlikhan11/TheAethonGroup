import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      type,
      name,
      email,
      phone,
      company,
      referralName,
      message,
    } = body;

    // Validation
    if (!name || !email || !type) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, Email and Type are required",
        },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Dynamic Titles
    const formTitle =
      type === "business"
        ? "Business Referral"
        : type === "candidate"
        ? "Candidate Referral"
        : "Project Inquiry";

    // ---------------- ADMIN EMAIL ----------------
    await transporter.sendMail({
      from: `"AETHON Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: `🔥 New ${formTitle} from ${name}`,
      html: `
        <div style="font-family:Arial;padding:20px">
          <h2 style="color:#d4af37;">New ${formTitle}</h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || "N/A"}</p>

          ${
            company
              ? `<p><strong>Company:</strong> ${company}</p>`
              : ""
          }

          ${
            referralName
              ? `<p><strong>Candidate Name:</strong> ${referralName}</p>`
              : ""
          }

          <p><strong>Type:</strong> ${formTitle}</p>

          <p><strong>Message:</strong><br/>
          ${message || "N/A"}</p>
        </div>
      `,
    });

    // ---------------- AUTO REPLY ----------------
    await transporter.sendMail({
      from: `"THE AETHON GROUP" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `We Received Your ${formTitle} 🚀`,
      html: `
        <div style="font-family:Arial;padding:20px">
          <h2 style="color:#d4af37;">Hello ${name},</h2>

          <p>Thank you for contacting <strong>THE AETHON GROUP</strong>.</p>

          <p>We successfully received your
          <strong>${formTitle}</strong>.</p>

          <p>Our team will review it and contact you shortly.</p>

          <br/>

          <p>Regards,</p>
          <p><strong>THE AETHON GROUP</strong></p>
        </div>
      `,
    });

    return NextResponse.json({
      success: true,
      message: "Referral submitted successfully",
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