import { Resend } from "resend";

const MY_EMAIL = "d.vamsitej333@gmail.com"; // Your email for notifications

export async function POST(req) {
  const resend = new Resend(process.env.RESEND_API_KEY);
  try {
    const { email, name, message } = await req.json();

    console.log("Processing form submission from:", email);

    const userEmailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Thank You for Your Message!</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            font-family: Arial, sans-serif;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .header {
            background-color: #6b48ff;
            padding: 20px;
            text-align: center;
            color: #ffffff;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            padding: 30px;
          }
          .content p {
            margin: 0 0 15px;
            font-size: 16px;
            line-height: 1.5;
          }
          .message-box {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 6px;
            margin: 15px 0;
            border-left: 4px solid #6b48ff;
          }
          .footer {
            text-align: center;
            padding: 20px;
            font-size: 14px;
            color: #666;
            border-top: 1px solid #eee;
          }
          a {
            color: #6b48ff;
            text-decoration: none;
            font-weight: 500;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>Thank You, ${name}!</h1>
          </div>
          <div class="content">
            <p>Hi ${name},</p>
            <p>Thank you for reaching out! I’ve received your message, and I’m excited to connect with you. Here’s what you sent me:</p>
            <div class="message-box">
              <p><strong>Your Message:</strong></p>
              <p>${message}</p>
            </div>
            <p>I’ll review your message and get back to you as soon as possible—usually within 24-48 hours. In the meantime, feel free to check out my <a href="https://vamsitejchowdary.com">portfolio</a> or connect with me on <a href="https://www.linkedin.com/in/vamsitejchowdary/">LinkedIn</a>.</p>
            <p>Looking forward to chatting soon!</p>
            <p>Best regards,<br>Vamsi Tej Chowdary Dabbar<br>Full Stack Developer</p>
          </div>
          <div class="footer">
            <p>© 2025 Vamsi Tej Chowdary. All rights reserved.</p>
            <p><a href="mailto:d.vamsitej333@gmail.com">d.vamsitej333@gmail.com</a> | <a href="tel:+15132662328">+1 (513) 266-2328</a></p>
          </div>
        </div>
      </body>
      </html>
    `;

    // 2. Email to you (Vamsi) - Notification of new contact submission
    const myEmailHtml = `
      <!DOCTYPE html>
      <html lang="en">
      <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Contact Form Submission</title>
        <style>
          body {
            margin: 0;
            padding: 0;
            background-color: #f4f4f4;
            font-family: Arial, sans-serif;
            color: #333;
          }
          .container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #ffffff;
            border-radius: 8px;
            overflow: hidden;
            box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
          }
          .header {
            background-color: #6b48ff;
            padding: 20px;
            text-align: center;
            color: #ffffff;
          }
          .header h1 {
            margin: 0;
            font-size: 24px;
          }
          .content {
            padding: 30px;
          }
          .content p {
            margin: 0 0 15px;
            font-size: 16px;
            line-height: 1.5;
          }
          .info-box {
            background-color: #f8f9fa;
            padding: 15px;
            border-radius: 6px;
            margin: 15px 0;
            border-left: 4px solid #6b48ff;
          }
          .footer {
            text-align: center;
            padding: 20px;
            font-size: 14px;
            color: #666;
            border-top: 1px solid #eee;
          }
          a {
            color: #6b48ff;
            text-decoration: none;
            font-weight: 500;
          }
          a:hover {
            text-decoration: underline;
          }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Contact Form Submission</h1>
          </div>
          <div class="content">
            <p>Hi Vamsi,</p>
            <p>You’ve received a new message from your portfolio website’s contact form. Here are the details:</p>
            <div class="info-box">
              <p><strong>Name:</strong> ${name}</p>
              <p><strong>Email:</strong> ${email}</p>
              <p><strong>Message:</strong></p>
              <p>${message}</p>
            </div>
            <p>You can reply directly to this email to respond to <a href="mailto:${email}">${name}</a>, or use the contact details above.</p>
            <p>Happy coding!</p>
          </div>
          <div class="footer">
            <p>Sent from your Portfolio Website</p>
            <p><a href="https://vamsitejchowdary.com">vamsitejchowdary.com</a></p>
          </div>
        </div>
      </body>
      </html>
    `;

    // Send both emails using Resend API
    const [userEmailData, myEmailData] = await Promise.all([
      resend.emails.send({
        from: "Vamsi Tej Chowdary <hello@vamsitejchowdary.com>",
        to: email,
        subject: "Thank You for Your Message!",
        html: userEmailHtml,
        headers: {
          "Reply-To": MY_EMAIL, // Replies go to you
        },
      }),
      resend.emails.send({
        from: "Portfolio Contact <hello@vamsitejchowdary.com>",
        to: MY_EMAIL, // Your email
        subject: `New Contact Form Submission from ${name}`,
        html: myEmailHtml,
      }),
    ]);

    console.log("Emails sent successfully:", { userEmailData, myEmailData });
    return Response.json({
      success: true,
      data: { userEmailData, myEmailData },
    });
  } catch (error) {
    console.error("Email sending error:", error);
    return Response.json(
      { success: false, error: "Failed to send email" },
      { status: 500 }
    );
  }
}
