import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Button } from 'react-bootstrap';
import './pages.css'

export default function Contact() {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'church', e.target, 'user_ShoPmwZqDZMyJyAme7PzU')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  }

  return (
    <div className="main">
      <div className="imgCont">
                <img className="topImg" src="sports.jpg"></img>
      </div>
      <div className="mainCont">
        <Form className="contact-form" onSubmit={sendEmail}>
          <h3>Email Us</h3>
          <Form.Control type="hidden" name="contact_number" />
          <Form.Label className="formText">Name:</Form.Label>
          <Form.Control type="text" name="user_name" />
          <Form.Label className="formText" >Email:</Form.Label>
          <Form.Control type="email" name="user_email" />
          <Form.Label className="formText" >Message:</Form.Label>
          <Form.Control className="contact-control" name="message" />
          <Button className="formText" id="button" type="submit" value="Send">Send</Button>
        </Form>
      </div>
    </div>
  );
}
