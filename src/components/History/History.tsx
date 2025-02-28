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
      description: "Provided technical support for managed services customers, both remotely and on-site. Increased phone answer rate from 30% to 95%. Improved customer satisfaction rate to 4.9/5 from 3.2/5. Applied diagnostic techniques to identify and resolve issues.",
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
      date: "2022.06 - 2022.07",
      description: "Worked quickly, communicated with other staff and always looked for better ways of completing tasks to improve productivity and keep tables ready for incoming guests.",
    },
    {
      title: "Server",
      location: "Maggiano's",
      date: "2022.04 - 2022.07",
      description: "Worked quickly, communicated with other staff and always looked for better ways of completing tasks to improve productivity and keep tables ready for incoming guests.",
    },
    {
      title: "Food Runner/Seafood Prep",
      location: "The Atlantic Seafood and Chophouse",
      date: "2021.04 - 2021.07",
      description: "Delivered food from kitchen to table while working closely with head chef and owner (who act as expeditors during service hours) in order to maintain flow of kitchen. Maintained speed of service for food orders while minimizing errors and complaints.",
    },
    {
      title: "Bellhop and Night Auditor",
      location: "The Harborside Inn",
      date: "2021.04 - 2021.07",
      description: "Greet guests and assist them with luggage. Worked closely with managers to assist with any tasks in need of completion. Completed night audit for guest ledgers to close bank and cash registers, reconciling issues quickly, and marking discrepancies. Oversaw night auditing of daily room occupancy and hotel revenue.",
    },
    {
      title: "Expeditor/Busser",
      location: "Chianti Il Ristorante",
      date: "2018.08 - 2019.07",
      description: "In charge of making sure each table received their correct order from the kitchen on time as an expeditor. Flipped tables, filled waters, served bread, polished glasses and silverware and performed other basic busser duties as a busser.",
    },
    {
      title: "Food Runner",
      location: "Adelphi Hospitality",
      date: "2018.05 - 2018.07",
      description: "Delivered food from kitchen to table according to expeditors orders. Maintained speed of service for food orders while minimizing errors and complaints.",
    },
    {
      title: "Busser",
      location: "Fish On 30 Lake",
      date: "2017.05 - 2017.07",
      description: "Worked quickly, communicated with other staff and always looked for better ways of completing tasks to improve productivity and keep tables ready for incoming guests.",
    },
  ];

  const educationEvents = [
    {
      title: "15 Week Program in Software Engineering: Full Stack Development",
      location: "Flatiron School",
      date: "2023.02 - 2023.07",
      description: "Full stack development bootcamp. Classes in Python, JavaScript, React, Flask, HTML, CSS, SQL and more.",
    },
    {
      title: "Study Abroad - International Relations",
      location: "Sciences Po Saint Germain En Laye, France",
      date: "2022.09 - 2022.12",
      description: "Study abroad program in Saint Germain En Laye, France. Classes in International Relations.",
    },
    {
      title: "Study Abroad - French Language, History, And Culture",
      location: "LA Sorbonne Paris, France",
      date: "2022.09 - 2022.12",
      description: "Study abroad program in Paris, France. Classes in French language, history, and culture.",
    },
    {
      title: "Bachelor of Arts - Communication",
      location: "SUNY Geneseo",
      date: "2019.09 - 2022.12",
      description: "Received a Bachelors Degree in Communication: Journalism and Media, Personal and Professional. Completed degree one semester early. Also studied Chinese and French in depth, as well as International Relations.",
    },
    {
      title: "Teacher's Assistant - Jasmine Tang's Chinese Language Class",
      location: "SUNY Geneseo",
      date: "2021.01 - 2021.05",
      description: "Supported lead teacher in virtual classroom during COVID lockdowns. Assisted with lesson preparation, monitored class schedule, took attendance, and provided one-on-one support to students.",
    },
    {
      title: "Associate of Science in Entrepreneurship And Sustainable Technologies",
      location: "Hudson Valley Community College",
      date: "2015.09 - 2019.06",
      description: "Attended an early college High School program through HVCC and received college credits. Studied sustainable technologies, renewable energy, and entrepreneurship.",
    },
    {
      title: "Saratoga Springs High School",
      location: "Saratoga Springs, NY",
      date: "2015.09 - 2019.06",
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
