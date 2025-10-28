import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import '../index.css';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
      publicKey: 'YOUR_PUBLIC_KEY',
    })
    .then(() => {
      setStatus("Message sent successfully!");
      form.current.reset();
    }, (error) => {
      setStatus("Sending failed. Please try again.");
    });
  };

  return (
    <main className="contact-fullpage">
      <section className="contact-form-section">
        <h1>Contact Manikandan</h1>
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <label htmlFor="user_name">Your Name</label>
          <input type="text" name="user_name" id="user_name" required placeholder="Enter your name" />

          <label htmlFor="user_email">Your Email</label>
          <input type="email" name="user_email" id="user_email" required placeholder="Enter your email" />

          <label htmlFor="message">Message</label>
          <textarea name="message"  id="message" required placeholder="Write your message" />

          <button type="submit" className="send-button">Send Message</button>
        </form>
        {status && <div className="form-status">{status}</div>}
      </section>
    </main>
  );
}
