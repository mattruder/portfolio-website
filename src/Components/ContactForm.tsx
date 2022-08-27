import React, { useState } from 'react'
import emailjs from 'emailjs-com'
import { init } from 'emailjs-com';
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
    <div id="contact-form">
      <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} />
      <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} />
      <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea>
      <button onClick={submit}>Send Message</button>

    </div>
  )
}

export default ContactForm

//   <span className={emailSent ? 'visible' : undefined}>Thank you for your message, we will be in touch in no time!</span>
