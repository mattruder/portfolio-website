import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com';
import '../Styles/ContactForm.css'
init('user_id');


function ContactForm() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [emailSent, setEmailSent] = useState(false);

  const submit = () => {
    if (name && email && message) {

           const serviceId = 'service_w8tlljd';
           const templateId = 'template_czrlb1i';
           const userId = 'Uk0CHCVMYwJ8LERSK';
           const templateParams = {
               name,
               email,
               message
           };

           emailjs.send(serviceId, templateId, templateParams, userId)
               .then(response => console.log(response))
               .then(error => console.log(error));

        setName('');
        setEmail('');
        setMessage('');
        setEmailSent(true);
    } else {
        alert('Please fill in all fields.');
    }
  }

  const isValidEmail = (email: any) => {
      const regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return regex.test(String(email).toLowerCase());
  };


  return (
    <div className='contact'>
    <div className="contact-form-text">
      <p>Shoot me a message for all inquiries and I'll get back to you ASAP!</p>
    </div>
    <div id="contact-form">
      <input className='name-input' type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
      <input className='email-input' type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
      <textarea className='message-input' placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
      <button className='contact-btn' onClick={submit}>Send Message</button>
    </div>
    </div>
  )
}

export default ContactForm

//   <span className={emailSent ? 'visible' : undefined}>Thank you for your message, we will be in touch in no time!</span>
