import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);
const TO_EMAIL = 'khainglwinthantycc@gmail.com';

export async function POST(request) {
    try {

        const { name, email, message } = await request.json();
        if (!name || !email || !message) {
            return NextResponse.json({ error: 'Missing required fields' }, { status: 400 });
        }

        const data = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>',
            to: [TO_EMAIL],
            reply_to: email,
            subject: `Portfolio Contact: Message from ${name}`,
            html: `
                <html>
                  <body>
                    <h2>New Contact Form Submission</h2>
                    <p><strong>Name:</strong> ${name}</p>
                    <p><strong>Email:</strong> ${email}</p>
                    <h3>Message:</h3>
                    <p style="white-space: pre-wrap; padding: 10px; border: 1px solid #ccc;">${message}</p>
                  </body>
                </html>
            `,
        });
        return NextResponse.json({ success: true, data });

    } catch (error) {

        console.error('Resend Error:', error);
        return NextResponse.json({ error: 'Failed to send message via API.' }, { status: 500 });
    }
}