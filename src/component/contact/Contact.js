import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
import About from './../About/About';

const Contact = () => {
  const form = useRef();




  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6uoh54d', 'template_xzygi2e', form.current, 'oRxCPRg8ts94tlogr')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
   <section className="contact container section" id='contact'>
   <h2 className='section_title'>Get In Touch</h2>
   <div className='contact_container grid'>
        <div className="contact_info">
           <h3 className='contact_title'>Let's talk about everything!</h3>
           <p className='contact_details'>Don't like forms? Send me an email. 👋</p>
         </div>
         <form className='contact_form' ref={form} onSubmit={sendEmail}>
          <div className='contact_form-group'>
            <div className='contact_form-div'>
              <input type='text' className='contact_form-input' 
              name='fromName'
              placeholder='Insert your name' />
            </div>

            <div className='contact_form-div'>
              <input type='email' className='contact_form-input' 
              name='email'
              placeholder='Insert your email' />
            </div>
            </div>

            <div className='contact_form-div'>
              <input type='text' className='contact_form-input' 
              name='subjsct'
              placeholder='Insert your subject' />
            </div>
            

            <div className='contact_form-div contact_form-erea'>
             <textarea 
             name='message'
             cols="30"
              rows="10" 
              className='contact_form-input' 
             placeholder='write your message' ></textarea>
            </div>

          
          <button className='btn'>Send Message</button>
         </form>
      </div>
   </section>


  )
}

export default Contact
