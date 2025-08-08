import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validazione
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Tutti i campi sono obbligatori' },
        { status: 400 }
      );
    }

    // Configurazione del trasporto email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // Configurazione del messaggio
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'giorgiacherubinocoach@gmail.com',
      subject: `Nuovo messaggio da ${name}`,
      text: `
Nome: ${name}
Email: ${email}

Messaggio:
${message}
      `,
      html: `
<h2>Nuovo messaggio dal sito web</h2>
<p><strong>Nome:</strong> ${name}</p>
<p><strong>Email:</strong> ${email}</p>
<h3>Messaggio:</h3>
<p>${message.replace(/\\n/g, '<br>')}</p>
      `,
    };

    // Invio dell'email
    await transporter.sendMail(mailOptions);

    // Email di conferma al mittente
    const confirmationMailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Grazie per avermi contattato!',
      text: `
Ciao ${name},

Grazie per avermi contattato! Ho ricevuto il tuo messaggio e ti risponderò il prima possibile.

Nel frattempo, puoi seguirmi su Instagram @giorgia.cherubino per contenuti quotidiani sulla crescita personale.

A presto,
Giorgia Cherubino
Life Coach
      `,
      html: `
<h2>Grazie per avermi contattato!</h2>
<p>Ciao ${name},</p>
<p>Grazie per avermi contattato! Ho ricevuto il tuo messaggio e ti risponderò il prima possibile.</p>
<p>Nel frattempo, puoi seguirmi su Instagram <a href="https://www.instagram.com/giorgia.cherubino">@giorgia.cherubino</a> per contenuti quotidiani sulla crescita personale.</p>
<br>
<p>A presto,<br>
Giorgia Cherubino<br>
Life Coach</p>
      `,
    };

    await transporter.sendMail(confirmationMailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Errore nell\'invio dell\'email:', error);
    return NextResponse.json(
      { error: 'Errore nell\'invio del messaggio' },
      { status: 500 }
    );
  }
}
