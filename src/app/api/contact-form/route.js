import { NextResponse, NextRequest } from "next/server";
import mailer from "nodemailer";

const emailRegex = /^(?![.-])[A-Za-z0-9.-]{3,}@[A-Za-z0-9]{2,}\.[A-Za-z]{2,}$/;
const nameRegex = /^[a-zA-Z]+( [a-zA-Z]+)*$/;

export async function POST(req) {
  try {
    const body = await req.json();
    const { name, email, message } = body;
    console.log(name, email, message);
    if (!name || name.length < 3) {
      return NextResponse.json({ status: false, message: "Geçerli bir isim giriniz" });
    }
    if (!email || email.length < 3 || !email.includes("@") || !email.includes(".")) {
      return NextResponse.json({ status: false, message: "Geçerli bir e-posta adresi giriniz." });
    }

    if (!message || message.length < 10) {
      return NextResponse.json({ status: false, message: "Mesajınız en az 10 karakter uzunluğunda olmalıdır." });
    }

    let htmlResponse = `
      <p><strong>Adınız:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Mesajınız:</strong> ${message}</p>
    `;

    const transporter = mailer.createTransport({
      host: "mailing.weecoins.org",
      port: 465,
      secure: true,
      auth: {
        user: "mail@weecard.org",
        pass: "Weecard2025!",
      },
      tls: {
        rejectUnauthorized: false,
        minVersion: "TLSv1.2",
      },
    });

    // mail@weecard.org
    const mailOptions = {
      from: "mail@weecard.org",
      to: "mail@weecard.org",
      subject: "WeeCoins Premium - Web Sayfasından Mesaj",
      html: htmlResponse,
    };

    let mailResult = await transporter.sendMail(mailOptions);

    return NextResponse.json({
      status: true,
      message: "Mesajınız başarıyla gönderildi!",
    });
  } catch (error) {
    console.error("E-posta gönderilirken hata oluştu:", error);
    return NextResponse.json({
      status: false,
      message: "Bir hata oluştu, lütfen tekrar deneyiniz.",
    });
  }
}
