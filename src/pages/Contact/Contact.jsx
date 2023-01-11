import React from 'react';
import Tilt from 'react-tilt';
import './Contact.scss';
import { usePostDiscord } from '../../hooks/api/discord';
import * as Yup from 'yup';
import { Formik, Form } from 'formik';
import { FormField } from '../../components';

export default function Contact() {
  const discordMutation = usePostDiscord();

  // function
  const handleSubmit = (values) => {
    const { name, email, message } = values;
    discordMutation.mutate(
      { channel: 'nimbus', name, email, message },
      {
        onError: (err) => {
          console.log(err);
        },
      }
    );
  };
  return (
    <div className="contact">
      <div className="contactpage-heading">
        <h3>Contact</h3>
      </div>
      <div className="contact-bpnpox">
        <div className="contactpage-nimbuslogo">
          <Tilt options={{ max: 45, transition: true, scale: 1 }}>
            <img src="./images/nimbus-white.png" alt="" width="300px" />
          </Tilt>
        </div>
        <div className="contact-input">
          <div className="contact-heading">ContactUs/Feedback</div>
          <div className="contact-box">
            <Formik
              initialValues={{
                name: '',
                email: '',
                message: '',
              }}
              validationSchema={contactUsSchema}
              onSubmit={handleSubmit}
            >
              {({ errors, values, touched, handleChange }) => (
                <Form>
                  <label htmlFor="">Name</label>
                  <FormField name="name" placeholder="Your Name" />
                  <label htmlFor="">E-mail</label>
                  <FormField name="email" placeholder="example@gmail.com" />
                  <label htmlFor="">Message</label>
                  <FormField
                    component="textarea"
                    name="message"
                    placeholder="Your message"
                  />
                  <button type="submit">Submit</button>
                  <div>
                    {discordMutation.isError && 'Something went wrong!'}
                    {discordMutation.isSuccess && 'Message Sent.'}
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </div>
  );
}
const contactUsSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Required'),
  email: Yup.string().email('Invalid email').required('Required'),
  message: Yup.string().min(2, 'Too Short!').required('Required'),
});
