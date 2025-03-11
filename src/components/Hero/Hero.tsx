import { BrowserRouter } from "react-router-dom";
import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import glasses from "../../assets/glasses.png";
import { NavHashLink } from "react-router-hash-link";
import Hello from '../../assets/Hello.gif';
import discoball from "../../assets/discoball.png";
import body from "../../assets/body.png";
import demon from "../../assets/demon.png";
import biglips from "../../assets/biglips.png";
import strap from "../../assets/strap.png";

export function Hero() {
  return (
    <Container id="home">
      <div className="hero-text">
        <ScrollAnimation animateIn="fadeInUp">
          <p> <img src={Hello} alt="Hello" width="20px"/> They Call Me</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.2 * 1000}>
          <h1>Xena White</h1>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.4 * 1000}>
          <h3>Dominatrix</h3>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.6 * 1000}>
          <p className="small-resume">Sex, Drugs, Money</p>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={0.8 * 1000}>
          <BrowserRouter>
            <NavHashLink smooth to="#contact" className="button" style={{ fontSize: '1.2em' }}>Contact</NavHashLink>
          </BrowserRouter>
        </ScrollAnimation>
        <ScrollAnimation animateIn="fadeInUp" delay={1 * 1000}>
          <div className="social-media">
            <ScrollAnimation animateIn="fadeInright" delay={0.20 * 1000}>
              <img src={discoball} alt="Instagram" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInright" delay={0.20 * 1000}>
              <img src={demon} alt="Demon" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInright" delay={0.20 * 1000}>
              <img src={strap} alt="Strap" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInright" delay={0.20 * 1000}>
              <img src={biglips} alt="BigLipa" />
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInright" delay={0.20 * 1000}>
              <img src={body} alt="Body" />
            </ScrollAnimation>
          </div>
        </ScrollAnimation>
      </div>
      <div className="hero-image">
        <ScrollAnimation animateIn="fadeInRight" delay={0.20 * 1000}>
          <img src={glasses} alt="glasses.png" style={{ width: '150%', height: 'auto', maxWidth: '800px', margin: '0 auto' }} />
        </ScrollAnimation>
      </div>
    </Container>
  );
}