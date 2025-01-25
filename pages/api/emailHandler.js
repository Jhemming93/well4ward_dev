import nodemailer from "nodemailer";

export default async function emailHandler(req, res) {
  if (req.method === "POST") {
    const { name, email, subject, category, message } = req.body;

    if (!name || !email || !subject || !category || !message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    try {
      // Configure the nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: "Gmail", // Use your preferred email service
        auth: {
          user: process.env.EMAIL_USER, // Set in your environment variables
          pass: process.env.EMAIL_PASS, // Set in your environment variables
        },
      });

      // Email options
      const mailOptions = {
        from: email,
        to: "well4wardsetup@gmail.com",
        subject: `New Contact Form Submission: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nCategory: ${category}\nMessage: ${message}`,
      };

      // Send the email
      await transporter.sendMail(mailOptions);

      return res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
      console.error("Error sending email:", error);
      return res.status(500).json({ error: "Failed to send email." });
    }
  } else {
    return res.status(405).json({ error: "Method not allowed." });
  }
}
