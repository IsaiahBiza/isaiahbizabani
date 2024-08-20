// pages/api/send-email.ts

import { NextApiRequest, NextApiResponse } from 'next';
import mailgun from 'mailgun-js';

const mg = mailgun({
  apiKey: process.env.MAILGUN_API_KEY!,
  domain: process.env.MAILGUN_DOMAIN!,
});

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({ message: 'Name and email are required' });
  }

  const data = {
    from: `Newsletter <${process.env.MAILGUN_SENDER_EMAIL}>`,
    to: 'isaiah@isaiahbizabani.com', // Replace with your email address
    subject: 'New Newsletter Subscription',
    text: `Name: ${name}\nEmail: ${email}`,
  };

  try {
    await mg.messages().send(data);
    res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ success: false, error: (error as Error).message });
  }
}

