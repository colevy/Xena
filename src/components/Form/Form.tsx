import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Container, ContainerSucces } from './styles';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function Form() {
  const [state, handleSubmit] = useForm('xeoeyajg'); // Replace 'xeoeyajg' with your actual Formspree form ID

  if (state.succeeded) {
    toast.success('Message sent!', {
      position: toast.POSITION.BOTTOM_LEFT,
      pauseOnFocusLoss: false,
      closeOnClick: true,
      hideProgressBar: false,
      toastId: 'succeeded',
    });

    return (
      <ContainerSucces>
        <h3>Message sent! Can't wait to read all the hate mail thanks so much dude.</h3>
        <button
          style={{ margin: '10px' }}
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Back to the top
        </button>
        <button
          style={{ margin: '10px' }}
          onClick={() => {
            window.location.reload();
          }}
        >
          Send another message
        </button>
        <ToastContainer />
      </ContainerSucces>
    );
  }

  return (
    <Container>
      <h2>Touch me</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email Address</label>
        <input id="email" type="email" name="email" required />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        
        <label htmlFor="message">Message me baby cakes</label>
        <textarea id="message" name="message" required />
        <ValidationError prefix="Message" field="message" errors={state.errors} />
        
        <button type="submit" disabled={state.submitting}>
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}
