import React from 'react';
import emailjs from 'emailjs-com';
import { Form, Button } from 'react-bootstrap';
import './pages.css';
import Footer from './Footer';
import Map from './Map'

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
        <img className="topImg" src="church2.jpg"></img>
      </div>
      <div className="mainCont">
        <div className="textCont">
          <h2>Contact Us:</h2>
          <p>Here you can find our phone number and address. You can also send us an email with any
          questions or suggestions you might have. Feel free to shoot us a message!
          </p>
        </div>
        <div className="textCont">
          <h5>(423) 756-1953</h5>
          <h5>811 RUNYAN DRIVE, CHATTANOOGA, TN, 37405</h5>
        </div>
        <Form className="contact-form" onSubmit={sendEmail}>
          <h3>Email Us</h3>
          <Form.Control type="hidden" name="contact_number" />
          <Form.Label className="formText">Name:</Form.Label>
          <Form.Control type="text" name="user_name" />
          <Form.Label className="formText" >Email:</Form.Label>
          <Form.Control type="email" name="user_email" />
          <Form.Label className="formText" >Message:</Form.Label>
          <Form.Control className="contact-control" as="textarea" name="message" />
          <Button variant="info" className="formText" id="button" type="submit" value="Send">Send</Button>
        </Form>
        <div className="theMap"><Map />
        </div>
      </div>
      <Footer />
    </div>
  );
}
