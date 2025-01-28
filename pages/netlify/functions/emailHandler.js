import nodemailer from "nodemailer";

export default async function emailHandler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, subject, category, message } = req.body;

  // Validate the request body
  if (!name || !email || !subject || !category || !message) {
    return res.status(400).json({ error: "All fields are required." });
  }

  try {
    // Create a Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: "Gmail", // Using Gmail's SMTP service
      auth: {
        user: process.env.EMAIL_USER, // Your email address from environment variables
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    // Define email options
    const mailOptions = {
      from: process.env.EMAIL_USER, // The sender (your email)
      to: process.env.RECEIVER_EMAIL || "well4wardsetup@gmail.com", // The receiver
      subject: `New Contact Form Submission: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nCategory: ${category}\nMessage: ${message}`,
    };

    // Send the email
    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info);

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error.message, error.stack);
    return res
      .status(500)
      .json({ error: "Failed to send email.", details: error.message });
  }
}
