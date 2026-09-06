const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const { Resend } = require("resend");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

const resend = new Resend(process.env.RESEND_API_KEY);

app.get("/", (req, res) => {
  res.json({
    message: "Thirumala Construction Backend is running!",
  });
});

app.post("/api/enquiry", async (req, res) => {
  try {
    const { name, phone, email, message } = req.body;

    if (!name || !phone || !email || !message) {
      return res.status(400).json({
        success: false,
        message: "All fields are required.",
      });
    }

    const { data, error } = await resend.emails.send({
      from: "Thirumala Construction <onboarding@resend.dev>",
      to: [process.env.OWNER_EMAIL],
      subject: `New Quote Request - ${name}`,
      replyTo: email,
      text: `
New Quote Request

Name: ${name}
Phone: ${phone}
Email: ${email}

Project Requirement:
${message}
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return res.status(500).json({
        success: false,
        message: "Failed to send email.",
      });
    }

    res.json({
      success: true,
      message: "Enquiry sent successfully.",
      id: data.id,
    });
  } catch (error) {
    console.error("Server error:", error);

    res.status(500).json({
      success: false,
      message: "Something went wrong.",
    });
  }
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});