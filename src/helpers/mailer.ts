import nodemailer from "nodemailer";
import User from "../models/userModel";

export const sendEmail = async ({ email, emailType, userId }: any) => {
  try {
    // create a hased token

    var transport = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "3fd364695517df",
        pass: "7383d58fd399cf",
        //TODO: add these credentials to .env file
      },
    });

    const mailOptions = {
      from: "praveenkumar1999@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY" ? "Verify your email" : "Reset your password",
      html: `<p>Click <a href="${
        process.env.DOMAIN
      }/verifyemail?">here</a> to ${
        emailType === "VERIFY" ? "verify your email" : "reset your password"
      }
            or copy and paste the link below in your browser. <br> ${
              process.env.DOMAIN
            }/verifyemail?token=
            </p>`,
    };

    const mailresponse = await transport.sendMail(mailOptions);
    return mailresponse;
  } catch (error: any) {
    throw new Error(error.message);
  }
};
