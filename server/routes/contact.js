const express = require('express');
const router = express.Router();
const nodemailer = require('nodemailer');
const Contact = require('../models/contact');

router.post('/', async (req, res) => {
  const { name, phone, message } = req.body;

  if (!name || !phone || !message) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  if (name.length > 50 || phone.length !== 10) {
    return res.status(400).json({ error: 'Validation failed' });
  }

  // ✅ Save to DB (if MongoDB enabled)
  if (Contact) {
    const newContact = new Contact({ name, phone, message });
    await newContact.save();
  }

  // ✅ Send email notification
  if (process.env.MAIL_USER) {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.MAIL_USER,
      to: process.env.MAIL_RECEIVER,
      subject: 'New Contact Form Submission',
      text: `Name: ${name}\nPhone: ${phone}\nMessage: ${message}`,
    });
  }

  res.status(200).json({ success: true, message: 'Form submitted successfully' });
});

module.exports = router;