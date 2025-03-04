import React, { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = ({}) => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm('service_chlpnxj', 'template_f86u3rn', form.current, {
        publicKey: '1eFFMPO8rLJ7n8h2F',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error: {text: string}) => {
          console.error('FAILED...', error);
        }
      );
  };

  return (
    <section className='flex flex-col border-1 rounded-xl p-10 w-full'>
      <form className='flex flex-col gap-8' ref={form} onSubmit={sendEmail}>
        <div className='flex justify-between gap-20'>
          
          <div className='flex flex-col text-3xl w-full'>
            <label>Name</label>
            <input className='border-b-1 h-16' type="text" name="user_name" />
          </div>
          
          <div className='flex flex-col text-3xl w-full'>
            <label>Email</label>
            <input className='border-b-1 h-16' type="email" name="user_email" />
          </div>

        </div>
        <div className='text-3xl flex-col flex gap-5'>
          <label>Message</label>
          <textarea className='border-1 rounded-lg h-72 p-2 text-2xl' name="message"/>
        </div>
        <div className='justify-center flex'>
          <input className='cursor-pointer border-1 rounded-full w-56 p-5 text-3xl' type="submit" value="Send" />
        </div>
      </form>
    </section>
  );
};
