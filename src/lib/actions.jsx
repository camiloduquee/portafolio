"use server";

// import { EmailTemplate } from "../../../components/EmailTemplate";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { ValidateString } from "./utils";
import ContactFormEmail from "@/email/contactFormEmail";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(formDate) {
  const email = formDate.get("email");
  const message = formDate.get("message");
  if (!ValidateString(email)) {
    return { error: "Correo no valido." };
  }
  if (!ValidateString(message)) {
    return { error: "Mensaje no valido." };
  }
  let data;
  try {
 data = await resend.emails.send({
      from: "Formulario <onboarding@resend.dev>",
      to: "hectorg.devp@gmail.com",
      subject: "Desarrollo - Form",
      reply_to: email,
      react: <ContactFormEmail email={email} message={message} />,
    });
  } catch (error) {
      return {
      error: error.message,
    };
  }
  return { data };
}
