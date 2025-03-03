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
      title: "Support Engineer 1",
      location: "cb20, Saratoga Springs, NY",
      date: "December 2024 - Current",
      description: "Provided technical support for managed services customers, both remotely and on-site. Drove phone answer rate from 30% to 95%. Improved CSAT rate to 3.2/5 from 4.9/5.",
    },
    {
      title: "Server",
      location: "The Whistling Kettle, Ballston Spa, NY",
      date: "October 2024 - Current",
      description: "Managed and upsold gourmet tea. Met sales goals by encouraging merchandise purchases. Handled customer inquiries and ensured high satisfaction.",
    },
    {
      title: "Captain",
      location: "Navy Blue, Houston, TX",
      date: "May 2024 - October 2024",
      description: "Worked as a server in fine dining. Demonstrated excellent customer service skills and maintained a clean and organized work area. Updated POS system according to menu changes.",
    },
    {
      title: "Server",
      location: "The Daily Catch",
      date: "May 2022 - July 2022",
      description: "Provided quick and efficient service, communicated effectively with kitchen staff, and ensured tables were ready for new guests promptly.",
    },
    {
      title: "Server",
      location: "Maggiano's",
      date: "April 2022 - June 2022",
      description: "Delivered excellent customer service, collaborated with team members, and maintained a high level of productivity to keep tables ready for incoming guests.",
    },
    {
      title: "Food Runner and Seafood Preperation Chef",
      location: "The Atlantic Seafood and Chophouse",
      date: "May 2021 - August 2021",
      description: "Delivered food from kitchen to table while working closely with head chef and owner (who act as expeditors during service hours) in order to maintain flow of kitchen. Maintained speed of service for food orders while minimizing errors and complaints.",
    },
    {
      title: "Bellhop and Night Auditor",
      location: "The Harborside Inn",
      date: "May 2021 - August 2021",
      description: "Greet guests and assist them with luggage. Worked closely with managers to assist with any tasks in need of completion. Completed night audit for guest ledgers to close bank and cash registers, reconciling issues quickly, and marking discrepancies. Oversaw night auditing of daily room occupancy and hotel revenue.",
    },
    {
      title: "Teacher's Assistant - Jasmine Tang's Chinese Language Class",
      location: "SUNY Geneseo",
      date: "January 2021 - May 2021",
      description: "Supported lead teacher in virtual classroom during COVID lockdowns. Assisted with lesson preparation, monitored class schedule, took attendance, and provided one-on-one support to students.",
    },
    {
      title: "Expeditor and Busser",
      location: "Chianti Il Ristorante",
      date: "August 2018 - September 2019",
      description: "Ensured timely delivery of orders from the kitchen, maintained table readiness, and performed various busser duties such as filling waters and polishing silverware.",
    },
    {
      title: "Food Runner",
      location: "Adelphi Hospitality",
      date: "May 2018 - August 2018",
      description: "Delivered food from kitchen to table according to expeditors orders. Maintained speed of service for food orders while minimizing errors and complaints.",
    },
    {
      title: "Busser",
      location: "Fish On 30 Lake",
      date: "May 2017 - August 2017",
      description: "Worked quickly, communicated with other staff and always looked for better ways of completing tasks to improve productivity and keep tables ready for incoming guests.",
    },
  ];

  const educationEvents = [
    {
      title: "15 Week Program in Software Engineering: Full Stack Development",
      location: "Flatiron School",
      date: "February 2023 - July 2023",
      description: "Software Enginnering - Full Stack Development Bootcamp. Classes in Python, JavaScript, React, Flask, HTML, CSS, SQL and more.",
    },
    {
      title: "Bachelor of Arts - Communication",
      location: "SUNY Geneseo",
      date: "September 2019 - December 2022",
      description: "Received a Bachelors Degree in Communication: Journalism and Media, Personal and Professional. Completed degree one semester early. Also studied Chinese and French in depth, as well as International Relations.",
    },
    {
      title: "Study Abroad - International Relations",
      location: "Sciences Po Saint Germain En Laye, France",
      date: "September 2022 - December 2022",
      description: "Study abroad program in Saint Germain En Laye, France. Classes in International Relations.",
    },
    {
      title: "Study Abroad - French Language, History, And Culture",
      location: "LA Sorbonne Paris, France",
      date: "September 2022 - December 2022",
      description: "Study abroad program in Paris, France. Classes in French language, history, and culture.",
    },
    {
      title: "Associate of Science in Entrepreneurship And Sustainable Technologies",
      location: "Hudson Valley Community College",
      date: "September 2015 - June 2019",
      description: "Attended an early college High School program through HVCC and received college credits. Studied computer science, sustainable technologies, renewable energy, entrepreneurship.",
    },
    {
      title: "Saratoga Springs High School",
      location: "Saratoga Springs, NY",
      date: "September 2015 - June 2019",
      description: "Received a New York Regents Diploma.",
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
