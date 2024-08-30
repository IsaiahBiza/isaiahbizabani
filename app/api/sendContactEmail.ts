import { NextApiRequest, NextApiResponse } from "next"; // Import these types from 'next'
import nodemailer from "nodemailer"; // Import Nodemailer for sending emails

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    // Ensure the request is a POST
    const { name, email, message } = req.body; // Destructure the form data from the request body

    // Create a Nodemailer transporter using your SMTP settings
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465", 10), // Use your SMTP port
      secure: false, // Use 'true' if you're using a port like 465
      auth: {
        user: process.env.SMTP_USER, // Your SMTP username
        pass: process.env.SMTP_PASS, // Your SMTP password
      },
    });

    try {
      // Send the email
      await transporter.sendMail({
        from: email, // The sender's email address
        to: "isaiah@isaiahbizabani.com", // Replace with your own email address
        subject: `Contact form submission from ${name}`, // Email subject
        text: message, // Email text content
        html: `<p><strong>Name:</strong> ${name}</p><p><strong>Email:</strong> ${email}</p><p><strong>Message:</strong><br>${message}</p>`, // Email HTML content
      });

      // Send a success response
      res.status(200).json({ message: "Email sent successfully" });
    } catch (error) {
      console.error("Error sending email:", error);
      res.status(500).json({ message: "Error sending email", error });
    }
  } else {
    // Handle any non-POST requests
    res.status(405).json({ message: "Method Not Allowed" });
  }
}
