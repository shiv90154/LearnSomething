// api/sendMail.js
const nodemailer = require('nodemailer');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { name, email, subject, message } = req.body;

  // Validate required fields
  if (!name || !email || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  try {
    // Send email to admin
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_TO,
      subject: `New Enrollment: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366F1;">New Enrollment Request</h2>
          <div style="background: #f8f9fa; padding: 20px; border-radius: 8px;">
            <p><strong>Course:</strong> ${subject}</p>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Message:</strong></p>
            <p style="background: white; padding: 15px; border-radius: 5px; border-left: 4px solid #6366F1;">
              ${message.replace(/\n/g, '<br>')}
            </p>
          </div>
          <p style="color: #666; margin-top: 20px;">
            This message was sent from the EduPlatform contact form.
          </p>
        </div>
      `,
    });

    // Send confirmation email to student
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: `Enrollment Confirmation: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366F1;">Thank You for Your Interest!</h2>
          <p>Dear <strong>${name}</strong>,</p>
          <p>We've received your enrollment request for <strong>${subject}</strong> and are excited about your interest in our program!</p>
          
          <div style="background: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #0369a1; margin-top: 0;">What's Next?</h3>
            <ul style="color: #334155;">
              <li>Our team will review your request within 24-48 hours</li>
              <li>We'll contact you with course details, schedule, and fees</li>
              <li>You'll receive guidance on the next steps for enrollment</li>
            </ul>
          </div>

          <p>If you have any immediate questions, feel free to reply to this email.</p>
          
          <p>Best regards,<br>
          <strong>The EduPlatform Team</strong></p>
          
          <hr style="margin: 30px 0; border: none; border-top: 1px solid #e5e5e5;">
          <p style="color: #666; font-size: 12px;">
            EduPlatform - Empowering College Minds Through Learning & Growth<br>
            Email: hello@eduplatform.com | Phone: +1 (555) 123-4567
          </p>
        </div>
      `,
    });

    res.status(200).json({ message: 'Emails sent successfully' });
  } catch (error) {
    console.error('Email error:', error);
    res.status(500).json({ message: 'Failed to send email' });
  }
}