import { Container } from "./styles";
import emailIcon from "../../assets/email-icon.svg";
import phoneIcon from "../../assets/phone-icon.svg";
import { Form } from "../Form/Form";

export function Contact() {
  return (
    <Container id="contact">
      <header>
        <h2>Contact</h2>
        <p>Ready to work together? </p>
        <p>Contact me now to get in touch!</p>
      </header>
      <div className="contacts">
        <div>
          <a href="mailto:colelevy08@gmail.com"><img src={emailIcon} alt="Email" /></a> 
          <a href="mailto:colelevy08@gmail.com">colelevy08@gmail.com</a>
        </div>
        <div>
          <a href="tel:+15184104999"><img src={phoneIcon} alt="Phone No" /></a>
          <a href="tel:+15184104999">(+1) (518) 410-4999</a>
        </div>  
      </div>
      <Form />
    </Container>
  );
}