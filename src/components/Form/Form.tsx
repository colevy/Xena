import { Container, ContainerSucces } from './styles';
import { useForm, ValidationError } from '@formspree/react';
import { toast, ToastContainer } from 'react-toastify';
import { useEffect, useState } from 'react';
import validator from 'validator';

export function Form() {
  const [state, handleSubmit] = useForm('xknkpqry');
  const [validEmail, setValidEmail] = useState(false);
  const [message, setMessage] = useState('');

  function verifyEmail(email: string) {
    if (validator.isEmail(email)) {
      setValidEmail(true);
    } else {
      setValidEmail(false);
    }
  }

  useEffect(() => {
    if (state.succeeded) {
      toast.success('Message sent!', {
        position: toast.POSITION.BOTTOM_LEFT,
        pauseOnFocusLoss: false,
        closeOnClick: true,
        hideProgressBar: false,
        toastId: 'succeeded',
      });
    }
  }, [state.succeeded]);

  if (state.succeeded) {
    return (
      <ContainerSucces>
        <h3>Message sent!</h3>
        <button
          onClick={() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
        >
          Back to the top
        </button>
        <ToastContainer />
      </ContainerSucces>
    );
  }

  return (
    <Container>
      <h2>Get in touch using the form</h2>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(e);
          const target = e.target as HTMLFormElement & {
            email: { value: string };
            message: { value: string };
            reset: () => void;
          };
          fetch('https://formspree.io/f/xknkpqry', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              email: target.email.value,
              message: target.message.value,
            }),
          })
            .then((response) => {
              if (response.ok) {
                setMessage('');
                target.reset();
                toast.success('Message sent!', {
                  position: toast.POSITION.BOTTOM_LEFT,
                  pauseOnFocusLoss: false,
                  closeOnClick: true,
                  hideProgressBar: false,
                  toastId: 'succeeded',
                });
              } else {
                toast.error('Failed to send message. Please try again.', {
                  position: toast.POSITION.BOTTOM_LEFT,
                  pauseOnFocusLoss: false,
                  closeOnClick: true,
                  hideProgressBar: false,
                  toastId: 'failed',
                });
              }
            })
            .catch(() => {
              toast.error('Failed to send message. Please try again.', {
                position: toast.POSITION.BOTTOM_LEFT,
                pauseOnFocusLoss: false,
                closeOnClick: true,
                hideProgressBar: false,
                toastId: 'failed',
              });
            });
        }}
      >
        <input
          placeholder="Email"
          id="email"
          type="email"
          name="email"
          onChange={(e) => {
            verifyEmail(e.target.value);
          }}
          required
        />
        <ValidationError prefix="Email" field="email" errors={state.errors} />
        <textarea
          required
          placeholder="Send a message to get started."
          id="message"
          name="message"
          onChange={(e) => {
            setMessage(e.target.value);
          }}
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
        />
        <button
          type="submit"
          disabled={state.submitting || !validEmail || !message}
        >
          Submit
        </button>
      </form>
      <ToastContainer />
    </Container>
  );
}
