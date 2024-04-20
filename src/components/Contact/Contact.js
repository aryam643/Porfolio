import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

import { useState } from 'react';
import { contact } from '../../portfolio';
import './Contact.css';

// Your Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDnx1y8eIBoSJhqekAOCZydjYqwcMDpXeY",
  authDomain: "portfolio-47fc8.firebaseapp.com",
  databaseURL: "https://portfolio-47fc8-default-rtdb.firebaseio.com",
  projectId: "portfolio-47fc8",
  storageBucket: "portfolio-47fc8.appspot.com",
  messagingSenderId: "882654981639",
  appId: "1:882654981639:web:6360291be776bcf944c4a2",
  measurementId: "G-JHP75K8TCC"
};
// Check if Firebase is already initialized to prevent multiple initializations
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

const Contact = () => {
  const [userdata, setUserData] = useState({
    name: '',
    email: '',
    message: '',
  });

  if (!contact.email) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    // Remove the redundant initialization
    const database = firebase.database();

    // Push user data to the 'contacts' node in the database
    database.ref('contacts').push(userdata);

    // Reset the form after submitting
    setUserData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <section className='section contact center' id='contact'>
      <h2 className='section__title'>Get in Touch</h2>
      <p>I would love to hear from you! Whether you have a question or just want to say hi, feel free to drop a message.</p>
      <form onSubmit={handleFormSubmit}>
        <div className='form-group'>
          <label htmlFor='name'>
            Name:
            <input type='text' id='name' name='name' value={userdata.name} onChange={handleInputChange} placeholder='Your Name' />
          </label>
        </div>
        <div className='form-group'>
          <label htmlFor='email'>
            Email:
            <input type='text' id='email' name='email' value={userdata.email} onChange={handleInputChange} placeholder='Your Email' />
          </label>
        </div>
        <div className='form-group'>
          <label htmlFor='message'>
            Message:
            <textarea id='message' name='message' value={userdata.message} onChange={handleInputChange} placeholder='Your Message' />
          </label>
        </div>
        <button type='submit' className='btn btn--outline'>
          Send
        </button>
      </form>
    </section>
  );
};

export default Contact;
