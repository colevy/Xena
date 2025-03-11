import { Container } from "./styles";
import ScrollAnimation from "react-animate-on-scroll";
import drinkImage from "../../assets/drink.png";
import harryImage from "../../assets/harry.png";
import fingerImage from "../../assets/finger.png";

export function Headshots() {
  const headshots = [
    {
      imageUrl: drinkImage,
    },
    {
      imageUrl: harryImage,
    },
    {
      imageUrl: fingerImage,
    },
  ];

  return (
    <Container id="headshots">
      <h2>My Headshots</h2>
      <div className="headshots">
        {headshots.map((headshot, index) => (
          <ScrollAnimation animateIn="flipInX" key={index}>
            <div className="headshot">
              <img src={headshot.imageUrl} alt={`Headshot ${index + 1}`} />
            </div>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}