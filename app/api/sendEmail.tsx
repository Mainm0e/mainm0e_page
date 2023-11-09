// api/sendEmail.tsx

import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const formData: FormData = req.body; // Make sure to define the FormData type

    const formSubmitResponse = await fetch("https://formsubmit.co/ajax/caccb5383225b16fe863af2f612bfbda", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        name: `from ${formData.fullname} <${formData.email}>`,
        message: `
         subject: ${formData.subject}
         message: ${formData.message}`,
      }),
    });

    const data = await formSubmitResponse.json();
    res.status(200).json(data);
  } catch (error) {
    console.error('Error sending email:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}

// Define the FormData type (replace with your actual structure)
interface FormData {
  fullname: string;
  email: string;
  subject: string;
  message: string;
}
