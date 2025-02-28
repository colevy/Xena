import styled from "styled-components";

export const Container = styled.section`
  margin-top: 10rem;
  padding: 2rem;

  h2 {
    text-align: center;
    font-size: 4rem;
    color: #FFF; /* Make the History title white */
  }

  .history {
    margin-top: 2rem;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 1rem;
  }

  @media (max-width: 960px) {
    .history {
      grid-template-columns: 1fr 1fr;
    }
  }

  @media (max-width: 740px) {
    .history {
      grid-template-columns: 1fr;
    }
  }
`;

export const Subtitle = styled.h3`
  text-align: left;
  font-size: 2.5rem;
  color: var(--green); /* Use the same green as the titles */
  margin-top: 3rem;
`;

export const EventCard = styled.div`
  perspective: 1000px;
  cursor: pointer;
  position: relative;
  width: 100%;
  margin-bottom: 2rem; /* Add margin to separate cards */
  transition: transform 0.25s, height 0.6s;

  &:hover {
    transform: translateY(-5px); /* Bump up effect */
  }

  &.flipped {
    height: auto; /* Expand to fit content */
  }

  &.flipped .inner {
    transform: rotateY(180deg);
  }

  .inner {
    position: relative;
    width: 100%;
    height: 100%;
    transition: transform 0.6s, height 0.6s;
    transform-style: preserve-3d;
  }
`;

export const EventFront = styled.div`
  background-color: #2b2b2b;
  padding: 2rem 1.8rem;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  height: 200px; /* Fixed height for front */
  color: #FFF;
  backface-visibility: hidden;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1a1a1a; /* Darker grey color for hover */
  }

  h3 {
    font-size: 2rem;
    color: var(--green);
    margin-bottom: 1rem;
  }

  p {
    font-size: 1.6rem;
    color: var(--dark-gray);
    margin-bottom: 0.5rem;
  }
`;

export const EventBack = styled.div`
  background-color: #2b2b2b;
  padding: 2rem 1.8rem;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  height: auto; /* Auto height for back */
  color: #FFF;
  backface-visibility: hidden;
  transform: rotateY(180deg);
  transition: background-color 0.3s;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
`;
