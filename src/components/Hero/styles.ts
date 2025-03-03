import styled from "styled-components";

// Container for the Hero section
export const Container = styled.section`
  padding-top: 15%;
  display: flex;
  justify-content: space-between;
  gap: 8rem;
  background: rgba(0,0,0,0);

  // Styling for the hero text
  .hero-text {
    & > p {
      font-size: 1.8rem;
    }
    h1 {
      font-size: 7rem;
    }
    h3 {
      color: var(--green);
      margin: 1rem 0;
    }
    p.small-resume {
      margin-bottom: 5rem;
    }
  }

  // Styling for the social media icons
  .social-media {
    display: inline-flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    padding-top: 5rem;
    padding-left: 1rem;

    img, span {
      font-size: 3rem;
      width: 3.5rem;
    }
  }

  // Styling for the contact button
  .button {
    margin-top: 5rem;
    padding: 1.4rem 6rem;
  }

  // Styling for the hero image
  .hero-image {
    text-align: center;

    img {
      margin-top: 2rem;
      width: 100%; // Increase the width to fit better on screen
      max-width: 800px; // Set a maximum width to prevent it from being too large
      filter: grayscale(0);
      transition: filter 0.1s;

      &:hover {
        filter: grayscale(0);
      }
    }
  }

  // Media query for small screens
  @media only screen and (max-width: 480px) {
    .hero-image {
      max-width: 100%;
      margin-top: 4rem;

      img {
        margin-top: 2rem;
        width: 100%;
        max-width: 800px; // Set a maximum width to prevent it from being too large
        filter: grayscale(0);
        transition: filter 0.2s;

        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }

  // Media query for medium screens
  @media (max-width: 960px) {
    display: block;
    margin-top: 15%;

    .hero-text {
      h1 {
        font-size: 5rem;
      }
    }

    .hero-image {
      display: flex;
      max-width: 100%;

      img {
        margin-top: 2rem;
        width: 100%;
        max-width: 800px; // Set a maximum width to prevent it from being too large
        filter: grayscale(0);
        transition: filter 0.5s;

        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }

  // Additional media queries for smaller screens
  @media (max-width: 600px) {
    margin-top: 35%;
  }

  @media (max-width: 480px) {
    margin-top: 45%;
  }
`