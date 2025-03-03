import styled from "styled-components";

// Container for the About section
export const Container = styled.section`
  margin-top: 12rem;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;

  // Styling for the hard skills section
  .hard-skills {
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }

  // Styling for each skill icon
  .hability {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      width: 3.4rem;
    }
  }

  // Styling for the About section title
  h2 {
    display: inline-block;
    margin-bottom: 2rem;
    font-size: 3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  // Styling for the skills subtitle
  h3 {
    margin-top: 2rem;
    color: var(--green);
  }

  // Styling for the paragraph text
  p {
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }

  // Styling for the About image
  .about-image {
    text-align: center;

    img {
      margin-top: 2rem;
      width: 100%; // Increase the width to fit better on screen
      max-width: 500px; // Set a maximum width to prevent it from being too large
      filter: grayscale(0);
      transition: filter 0.5s;

      &:hover {
        filter: grayscale(0);
      }
    }
  }

  // Media query for small screens
  @media only screen and (max-width: 480px) {
    .about-image {
      max-width: 100%;
      margin-top: 4rem;

      img {
        margin-top: 2rem;
        width: 100%;
        max-width: 500px; // Set a maximum width to prevent it from being too large
        filter: grayscale(0);
        transition: filter 0.5s;

        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }

  // Media query for medium screens
  @media (max-width: 960px) {
    display: block;
    text-align: center;

    .hard-skills {
      justify-content: center;
    }

    .about-image {
      display: flex;
      max-width: 100%;

      img {
        margin-top: 2rem;
        width: 100%;
        max-width: 500px; // Set a maximum width to prevent it from being too large
        filter: grayscale(0);
        transition: filter 0.5s;

        &:hover {
          filter: grayscale(0);
        }
      }
    }
  }
`