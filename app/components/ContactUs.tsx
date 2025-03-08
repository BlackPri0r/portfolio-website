import React, { FormEvent, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
  const form = useRef<HTMLFormElement>(null);
  const [isSending, setIsSending] = useState(false);
  const [message, setMessage] = useState<string | null>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    setIsSending(true);

    emailjs
      .sendForm('service_chlpnxj', 'template_f86u3rn', form.current, '1eFFMPO8rLJ7n8h2F')
      .then(
        () => {
          setMessage('Email sent successfully!');
          form.current?.reset();
        },
        (error) => {
          console.error('Failed to send email:', error);
          setMessage('Failed to send email. Please try again later.');
        }
      )
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <section className='flex flex-col border-1 rounded-xl p-10 w-full'>
      <form className='flex flex-col gap-8' ref={form} onSubmit={sendEmail}>
        <div className='flex justify-between gap-20'>
          <div className='flex flex-col text-2xl w-full'>
            <label>Name</label>
            <input className='border-b-1 h-12' type="text" name="user_name" required />
          </div>
          <div className='flex flex-col text-2xl w-full'>
            <label>Email</label>
            <input className='border-b-1 h-12' type="email" name="user_email" required />
          </div>
        </div>
        <div className='text-2xl flex-col flex gap-5'>
          <label>Message</label>
          <textarea className='border-1 rounded-lg h-72 p-2 text-2xl' name="message" required />
        </div>
        <div className='justify-center flex'>
          <input
            className={`cursor-pointer border-1 rounded-full w-48 p-4 text-2xl ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
            type="submit"
            value={isSending ? 'Sending...' : 'Send'}
            disabled={isSending}
          />
        </div>
        {message && <p className={`text-xl ${message.includes('Failed') ? 'text-red-500' : 'text-green-500'}`}>{message}</p>}
      </form>
    </section>
  );
};
