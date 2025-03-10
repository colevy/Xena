import React, { useState } from 'react';
import { Container, EventCard, EventFront, EventBack, Subtitle } from './styles';
import ScrollAnimation from "react-animate-on-scroll";

export function History() {
  const [flippedIndex, setFlippedIndex] = useState<number | null>(null);

  const handleFlip = (index: number) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const workEvents = [
    {
      title: "Receptionist",
      location: "Saratoga Hospital, Saratoga Springs, NY",
      date: "October 2024 - Current",
      description: "I use magic crystals and bring my shaman gnome buddy to heal people. Check them in to get healed, that is. We run a tight ship me and my tusty gnome scribe.",
    },
    {
      title: "Dominatrix",
      location: "Dungeon",
      date: "Lifetime",
      description: "I make boys bitches. I make them cry. My speciality is the strap. I be tearing that shit UP!",
    },
  ];

  const educationEvents = [
    {
      title: "Super Fun Community College",
      location: "The Land of the Free, Home of the Brave",
      date: "September 2016 - July 2020",
      description: "Call this shit bad bitch university cuz its where I learned to be the BADDEST bitch. All my Zeta's say HEYYYYYY GIRL!",
    },
    {
      title: "Foster Care",
      location: "Fosters Home for Imaginary Friends",
      date: "October 2024 - Current",
      description: "Technically school? No. But I learned more here than I did anywhere else. I became a strong independent woman here.",
    },
  ];

  return (
    <Container id="history">
      <h2>History</h2>
      <Subtitle>Work</Subtitle>
      <div className="history">
        {workEvents.map((event, index) => (
          <ScrollAnimation animateIn="flipInX" key={index}>
            <EventCard
              onClick={() => handleFlip(index)}
              className={flippedIndex === index ? 'flipped' : ''}
              style={{ height: 'auto', position: 'relative' }}
            >
              <div className="inner">
                <EventFront>
                  <h3>{event.title}</h3>
                  <p>{event.location}</p>
                  <p>{event.date}</p>
                </EventFront>
                <EventBack>
                  <p>{event.description}</p>
                </EventBack>
              </div>
            </EventCard>
          </ScrollAnimation>
        ))}
      </div>
      <Subtitle>Education</Subtitle>
      <div className="history">
        {educationEvents.map((event, index) => (
          <ScrollAnimation animateIn="flipInX" key={index}>
            <EventCard
              onClick={() => handleFlip(index + workEvents.length)}
              className={flippedIndex === index + workEvents.length ? 'flipped' : ''}
              style={{ height: 'auto', position: 'relative' }}
            >
              <div className="inner">
                <EventFront>
                  <h3>{event.title}</h3>
                  <p>{event.location}</p>
                  <p>{event.date}</p>
                </EventFront>
                <EventBack>
                  <p>{event.description}</p>
                </EventBack>
              </div>
            </EventCard>
          </ScrollAnimation>
        ))}
      </div>
    </Container>
  );
}
